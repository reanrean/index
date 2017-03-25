window.onload = function(){ 
	init();
}

function init(){
	showDate();
	reorgEvent();
	outputMain();
	loadSettings();
}

function outputMain(){
	var skipEvent = [];
	var out = '<table>';
	out += tr(td('期限')+td('活動')+td('符石', 'colspan="2"'),'class="title"');
	
	for (var i in eventList_reorg){
		if (skipEvent.indexOf(i)>=0) continue;
		var cnt = eventList_reorg[i].length;
		var eventEnds = (new Date(todayYear,eventList_reorg[i][0][2]-1,eventList_reorg[i][0][3],0,0,0,0));//red the dates in 7 days
		if (eventEnds<today0) {skipEvent.push(i); continue;}
		var line  = td(eventList_reorg[i][0][3]+'/'+eventList_reorg[i][0][2],(eventEnds<future?'class="expiring"':''));
		line += td(i);
		var sum = sumRunes(i);
		var checkid = 'main-'+i;
		line += td('<label for="'+checkid+'">'+sumRunesOutput(sum,i)+'</label>');
		line += td('<input type="checkbox" id="'+checkid+'" onclick="check(this.id);saveSettings();" >');
		out += tr(line,'id="trmain-'+i+'"');
		if (cnt>1) {
			for (var j in eventList_reorg[i]) {
				line = td('');
				line += td('- '+eventList_reorg[i][j][0]);
				line += td(singleRunesOutput(eventList_reorg[i][j][1],sum));
				line += td('<input type="checkbox" id="sub-'+i+'-'+eventList_reorg[i][j][0]+'" onclick="check(this.id);saveSettings();" >');
				out += tr(line,'id="trsub-'+i+'-'+eventList_reorg[i][j][0]+'"');
			}
		}
	}
	
	out += '</table>';
	el('table').innerHTML = out;
}

function check(id){
	var checked = el(id).checked;
	var arr = id.split('-');
	
	if(checked) el('tr'+id).className = "done";
	else el('tr'+id).className = "";
	
	if (arr[0] == "main"){
		var alltr = document.getElementsByTagName("tr");
		for (var i=0;i<alltr.length;i++) if(alltr[i].id&&alltr[i].id.startsWith('trsub-'+arr[1])) {
			if(checked) alltr[i].style.display = "none";
			else alltr[i].style.display = "table-row";
		}
	}else{//sub
		for (var i in eventList_reorg[arr[1]]) if(eventList_reorg[arr[1]][i][0]==arr[2]){
			var subAmt = eventList_reorg[arr[1]][i][1];
			for (var j in subAmt){
				var parentAmt = el('main-'+arr[1]+'-'+j);
				if(checked) parentAmt.innerHTML = Number(parentAmt.innerHTML) - subAmt[j];
				else parentAmt.innerHTML = Number(parentAmt.innerHTML) + subAmt[j];
			}
		}
	}
}

function reorgEvent(){
	eventList.sort(function(a,b){return (a[1]==b[1] ? a[0]-b[0] : a[1]-b[1])});
	
	//'eventCate': [ [eventName,[runeName,runeAmount], month, date], [...] ]
	eventList_reorg = {};
	for (var i in eventList){
		if (!eventList_reorg[eventList[i][2]]) eventList_reorg[eventList[i][2]] = [];
		var arr = [eventList[i][3],eventList[i][4],eventList[i][1],eventList[i][0]];
		eventList_reorg[eventList[i][2]].push(arr);
	}
}

function sumRunes(eventCate){
	var out = {};
	for (var i in eventList_reorg[eventCate]){
		for (var j in eventList_reorg[eventCate][i][1]){
			var runeName = j;
			var runeAmount = eventList_reorg[eventCate][i][1][j];
			if (!out[runeName]) out[runeName] = 0;
			out[runeName] += runeAmount;
		}
	}
	return out;
}

function singleRunesOutput(arr,sum){
	var out = '<table class="sub"><tr>';
	for (var s in sum){
		if (arr[s]) out += td(arr[s]);
		else out += td('');
	}
	out += '</tr></table>';
	return out;
}

function sumRunesOutput(sum,eventCate){
	var sumOutput = '<table class="sub">';
	var sumOutput1 = '';
	var sumOutput2 = '';
	for (var s in sum){
		sumOutput1 += td(icon(s));
		sumOutput2 += td(sum[s],'id="main-'+eventCate+'-'+s+'"');
	}
	sumOutput += tr(sumOutput1)+tr(sumOutput2)+'</table>';
	return sumOutput;
}

function showDate(){
	var today = new Date();
	var todayDate = today.getDate();
	var todayMonth = today.getMonth();
	todayYear = today.getFullYear();
	el('today').innerHTML = '<span class="today">Today: ' + todayDate+'/'+(todayMonth+1)+'/'+todayYear+'</span>';
	
	today0 = new Date(todayYear+'-'+(todayMonth+1)+'-'+todayDate);
	future = new Date(today.getTime() + (alertDays * 24 * 60 * 60 * 1000));
}

function loadSettings(){
	if (typeof(Storage) !== "undefined" && localStorage.getItem("wcatchk_rinne")) {
		var loadString=localStorage.getItem("wcatchk_rinne");
		var checkName=loadString.split(',');
		for (i=0;i<checkName.length;i++) if(el(checkName[i])) {
			el(checkName[i]).checked=true;
			check(checkName[i]);
		}
	}
}

function saveSettings(){
	var saveArr = [];
	var allchk = document.getElementsByTagName("input");
	for (var i=0;i<allchk.length;i++){
		var checkName = allchk[i].id;
		if(el(checkName).checked) saveArr.push(checkName);
	}
	var saveString = saveArr.join(',');
	if (typeof(Storage) !== "undefined") {
		localStorage.setItem("wcatchk_rinne", saveString);
	}
	document.getElementById('storage').innerHTML=saveString;
}

function el(text){
	return document.getElementById(text);
}
function td(text,attr){
	return '<td'+(attr?' '+attr:'')+'>'+text+'</td>';
}
function tr(text,attr){
	return '<tr'+(attr?' '+attr:'')+'>'+text+'</tr>';
}
function icon(runeName){
	if (runeUrl[runeName]) return '<img src="'+runeUrl[runeName]+'" width="100%">';
	else return '?';
}