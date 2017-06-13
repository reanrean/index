//date,month,eventCate,eventName,{runeName: runeAmount},reprint
//one line for each eventName
//if different date/monthn in same eventCate, use the earliest
var eventList = [
  [14,7,'三色地下城','BGM',{'mumu1':30,'mumu2':30,'mumu3':30}],
  [14,7,'三色地下城','(復刻)',{'mumu1':135,'mumu2':135,'mumu3':135}],
  [3,7,'咒斧','(復刻)',{'noroi_axe':225}],
  [3,7,'咒斧','再進化',{'noroi_axe2':225}],
  [31,7,'固力果','建築(復刻)',{'glico2':930,'glico3':930}],
  [31,7,'固力果','飾品(復刻)',{'glico1':1650}],
  [31,7,'固力果','飾品交換',{'glico2':300}],
  [30,6,'黑貓維茲(復刻)','升級維茲',{'with1':1031,'with2':724,'with3':154}],
  [30,6,'黑貓維茲(復刻)','升級雕像',{'with1':100,'with2':70,'with3':20}],
  [30,6,'偶像','積分(後半)',{'points':100}],
  [30,6,'偶像','積分(前半)',{'points':100}],
  [30,6,'偶像','BGM',{'idolx':600}],
  [30,6,'偶像','升級建築1',{'idol1':780}],
  [30,6,'偶像','升級建築2',{'idol3':780}],
  [30,6,'偶像','建築合體',{'idol1':150,'idol3':150}],
  [30,6,'偶像','錘仔交換',{'idolx':600}],
  [26,6,'咒槍','(復刻)',{'noroi_lancer':225}],
  [26,6,'咒槍','再進化',{'noroi_lancer2':225}],
  [19,6,'網球(復刻)','建築',{'tennis':310}],
  [19,6,'咒杖','(復刻)',{'noroi_mag':225}],
  [19,6,'咒杖','再進化',{'noroi_mag2':225}],
  [12,6,'咒劍','(復刻)',{'noroi_sword':225}],
  [12,6,'咒劍','再進化',{'noroi_sword2':225}],
  [12,6,'混沌X','積分',{'points':150}],
  [12,6,'混沌X','石板2',{'zekkai3_3':100}],
  [12,6,'混沌X','BGM',{'zekkai3_3':200}],
  [12,6,'混沌X','突破石交換',{'zekkai3_2':900}],
  [12,6,'混沌X','石板1',{'zekkai3_2':600}],
  [12,6,'混沌X','升級建築',{'zekkai3_1':590}],
  [12,6,'混沌X','飾品交換',{'zekkai3_1':500}],
  [5,6,'咒弓','(復刻)',{'noroi_yumi':225}],
  [5,6,'咒弓','再進化',{'noroi_yumi2':225}],
  [5,7,'溫泉','神解龍角',{'onsen2':215}],
  [5,7,'溫泉','武器強化(復刻)',{'onsen':500}],
];

var runeUrl = {
	'noroi_yumi': 'http://i.imgur.com/pkgeguT.jpg',
	'noroi_yumi2': 'http://i.imgur.com/HD0KGNu.jpg',
	'noroi_mag': 'http://i.imgur.com/BWMb6NH.jpg',
	'noroi_mag2': 'https://imgur.com/LBVRiqe.jpg',
	'noroi_sword': 'http://i.imgur.com/zbwckBv.jpg',
	'noroi_sword2': 'https://imgur.com/WCnRCoz.jpg',
	'noroi_box': 'http://i.imgur.com/AQOPIAB.jpg',
	'noroi_box2': 'http://i.imgur.com/mwPgjgN.jpg',
	'noroi_lancer': 'http://i.imgur.com/ApMv6V4.jpg',
	'noroi_lancer2': 'http://i.imgur.com/yAVWTvR.png',
	'noroi_axe': 'http://i.imgur.com/NZHUEeS.jpg',
	'noroi_axe2': 'http://i.imgur.com/auLQCCr.png',
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
	'shareact': 'http://imgur.com/cDSfpsy.jpg',
	'onsen': 'https://gamewith.akamaized.net/img/7e1279905ae22dd1cdbcbefb01da57b3.jpg',
	'onsen2': 'https://gamewith.akamaized.net/img/1b487f41063c9213d4ea8a43923379d9.jpg',
	'zekkai3_1': 'https://gamewith.akamaized.net/img/e663422f03128bb87d31a498ac174fbf.jpg',
	'zekkai3_2': 'https://gamewith.akamaized.net/img/316150c7d2466421516490af4c499695.jpg',
	'zekkai3_3': 'https://gamewith.akamaized.net/img/d5e9472eaf043f981a40d9745daba57a.jpg',
	'tennis': 'https://gamewith.akamaized.net/img/e281ac3c8de2de0ee78c13b3ada45f62.jpg',
	'idol1': 'https://i.imgur.com/YcOc2lo.jpg',
	'idolx': 'https://i.imgur.com/pImsHC8.jpg',
	'idol3': 'https://i.imgur.com/UuKpwGz.jpg',
	'with1': 'https://gamewith.akamaized.net/img/349c08def608997cf33553938547ce81.jpg',
	'with2': 'https://gamewith.akamaized.net/img/b120e6ab8e56b8fb39deb7f41a3e1b89.jpg',
	'with3': 'https://gamewith.akamaized.net/img/097ba24e89f2a2ebfb386f866a9c63fb.jpg',
	'glico1': 'http://i.imgur.com/tyMOprE.jpg',
	'glico2': 'http://i.imgur.com/xYNLD2g.jpg',
	'glico3': 'http://i.imgur.com/MOUOwR9.jpg',
	'mumu1': 'http://i.imgur.com/k4DDpGR.jpg',
	'mumu2': 'http://i.imgur.com/uAmDCX6.jpg',
	'mumu3': 'http://i.imgur.com/SXApvtW.jpg',
	'points': 'http://i.imgur.com/SBhKxMB.jpg',
};

var runeExtraText = {
	'sharenyan': '(4種)',
	'shareact': '(5種)',
	'sharenwei': '(千)',
	'points': '(萬)',
}

var alertDays = 7;
