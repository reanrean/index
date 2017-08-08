//date,month,eventCate,eventName,{runeName: runeAmount},reprint
//one line for each eventName
//if different date/monthn in same eventCate, use the earliest
var eventList = [
  [21,8,'共同生活2','升級弓武',{'sharenyan2':300}],
  [21,8,'共同生活2','神解弓角',{'sharenyan2':300}],
  [21,8,'共同生活2','升級建築',{'sharenyan2':300}],
  [21,8,'共同生活2','呼叫角色',{'sharenwei':175}],
  [21,8,'共同生活2','擺設傢俱',{'sharenwei':9.3}],
  [21,8,'共同生活2','交換',{'sharenwei':80}],
  [21,8,'共同生活2','交換·EX',{'sharenyan3':600}],
  [21,8,'共同生活2','交換·鎚',{'sharenyan3':850}],
  [21,8,'共同生活2','石板',{'shareceo':600}],
  [15,8,'共同生活(復刻)','石板',{'shareburger':600}],
  [15,8,'共同生活(復刻)','提升能力(外出)',{'sharenwei':105,'shareact':90}],
  [15,8,'共同生活(復刻)','升級建築',{'sharenwei':58.6}],
  [15,8,'共同生活(復刻)','交換',{'sharenwei':85}],
  [15,8,'共同生活(復刻)','升級弓角(打工)',{'sharenyan':200}],
  [23,8,'三周年','BGM',{'lightdark_solo':165}],
  [23,8,'三周年','交換·素材劍',{'lightdark_d':600}],
  [23,8,'三周年','交換·其他',{'lightdark_d':200,'lightdark_l':1480}],
  [23,8,'三周年','石板',{'lightdark_d':600}],
  [23,8,'三周年','升級建築',{'lightdark_l':570}],
  [7,8,'SoulofKnights','(復刻)',{'sok2':60,'sok3':240}],
  [7,8,'SoulofKnights','BGM',{'sok3':60}],
  [7,8,'SoulofKnights','積分',{'points':350}],
];

var runeUrl = {
	'noroi_yumi': 'http://i.imgur.com/pkgeguT.jpg',
	'noroi_yumi2': 'http://i.imgur.com/HD0KGNu.jpg',
	'noroi_mag': 'http://i.imgur.com/BWMb6NH.jpg',
	'noroi_mag2': 'https://i.imgur.com/LBVRiqe.jpg',
	'noroi_sword': 'http://i.imgur.com/zbwckBv.jpg',
	'noroi_sword2': 'https://i.imgur.com/WCnRCoz.jpg',
	'noroi_box': 'http://i.imgur.com/AQOPIAB.jpg',
	'noroi_box2': 'http://i.imgur.com/mwPgjgN.jpg',
	'noroi_lancer': 'http://i.imgur.com/ApMv6V4.jpg',
	'noroi_lancer2': 'http://i.imgur.com/yAVWTvR.png',
	'noroi_axe': 'http://i.imgur.com/NZHUEeS.jpg',
	'noroi_axe2': 'http://i.imgur.com/auLQCCr.png',
	'noroi_doub': 'http://i.imgur.com/QfS9rxV.jpg',
	'noroi_doub2': 'http://i.imgur.com/CHHRwUU.png',
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
	'ryuusei': 'https://gamewith.akamaized.net/img/be413c882fa495c9d29b20567cb62695.jpg',
	'ryuusei2': 'https://gamewith.akamaized.net/img/b12be92d1557246a9c739949a48ce8d3.jpg',
	'adt2': 'https://gamewith.akamaized.net/img/093c13b88238f3ea3d8b8017561b50a2.jpg',
	'adt31': 'https://gamewith.akamaized.net/img/1767ca1f2ad58ac967093336574de37c.jpg',
	'adt32': 'https://gamewith.akamaized.net/img/fe9bf6bc74691c149e83381fb8fd19d2.jpg',
	'adt33': 'https://gamewith.akamaized.net/img/9bd12cd6d7d902593e50c7aa7bd5b90c.jpg',
	'jelly': 'https://gamewith.akamaized.net/img/0cb0b433df4d969c44e5a685c3d4ea01.jpg',
	'abyss': 'https://gamewith.akamaized.net/img/6e65cdc856281b21b40f609833b15889.jpg',
	'abyss2': 'https://gamewith.akamaized.net/img/2dacd8094021a4930d73c60712fb761c.jpg',
	'abyss3': 'https://gamewith.akamaized.net/img/41b40451b56881b25ba0007da2ae5484.jpg',
	'kouen1': 'https://gamewith.akamaized.net/img/30ab2b01107a3f66fd113c5b74ca16c9.jpg',
	'kouen2': 'https://gamewith.akamaized.net/img/cfc7e85115712a3ecf87f366aedb17e1.jpg',
	'kouen3': 'https://gamewith.akamaized.net/img/fd6c3eb2349a00b7deefa04eb7a193dd.jpg',
	'variant1': 'https://gamewith.akamaized.net/img/0ead1faa7944a14fb14cb6adeafbdb46.jpg',
	'variant2': 'https://gamewith.akamaized.net/img/639ca00f9275adbffe49bba2a2bb5d5a.jpg',
	'variant3': 'https://gamewith.akamaized.net/img/9e33bd0cf7096ef25d76e8fdf9611ddd.jpg',
	'tenma1': 'https://gamewith.akamaized.net/img/ac95890dfb3d308f92de9e479c6ef80b.jpg',
	'tenma2': 'https://gamewith.akamaized.net/img/0181a2eeb3b1ce89391c0020ae6e61bb.jpg',
	'guren1': 'https://gamewith.akamaized.net/img/afef90fce0999c8a45cada00811723c6.jpg',
	'guren2': 'https://gamewith.akamaized.net/img/bbe2a63c32a87a417189509c05d5d699.jpg',
	'sharenyan': 'https://gamewith.akamaized.net/img/bc1cdb893e41003ff80afbfcf3b804b3.jpg',
	'sharenwei': 'https://gamewith.akamaized.net/img/bc496028db3dc137d728e7d2fcfc3f00.jpg',
	'shareburger': 'https://gamewith.akamaized.net/img/f05c382e5900718fa5182766469a35d5.jpg',
	'shareact': 'http://i.imgur.com/cDSfpsy.jpg',
	'onsen': 'https://gamewith.akamaized.net/img/7e1279905ae22dd1cdbcbefb01da57b3.jpg',
	'onsen2': 'https://gamewith.akamaized.net/img/1b487f41063c9213d4ea8a43923379d9.jpg',
	'zekkai3_1': 'https://gamewith.akamaized.net/img/e663422f03128bb87d31a498ac174fbf.jpg',
	'zekkai3_2': 'https://gamewith.akamaized.net/img/316150c7d2466421516490af4c499695.jpg',
	'zekkai3_3': 'https://gamewith.akamaized.net/img/d5e9472eaf043f981a40d9745daba57a.jpg',
	'tennis': 'https://gamewith.akamaized.net/img/e281ac3c8de2de0ee78c13b3ada45f62.jpg',
	'idol1': 'https://i.imgur.com/YcOc2lo.jpg',
	'idolx': 'https://i.imgur.com/pImsHC8.jpg',
	'idol3': 'https://i.imgur.com/UuKpwGz.jpg',
	'idol4': 'http://i.imgur.com/mjlYID8.jpg',
	'with1': 'http://i.imgur.com/Eegcjhb.jpg',
	'with2': 'http://i.imgur.com/O8yGcel.jpg',
	'with3': 'http://i.imgur.com/g9c0pNd.jpg',
	'glico1': 'http://i.imgur.com/tyMOprE.jpg',
	'glico2': 'http://i.imgur.com/xYNLD2g.jpg',
	'glico3': 'http://i.imgur.com/MOUOwR9.jpg',
	'mumu1': 'http://i.imgur.com/k4DDpGR.jpg',
	'mumu2': 'http://i.imgur.com/uAmDCX6.jpg',
	'mumu3': 'http://i.imgur.com/SXApvtW.jpg',
	'points': 'http://i.imgur.com/SBhKxMB.jpg',
	'dragon': 'http://i.imgur.com/wTG0Xjj.jpg',
	'maou1': 'http://i.imgur.com/J1jdCkz.jpg',
	'maou2': 'http://i.imgur.com/CRm0JHh.jpg',
	'sok2': 'https://gamewith.akamaized.net/img/2699d31cfb697e16cd6ec9e88d8e72c7.jpg',
	'sok3': 'https://gamewith.akamaized.net/img/bcb7ddba537746e39b0972cd06c1035a.jpg',
	'kc1': 'https://i.imgur.com/VvSZ40h.jpg',
	'hyoumetsu': 'https://gamewith.akamaized.net/img/a9a493b4ac50c88f0d8720e45398c2e0.jpg',
	'lightdark_l': 'https://gamewith.akamaized.net/img/ed400c0624dc546449330cb517067fbc.jpg',
	'lightdark_d': 'https://gamewith.akamaized.net/img/1c61e69e341c09f249f4a9b30a7f38c1.jpg',
	'lightdark_solo': 'https://i.imgur.com/efDDNpL.jpg',
	'sharenyan2': 'https://i.imgur.com/wEsL4sx.jpg',
	'sharenyan3': 'https://gamewith.akamaized.net/img/c32fb05a67ae3d716018d6ed8a44dd0f.jpg',
	'shareceo': 'https://gamewith.akamaized.net/img/c103e12cb6cd8e3005e82a90d7b0c1ba.jpg',
};

var runeExtraText = {
	'sharenyan': '(4種)',
	'shareact': '(5種)',
	'sharenwei': '(萬)',
	'points': '(萬)',
}

var alertDays = 7;
