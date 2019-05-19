$(document).ready(function () {
	$('#passcode').keydown(function(e) {
		if (e.keyCode==13) {
			$(this).blur();
			show();
		}
	});
});

function show(){
	var pass='6394210ce21ac27fb5de7645824dff9be9ba0690';
	var userInput=$.sha1($("#passcode").val());
	$("#passcode").val('');
	if (userInput==pass){
		go_static();
	}else{
		$("#info").html('&#x1f64a&#x1f64a&#x1f64a&#x1f64a&#x1f64a');
	}
}

function go_static(){
	var radio=['unionskilltree'];
	var info = '<form id="static" action="">';
	for (var i in radio){
		info += '<label><input type="radio" name="radio_static" id="static_'+radio[i]+'" value="'+radio[i]+'" '+(i==0?'checked':'')+' >'+radio[i]+'</label><label>';
	}
	info += '</form><br>';
	info += '<textarea id="static_input" rows="10" style="width:100%"></textarea><br>';
	info += button('↓↓↓↓↓','static_generate()')+'<br>';
	info += '<textarea id="static_output" rows="10" style="width:100%"></textarea><br>';
	
	$("#info").html(info);
}

function static_generate(){
	var staticMode = $("#static input[type=radio]:checked").val();
	var static_input = $("#static_input").val();
	if(static_input) {
		var contents = contentOf(static_input)[0];
		var contentsName = contentOf(static_input)[1];
		var out = '';
		var errmsg = '';
		for (var i in contents){
			switch(staticMode){
				case 'unionskilltree' :
					//var name = contentBy(contents[i],'name',1)[0].replace(/[\ \"]/g,'');
					//var genre = contentBy(contents[i],'genre')[0];
					var id = contentsName[i];
					var name = contentVar(contents[i],'["name.zh_chs"] ',1).replace(/[\ \"]/g,'');
					var group = contentVar(contents[i],'group');
					var preskill = contentVar(contents[i],'preskill1');
					var price = contentVar(contents[i],'price1');
					var tree_id = contentVar(contents[i],'tree_id');
					var position = contentVar(contents[i],'position');
					var desc = contentVar(contents[i],'["desc.zh_chs"] ',1).replace(/[\ \"]/g,'');
					var desc1 = getBetween(desc, '<color=#D67F6E>', '</color>');
					out += '"'+id+'":["'+name+'",'+group+','+preskill+','+price+','+tree_id+','+position+',"'+desc1 + '"],\n';
					//"id":["name",group,preskill,price,tree_id,position,"desc"],
				break;
				default:
					break;
			}
		}
		if (errmsg) alert('尚缺:'+errmsg);
		$("#static_output").val(out);
	}
}

function contentOf(txt){
	var ind=0; var ind2=0;
	var ret=[]; var ret_cont=''; var ret_name=''; var name=[];
	for (var i=0; i<txt.length; i++){
		var c = txt.substr(i,1);
		if (c=='{') ind++;
		else if (c=='}') {
			ind--;
			if (ind==0) {ret.push(ret_cont.substr(1)); ret_cont=''; name.push(ret_name); ret_name='';}
		}
		if (ind>0) ret_cont += c;
		else if (c.match(/^[0-9a-z]$/)) ret_name += c;
	}
	return [ret,name];
}

function contentVar(txt,varname,keepChars){
	if (!keepChars) txt = txt.replace(/[^0-9a-z\,_{}=]/gi,'');
	var varname1 = varname + '=';
	return getBetween(txt, varname1, ',');
}

function getBetween(txt, pref, post){
	var pos1 = txt.indexOf(pref);
	var pos2 = txt.indexOf(post);
	if (pos1<0 || pos2<0) return '';
	var sp1 = txt.split(pref);
	return sp1[1].split(post)[0];
}

function button(text,onclick){
	return '<button onclick="'+onclick+';return false;">'+text+'</button>'
}

function ahref(text,onclick,cls){
	return '<a href="" onclick="'+onclick+';return false;" '+(cls? 'class="'+cls+'" ' : '')+'>'+text+'</a>';
}
