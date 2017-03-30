//date,month,eventCate,eventName,{runeName: runeAmount},reprint
//one line for each eventName
//if different date/monthn in same eventCate, use the earliest
var eventList = [
  [14,4,'25th活動','建築(忍者訓練所)',{'ninja25':500}],
  [14,4,'25th活動','交換(宇宙研究所)',{'space25':425}],
  [14,4,'25th活動','石板',{'space25':580}],
  [14,4,'25th活動','BGM',{'rocket':200,'ninja25':200}],
  [14,4,'25th活動','建築(宇宙研究所)',{'rocket':540}],
  [3,4,'熊貓','角色',{'panda1':1200,'panda2':400}],
  [3,4,'熊貓','武器',{'panda1':600,'panda2':200,'panda3':300}],
  [3,4,'熊貓','BGM',{'panda2':100}],
  [3,4,'四神協力','建築',{'godforce1':260},0],
  [3,4,'四神協力','石板',{'godforce2':440},0],
  [3,4,'四神協力','交換',{'godforce2':425},0],
  [3,4,'四神協力','BGM',{'godforce2':100,'godforce1':100},0],
  [30,3,'小籠包2','武器',{'ka1':350,'ka2':250,'ka3':250}],
  [30,3,'小籠包2','建築',{'ka1':1440,'ka2':1307,'ka3':840}],
];

var runeUrl = {
	'ka1': 'https://gamewith.akamaized.net/img/922f02538d1af23b86bdc8fbb5bb8a71.jpg',
	'ka2': 'https://gamewith.akamaized.net/img/7cb9aabcd01fcdfbf1fe83593f2be202.jpg',
	'ka3': 'https://gamewith.akamaized.net/img/8e8cb2542a222298c3f0058a0a9911b9.jpg',
	'rocket': 'https://gamewith.akamaized.net/img/0ab6ba51d5c4209125a01e82f5839b73.jpg',
	'panda1': 'https://gamewith.akamaized.net/img/cac57b5e83abb4b4ede53d74f9a0b854.jpg',
	'panda2': 'https://gamewith.akamaized.net/img/686131207e48e035c15ea9a107f39d58.jpg',
	'panda3': 'https://gamewith.akamaized.net/img/59a1e4747520902d1c1d68216fcbc44f.jpg',
	'godforce1': 'https://gamewith.akamaized.net/img/5a70e15062c6b73a0d2ca1b318f09fa0.jpg',
	'godforce2': 'https://gamewith.akamaized.net/img/6ad5844561e113a48162bb7d4fede923.jpg',
	'ninja25': 'https://gamewith.akamaized.net/img/fd151b5a6e6a159335e31a6d71ff57ae.jpg',
	'space25': 'https://gamewith.akamaized.net/img/3fab803bb14396a5e81540cc0480beff.jpg',
	
};

var alertDays = 7;
