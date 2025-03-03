var version = '250202.18';

var LOWCP_A = 696;
var LOWEST = 698;
var c_rev_numbers = [
//below or equal this pct, revenue
[150,30],
[2130/14,29],
[2160/14,28],
[2190/14,27],
[2220/14,26],
[2250/14,25],
[2280/14,24],
[165,23],
[2340/14,22],
[2370/14,21],
[2400/14,20],
[2430/14,19],
[2460/14,18],
[2490/14,17],
[179.999,16],
[184,15],
[188,14],
[192,13],
[196,12],
[200,11],
[1870/9,10],
[1940/9,9],
[2010/9,8],
[2080/9,7],
[2150/9,6],
[2220/9,5],
[2290/9,4],
[2360/9,3],
[270,2],
[290,15],
[330,16],
[350,17],
[1000,0],
];

var b_rev_numbers = [
[250,48],
[262.5,47],
[275,46],
[287.5,45],
[300,44],
[312.5,43],
[325,42],
[337.5,41],
[350,40],
[1060/3,39],
[1070/3,38],
[360,37],
[1090/3,36],
[1100/3,35],
[370,34],
[1120/3,33],
[1130/3,32],
[380,31],
[1150/3,30],
[1160/3,29],
[390,28],
[1180/3,27],
[1190/3,26],
[400,25],
[1210/3,24],
[1220/3,23],
[410,22],
[1240/3,21],
[1250/3,20],
[420,19],
[1270/3,18],
[1280/3,17],
[450,16],
[475,15],
[500,14],
[525,13],
[550,12],
[575,11],
[1000,10],
];

var a_rev_numbers = [
[600,80],
[602,79],
[604,78],
[606,77],
[608,76],
[610,75],
[612,74],
[614,73],
[616,72],
[618,71],
[620,70],
[622,69],
[624,68],
[626,67],
[628,66],
[630,65],
[632,64],
[634,63],
[636,62],
[638,61],
[640,60],
[642,59],
[644,58],
[646,57],
[648,56],
[650,55],
[652,54],
[654,53],
[656,52],
[658,51],
[660,50],
[662,49],
[664,48],
[666,47],
[668,46],
[670,45],
[672,44],
[674,43],
[676,42],
[678,41],
[680,40],
[682,39],
[684,38],
[686,37],
[688,36],
[690,35],
[692,34],
[694,33],
[696,32],
[698,31],
[1000,30],
];

var dia_rev_numbers = [
[1000,140],
];

var rareCheck = 'rare-ssr';

window.onload = function() {
    document.getElementById('version').innerHTML = version;
    
    // Attach onchange listeners
    document.getElementById('lv').addEventListener('change', calculate);
    document.getElementById('rare-ssr').addEventListener('change', calculate);
    document.getElementById('rare-sr').addEventListener('change', () => { $('#confirmModal').modal('show'); });
    document.getElementById('rare-r').addEventListener('change', () => { $('#confirmModal').modal('show'); });
    document.getElementById('modal-confirm').addEventListener('click', calculate);
    document.getElementById('modal-cancel').addEventListener('click', () => { document.getElementById(rareCheck).checked = true; });
    document.getElementById('current').addEventListener('change', calculate);
    document.getElementById('radio1').addEventListener('change', calculate);
    document.getElementById('radio2').addEventListener('change', calculate);
    document.getElementById('tgt-pct').addEventListener('change', calculate);
    document.getElementById('save').addEventListener('change', changesave);
    document.getElementById('c').addEventListener('change', calculate);
    document.getElementById('b').addEventListener('change', calculate);
    document.getElementById('a').addEventListener('change', calculate);
    document.getElementById('cmin').addEventListener('change', calculate);
    document.getElementById('bmin').addEventListener('change', changebmin);
    document.getElementById('amin').addEventListener('change', changeamin);
    document.getElementById('70b').addEventListener('change', change70b);
    document.getElementById('70a').addEventListener('change', change70a);
    document.getElementById('stop60').addEventListener('change', calculate);
    
    // Initialize Bootstrap tooltips
    $(function () {
        $('[data-toggle="tooltip"]').tooltip();
    });
    
    // Call the function to calculate initial values
    calculate();
};

function changesave() {
    if (document.getElementById('save').checked) {
        document.getElementById('70b').checked = false;
        change70b();
        document.getElementById('70a').checked = false;
        change70a();
    } else {
        document.getElementById('70b').checked = true;
        change70b();
        document.getElementById('70a').checked = true;
        change70a();
    }
    calculate();
}

function changebmin() {
    if (parseInt(document.getElementById('bmin').value) == 10) {
        document.getElementById('70b').checked = true;
    }
    calculate();
}

function changeamin() {
    if (parseInt(document.getElementById('amin').value) == 30) {
        document.getElementById('70a').checked = true;
    } else {
        document.getElementById('70a').checked = false;
    }
    calculate();
}

function change70a() {
    if (document.getElementById('70a').checked) {
        document.getElementById('amin').value = 30;
    } else if (parseInt(document.getElementById('amin').value) == 30) {
        document.getElementById('amin').value = 32;
    }
    calculate();
}

function change70b() {
    if (document.getElementById('70b').checked) {
        // do nothing
    } else if (parseInt(document.getElementById('bmin').value) == 10) {
        document.getElementById('bmin').value = 11;
    }
    calculate();
}

function getRev(pct, potion) {
    if (pct < 0 || pct > 1000) return 0;
    switch (potion) {
        case 'c':
            for (var i = 0; i < c_rev_numbers.length; i++) {
                if (pct <= c_rev_numbers[i][0]) {
                    return c_rev_numbers[i][1];
                }
            }
            break;
        case 'b':
            for (var i = 0; i < b_rev_numbers.length; i++) {
                if (pct <= b_rev_numbers[i][0]) {
                    return b_rev_numbers[i][1];
                }
            }
            break;
        case 'a':
            for (var i = 0; i < a_rev_numbers.length; i++) {
                if (pct <= a_rev_numbers[i][0]) {
                    return a_rev_numbers[i][1];
                }
            }
            break;
        case 'd':
            return 140;
    }
}

function getPct(current, upper) {
    return (current * 1000 / upper);
}

function showPct(pct) {
    return Math.floor(pct) / 10;
}

function calculate() {
    var lv = parseInt(document.getElementById('lv').value);
    var current = parseInt(document.getElementById('current').value);
    var upper = document.getElementById('rare-ssr').checked ? (Math.max(lv, 60) - 60) * 3640 + 84000 : 
                document.getElementById('rare-sr').checked ? (Math.max(lv, 60) - 60) * 2693.6 + 62160 :
                (Math.max(lv, 60) - 60) * 1734.2 + 40020;
    rareCheck = document.getElementById('rare-ssr').checked ? 'rare-ssr' : 
                document.getElementById('rare-sr').checked ? 'rare-sr' :
                'rare-r';
    var pct = getPct(current, upper);
    var isUseall = document.getElementById('radio1').checked;
    var tgtPct = Math.floor(parseFloat(document.getElementById('tgt-pct').value) * 10);
    var c = parseInt(document.getElementById('c').value);
    var b = parseInt(document.getElementById('b').value);
    var a = parseInt(document.getElementById('a').value);
    var cmin = parseInt(document.getElementById('cmin').value);
    var bmin = parseInt(document.getElementById('bmin').value);
    var amin = parseInt(document.getElementById('amin').value);
    var b70 = document.getElementById('70b').checked;
    var stop60 = document.getElementById('stop60').checked;

    // Default output if input invalid
    document.getElementById('upper').innerHTML = '';
    document.getElementById('pct').innerHTML = '';
    document.getElementById('result').innerHTML = '';
    
    // Validate lv
    if (isNaN(lv) || lv < 1 || lv > 200) {
        document.getElementById('error').innerHTML = t_e_lv;
        return; // Exit the function if the levels are invalid
    }
    document.getElementById('upper').innerHTML = Math.floor(upper); // lv validated

    // Validate current
    if (isNaN(current) || current < 0) {
        document.getElementById('error').innerHTML = t_e_current;
        return;
    } else if (current >= upper) {
        document.getElementById('error').innerHTML = t_e_current_upper;
        document.getElementById('pct').innerHTML = '100.0';
        return;
    }
    document.getElementById('pct').innerHTML = showPct(pct); // current validated
    
    // Validate tgt-pct
    if (!isUseall && (isNaN(tgtPct) || !isFinite(tgtPct) || tgtPct < 0 || tgtPct > 1000 || tgtPct <= pct)) {
        document.getElementById('error').innerHTML = t_e_tgtpct;
        return;
    }
    
    // Validate a,b,c
    if (isNaN(a) || isNaN(b) || isNaN(c) || a < 0 || b < 0 || c < 0) {
        document.getElementById('error').innerHTML = t_e_abc;
        return;
    }
    
    // Validate amin,bmin,cmin
    if (isNaN(amin) || isNaN(bmin) || isNaN(cmin) || cmin < 2 || cmin > 30 || bmin < 10 || bmin > 48 || amin < 30 || amin > 80 ) {
        document.getElementById('error').innerHTML = t_e_abcmin;
        return;
    }
    
    // All Input validated
    document.getElementById('error').innerHTML = '&ensp;';
    
    // Start loop
    var condition = true;
    var resultArr = [];
    while (condition) {
        var crev = getRev(pct, 'c');
        var brev = getRev(pct, 'b');
        var arev = getRev(pct, 'a');
        var drev = getRev(pct, 'd');
        var lastUsed = (resultArr.length > 0 ? resultArr[resultArr.length - 1][0] : '');
        if (crev >= cmin && c > 0) {
            current += crev;
            c--;
            pct = getPct(current, upper);
            if (lastUsed != 'C') {
                resultArr.push(['C', 1, current, pct, c, 0]);
            } else {
                resultArr[resultArr.length - 1][1]++;
                resultArr[resultArr.length - 1][2] = current;
                resultArr[resultArr.length - 1][3] = pct;
                resultArr[resultArr.length - 1][4] = c;
            }
        } else if (brev >= bmin && b > 0) {
            current += brev;
            b--;
            pct = getPct(current, upper);
            if (lastUsed != 'B') {
                resultArr.push(['B', 1, current, pct, b, 0]);
            } else {
                resultArr[resultArr.length - 1][1]++;
                resultArr[resultArr.length - 1][2] = current;
                resultArr[resultArr.length - 1][3] = pct;
                resultArr[resultArr.length - 1][4] = b;
            }
        } else if (arev >= amin && a > 0) {
            current += arev;
            a--;
            pct = getPct(current, upper);
            if (lastUsed != 'A') {
                resultArr.push(['A', 1, current, pct, a, ((crev >= cmin && !c) || (brev >= bmin && !b) ? 1 : 0)]);
            } else {
                resultArr[resultArr.length - 1][1]++;
                resultArr[resultArr.length - 1][2] = current;
                resultArr[resultArr.length - 1][3] = pct;
                resultArr[resultArr.length - 1][4] = a;
            }
        } else if (b70 && b > 0) {
            current += brev;
            b--;
            pct = getPct(current, upper);
            if (lastUsed != 'B') {
                resultArr.push(['B', 1, current, pct, b, 0]);
            } else {
                resultArr[resultArr.length - 1][1]++;
                resultArr[resultArr.length - 1][2] = current;
                resultArr[resultArr.length - 1][3] = pct;
                resultArr[resultArr.length - 1][4] = b;
            }
        } else if (!isUseall) {
            current += drev;
            pct = getPct(current, upper);
            if (lastUsed != 'D') {
                resultArr.push(['D', 1, current, pct, 0, ((crev >= cmin && !c) || (brev >= bmin && !b) ? 1 : 0)]);
            } else {
                resultArr[resultArr.length - 1][1]++;
                resultArr[resultArr.length - 1][2] = current;
                resultArr[resultArr.length - 1][3] = pct;
                resultArr[resultArr.length - 1][4] = 0;
            }
        }
        
        // check condition
        var crev = getRev(pct, 'c');
        var brev = getRev(pct, 'b');
        var arev = getRev(pct, 'a');
        if (isUseall && (c == 0 || crev < cmin ) && (b == 0 || (brev < bmin && !b70)) && (a == 0 || arev < amin)) {
            condition = false;
        }
        if (isUseall && stop60 && pct >= 600) {
            condition = false;
        }
        if (current >= upper) {
            condition = false;
        }
        if (!isUseall && pct >= tgtPct) {
            condition = false;
        }
    }

    // convert array to text
    var result = '';
    var rcnt = 0;
    var warned = 0;
    var a_alt = '';
    for (var i = 0; i < resultArr.length; i++) {
        item = resultArr[i];
        if (!warned && item[5]) {
            result += '<span style="color:red;">~~' + t_lowcp + '~~<br></span>';
            warned = 1;
        }
        if (item[0] == 'D') { // check whether potion A has higher CP
            var p_current = 0;
            var p_pct = 0;
            if (i > 0) { // D is not the first row
                p_current = resultArr[i-1][2];
                p_pct = resultArr[i-1][3];
            } else { // D is the first row
                p_current = parseInt(document.getElementById('current').value);
                p_pct = getPct(p_current, upper);
            }
            
            // use A first
            var a_used = 0;
            while ((p_pct < LOWCP_A || getRev(p_pct, 'a') >= amin) && p_pct < tgtPct && a_used < a) {
                p_current += getRev(p_pct, 'a');
                p_pct = getPct(p_current, upper);
                a_used++;
            }
            
            var l_current = p_current;
            var l_pct = p_pct;
            
            // check A cp with Dia
            var a_current = p_current;
            var a_pct = p_pct;
            var a_cnt = 0;
            while (a_pct < LOWCP_A && a_pct < tgtPct) {
                for (var j = 0; j < 100; j++) { // loop 100 potion A 
                    a_current += getRev(a_pct, 'a');
                    a_pct = getPct(a_current, upper);
                }
                if (a_current - p_current > 3150) { // 4500 dia = 3150 potential
                    if (a_pct <= tgtPct) {
                        a_cnt++;
                    } else if (getPct(p_current + 3150, upper) <= tgtPct) { // 100a exceeds target, but 4500dia didn't satisfy target
                        a_cnt++;
                    }
                    
                }
                p_current = a_current;
                p_pct = a_pct;
            }
            
            // alternative suggestion
            var d_used = 0;
            if (a_cnt > 0 || a_used > 0) {
                while (l_pct < tgtPct) {
                    if (a_used < a_cnt * 100 + a && (l_pct < LOWCP_A || getRev(l_pct, 'a') >= amin)) {
                        l_current += getRev(l_pct, 'a');
                        l_pct = getPct(l_current, upper);
                        a_used++;
                    } else {
                        l_current += getRev(l_pct, 'd');
                        l_pct = getPct(l_current, upper);
                        d_used++;
                    }
                }
            }
            var buy_cnt = Math.ceil(Math.max(a_used - a, 0) / 100);
            var a_rest = a + buy_cnt * 100 - a_used;
            if (a_used > 0 && buy_cnt*4500+d_used*200 < item[1]*200) {
                result += step_buya(i+1, buy_cnt, a_used, a_rest, d_used, l_current, l_pct, item[1]);
                a_alt = remaining_a_alt(i+1, a_rest);
            } else {
                result += step_dia(i+1, item[0], item[1], item[2], item[3], item[4]);
            }
        } else {
            result += step_normal(i+1, item[0], item[1], item[2], item[3], item[4]);
        }
    }
    result += remaining_potions(a, b, c) + a_alt;
    document.getElementById('result').innerHTML = result;
}

function toggleAdvanced() {
    $('.advanced-options').toggle();
    if ($('.advanced-options').is(':visible')) {
        $('#toggle-advanced').html('&#x25B2; ' + t_collapse + ' &#x25B2;');
    } else {
        $('#toggle-advanced').html('&#x25BC; ' + t_expand + ' &#x25BC;');
    }
}
