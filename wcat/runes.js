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
	out += tr(td('期限')+td('活動 <span id="reprint" class="today">[復刻]</span>', 'id="colEvent"')+td('符石'),'class="title"');
	
	for (var i in eventObj){
		if (skipEvent.indexOf(i)>=0) continue;
		var cnt = eventObj[i].length;
		var endTime = eventObj[i][0][2];
		var endDate = new Date(endTime).getDate();
		var endMonth = new Date(endTime).getMonth()+1;
		var checkid = 'main-'+i;
		var line  = td(labelfor(endDate+'/'+endMonth,checkid),(endTime<future?'class="expiring"':''));
		line += td(labelfor(i,checkid));
		var sum = sumRunes(i);
		line += td(labelfor(sumRunesOutput(sum,i),checkid));
		line += td('<input type="checkbox" id="'+checkid+'" onclick="check(this.id);saveSettings();" >', 'style="display:none"');
		out += tr(line,'id="tr'+checkid+'"');
		if (cnt>1) {
			for (var j in eventObj[i]) {
				var checkid_sub = 'sub-'+i+'-'+eventObj[i][j][0];
				line = td('');
				line += td(labelfor('- '+eventObj[i][j][0],checkid_sub));
				line += td(labelfor(singleRunesOutput(eventObj[i][j][1],sum),checkid_sub));
				line += td('<input type="checkbox" id="'+checkid_sub+'" onclick="check(this.id);saveSettings();" >', 'style="display:none"');
				out += tr(line,'id="tr'+checkid_sub+'"');
			}
		}
	}
	
	out += '</table>';
	el('table').innerHTML = out;
	
	initWidth = document.getElementsByTagName('table')[0].rows[0].cells[1].offsetWidth;
	
	//enable reprint clicking
	el('reprint').onclick = function() {
		if (el('reprint').className.indexOf('done')<0){
			el('reprint').className += ' done';
			var inputs = document.getElementsByTagName("input");
			for (var i=0; i<inputs.length; i++){
				if(inputs[i].type == "checkbox" && inputs[i].id.indexOf('(復刻)')>=0 && !el(inputs[i].id).checked) {
					el(inputs[i].id).checked=true;
					check(inputs[i].id);
				}
			}
			saveSettings();
		}
	};
}

function check(id){
	var checked = el(id).checked;
	var arr = id.split('-');
	
	if(checked) el('tr'+id).className = 'done';
	else {
		el('tr'+id).className = "";
		if (id.indexOf('(復刻)')>=0) el('reprint').className = "today";
	}
	
	if (arr[0] == "main"){
		var alltr = document.getElementsByTagName("tr");
		for (var i=0;i<alltr.length;i++) if(alltr[i].id&&alltr[i].id.startsWith('trsub-'+arr[1])) {
			if(checked) alltr[i].style.display = "none";
			else alltr[i].style.display = "table-row";
		}
	}else{//sub
		for (var i in eventObj[arr[1]]) if(eventObj[arr[1]][i][0]==arr[2]){
			var subAmt = eventObj[arr[1]][i][1];
			for (var j in subAmt){
				var parentAmt = el('main-'+arr[1]+'-'+j);
				if(checked) parentAmt.innerHTML = roundNum(Number(parentAmt.innerHTML) - subAmt[j]);
				else parentAmt.innerHTML = roundNum(Number(parentAmt.innerHTML) + subAmt[j]);
			}
		}
	}
	el('colEvent').style.width = initWidth+'px';
}

function reorgEvent(){
	//sort by runeName
	tmpSrt = [];
	for (var i in runeUrl) tmpSrt.push(i);
	tmpSrt.sort();
	
	//sort by endTime
	eventList.sort( function(a,b){
		var aTime = new Date(a[0]+":00 GMT+0800").getTime();
		var bTime = new Date(b[0]+":00 GMT+0800").getTime();
		return (aTime==bTime ? indexOfRunes(a[3])-indexOfRunes(b[3]) : aTime-bTime) 
	});
	
	//'eventCate': [ [eventName,[runeName,runeAmount], endTime], [...] ]
	eventObj = {};
	for (var i in eventList){
		var iTime = new Date(eventList[i][0]+":00 GMT+0800").getTime();
		if (today.getTime() > iTime) continue;
		if (!eventObj[eventList[i][1]]) eventObj[eventList[i][1]] = [];
		var arr = [eventList[i][2], eventList[i][3], iTime];
		eventObj[eventList[i][1]].push(arr);
	}
}

function indexOfRunes(obj){
	var idx = tmpSrt.length;
	for (var i in obj) if(tmpSrt.indexOf(i)<idx) idx = tmpSrt.indexOf(i);
	return idx;
}

function sumRunes(eventCate){
	var out = {};
	for (var i in eventObj[eventCate]){
		for (var j in eventObj[eventCate][i][1]){
			var runeName = j;
			var runeAmount = eventObj[eventCate][i][1][j];
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
		sumOutput2 += td(roundNum(sum[s]),'id="main-'+eventCate+'-'+s+'"');
	}
	sumOutput += tr(sumOutput1)+tr(sumOutput2)+'</table>';
	return sumOutput;
}

function showDate(){
	today = new Date();
	var todayDate = today.getDate();
	var todayMonth = today.getMonth()+1;
	var todayYear = today.getFullYear();
	el('today').innerHTML = '<span class="today">Today: ' + todayDate+'/'+todayMonth+'/'+todayYear+'</span>';
	
	future = new Date(today.getTime() + (alertDays * 24 * 60 * 60 * 1000)).getTime();
	
	//check month_end
	var month_end = new Date(todayYear,todayMonth,0,15,0,0,0).getTime();
	if (future>month_end && today<month_end)
		el('today').innerHTML += '<span class="expiring">　※記得檢查突破石！</span>';
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
	var inputs = document.getElementsByTagName("input");
	var allReprint = true;
	for (var i=0; i<inputs.length; i++){
		if(inputs[i].type == "checkbox" && inputs[i].id.indexOf('(復刻)')>=0 && !el(inputs[i].id).checked) {
			allReprint = false;
			break;
		}
	}
	if (allReprint) el('reprint').className += ' done';
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

function roundNum(i){
	if (i === parseInt(i)) return i;
	else return Math.round(i*10000)/10000;
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
	return runeUrl[runeName] ? '<img src="'+runeUrl[runeName]+'" class="pic">' + (runeExtraText[runeName]?'<br>'+runeExtraText[runeName]:'') : '?';
}
function labelfor(txt,id){
	return '<label for="'+id+'">'+txt+'</label>'
}