//'m/d/y h:m',eventCate,eventName,{runeName: runeAmount}
//one line for each eventName
var eventList = [
['12/11/2017 15:00','探偵事務所','探偵事務所',{'mist_d':5}],
['12/15/2017 15:00','固力果(復刻)','復刻',{'glico1':1660,'glico2':1230,'glico3':930}],
['12/15/2017 15:00','固力果','グリコキャッスル',{'glico4':25}],
['12/15/2017 15:00','固力果','交換',{'glico5':21}],
['11/24/2017 15:00','萬聖節','石板1',{'halloween3':260}],
['11/24/2017 15:00','萬聖節','石板2',{'halloween4':460}],
['11/24/2017 15:00','萬聖節','交換',{'halloween4':730}],
['11/24/2017 15:00','萬聖節','怪談パーティ会場',{'halloween1':12}],
['11/24/2017 15:00','萬聖節','解放劇情',{'halloween2':8}],
['11/7/2017 15:00','交換素材劍','交換',{'guild_okashi':720}],
['11/8/2017 15:00','守女神像協力','積分',{'points':100}],
['11/15/2017 15:00','冰火塔石板','石板',{'adtower4_1':120,'adtower4_2':120',adtower4_3':240}],
['11/6/2017 15:00','帝国','石板',{'empire3':400}],
['11/6/2017 15:00','帝国','帝国オペラ座',{'empire1':600}],
['11/6/2017 15:00','帝国','交換',{'empire2':10}],
['11/6/2017 15:00','帝国','BGM',{'empire2':5}],
['11/1/2017 15:00','花園(復刻)','復刻',{'fog1':3020,'fog2':605,'fog3':4100,'fog4':1815,'fog5':1800}],
['11/1/2017 15:00','花園','陽だまりの家lv35',{'fog6':6}],
['10/25/2017 15:00','勇者轉職','BGM',{'maou6':12}],
['10/25/2017 15:00','勇者轉職','進化大劍',{'maou5':9}],
['10/25/2017 15:00','勇者轉職','溜まり場の神殿',{'maou5':27}],
['10/25/2017 15:00','勇者轉職','石板',{'maou4':210}],
['10/25/2017 15:00','勇者轉職','轉職',{'maou3':1.51}],
['10/25/2017 15:00','勇者轉職','素材劍',{'maou3':10}],
['10/25/2017 15:00','勇者轉職','EX·錘·突破石',{'maou3':28}],
['10/25/2017 15:00','勇者轉職','飾物',{'maou3':30}],
['10/25/2017 15:00','勇者轉職','貼紙',{'maou3':9}],
['10/25/2017 15:00','求人勇者(復刻)','復刻',{'maou1':810,'maou2':740}],
['10/16/2017 15:00','選拔協力','選拔協力',{'fourstar':600}],
['10/12/2017 15:00','雕像','時間',{'ozwald':5}],
['10/11/2017 15:00','雕像','黑翼',{'levin':9}],
['10/10/2017 15:00','雕像','大工',{'riamu':5}],
['9/20/2017 15:00','Re:0協力1','pt',{'points':20}],
['9/25/2017 15:00','Re:0協力2','pt',{'points':20}],
['9/29/2017 15:00','Re:0協力3','pt',{'points':20}],
['9/29/2017 15:00','Re:0','BGM',{'re03':6}],
['9/29/2017 15:00','Re:0','石板',{'re02':600}],
['9/29/2017 15:00','Re:0','建築',{'re0':28}],
['9/21/2017 15:00','初音合作','石板',{'miku3':300}],
['9/21/2017 15:00','初音合作','交換·突破石',{'miku3':150}],
['9/21/2017 15:00','初音合作','升免費角',{'miku':117}],
['9/21/2017 15:00','初音合作','建築',{'miku':741,'miku1':300}],
['9/21/2017 15:00','初音合作','收集音符',{'miku2':7}],
['9/29/2017 15:00','夏日2016','(復刻)',{'summer2016_2':7,'summer2016_3':1355,'summer2016_4':20}],
['9/29/2017 15:00','夏日2016','建築lv30~40',{'summer2016_1':10}],
['9/19/2017 15:00','夏日2015','建築',{'summer2015':10}],
['8/31/2017 15:00','拳斧BURST!','積分',{'points_burst':11}],
['8/30/2017 15:00','妖精尾巴','升級建築',{'fairytale':245}],
['8/30/2017 15:00','妖精尾巴','升格SS',{'points':100}],
['8/30/2017 15:00','妖精尾巴','積分',{'points2':200}],
['8/30/2017 15:00','妖精尾巴','石板',{'fairytale2':450}],
['8/28/2017 15:00','三周年','BGM',{'lightdark_solo':165}],
['8/23/2017 15:00','三周年','交換·素材劍',{'lightdark_d':600}],
['8/23/2017 15:00','三周年','交換·其他',{'lightdark_d':200,'lightdark_l':1480}],
['8/23/2017 15:00','三周年','石板',{'lightdark_d':600}],
['8/23/2017 15:00','三周年','升級建築',{'lightdark_l':570}],
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
	'glico4': 'https://gamewith.akamaized.net/img/2ef3e8b86b229c138ca822d7bfe508fc.jpg',
	'glico5': 'https://gamewith.akamaized.net/img/1a091aadd707f026ae2fb6b1a24ddc67.jpg',
	'mumu1': 'http://i.imgur.com/k4DDpGR.jpg',
	'mumu2': 'http://i.imgur.com/uAmDCX6.jpg',
	'mumu3': 'http://i.imgur.com/SXApvtW.jpg',
	'points': 'http://i.imgur.com/SBhKxMB.jpg',
	'points2': 'http://i.imgur.com/SBhKxMB.jpg',
	'points_burst': 'http://i.imgur.com/xzQS3lk.png',
	'dragon': 'http://i.imgur.com/wTG0Xjj.jpg',
	'maou1': 'http://i.imgur.com/J1jdCkz.jpg',
	'maou2': 'http://i.imgur.com/CRm0JHh.jpg',
	'maou3': 'https://cdn.wiki.famitsu.com/theme/famitsu/shironeko/icon/medal_wink.jpg',
	'maou4': 'https://gamewith.akamaized.net/img/d89404f9595c6f4420ec96aaf7deb76b.jpg',
	'maou5': 'https://gamewith.akamaized.net/img/021aead99d37be7013e5b0c50617e411.jpg',
	'maou6': 'https://gamewith.akamaized.net/img/bafb426c4119f12b56cd9478a1665935.jpg',
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
	'fairytale': 'https://i.imgur.com/9a5VvG9.jpg',
	'fairytale2': 'https://gamewith.akamaized.net/img/e6fd0ae60181918e75bed87c99890b1f.jpg',
	'summer2016_1': 'https://gamewith.akamaized.net/img/0a7f2662385d42f450a9aea7c833d624.jpg',
	'summer2016_2': 'https://gamewith.akamaized.net/img/234e009e1fcff6b324f0ff5c60aa4f22.jpg',
	'summer2016_3': 'https://gamewith.akamaized.net/img/f96466118645ca7458747066313a2458.jpg',
	'summer2016_4': 'https://gamewith.akamaized.net/img/4bc3052269f17bec0a24d2fd38bb1c04.jpg',
	'summer2015': 'https://gamewith.akamaized.net/img/2925476951f3bdf9ea36316119e7c822.jpg',
	'miku': 'https://gamewith.akamaized.net/img/24025aee8aaedb7652469d99d44a7bd7.jpg',
	'miku1': 'https://gamewith.akamaized.net/img/0e655c6fbd5c7d37318ce89429c365d6.jpg',
	'miku2': 'https://gamewith.akamaized.net/img/b20bf984965ca5bf3527d3328cb6efc7.jpg',
	'miku3': 'https://gamewith.akamaized.net/img/34e7ecc6f2954f4d56043b00e8214838.jpg',
	're0': 'https://gamewith.akamaized.net/img/9de95676362c510219cc7a6c1c48e1fa.jpg',
	're02': 'https://gamewith.akamaized.net/img/7e2c8d891a6ce40d3277aac49060d771.jpg',
	're03': 'https://gamewith.akamaized.net/img/d3a80e123c07a33ea24a139fa15175d4.jpg',
	'riamu': 'https://gamewith.akamaized.net/img/393e5c98dc601874012b79fb254f4fa5.jpg',
	'levin': 'https://gamewith.akamaized.net/img/2853b0280966619ddbe9d31f2426cee5.jpg',
	'ozwald': 'https://gamewith.akamaized.net/img/0f27d78b4e2a429dcb4d1c5a0882aa22.jpg',
	'fourstar': 'https://gamewith.akamaized.net/img/5d5beeb5aee74ec91bd87895988cef59.jpg',
	'fog1': 'https://gamewith.akamaized.net/img/c781f714a263ab8209212db8a2ba4051.jpg',
	'fog2': 'https://gamewith.akamaized.net/img/b774ae11bc0db70ac10bfd306c6e62c6.jpg',
	'fog3': 'https://gamewith.akamaized.net/img/fa0cdd6c22d724040b6bf4bf678dc73a.jpg',
	'fog4': 'https://gamewith.akamaized.net/img/d99b950464f7353418bd91ae4f89e5a0.jpg',
	'fog5': 'https://gamewith.akamaized.net/img/3c2db3a8ed4f56711a8f46ff3c6140a7.jpg',
	'fog6': 'https://gamewith.akamaized.net/img/7c33778fa2084b983946973acfc6a5c1.jpg',
	'empire1': 'https://gamewith.akamaized.net/img/f3afe41b5635495dd06f71868067a8a6.jpg',
	'empire2': 'https://gamewith.akamaized.net/img/068b47f34f213b7c0ea3b81be8f7b1c9.jpg',
	'empire3': 'https://gamewith.akamaized.net/img/cef25d02f88b3c84d52d4b956a86e502.jpg',
	'adtower4_1': 'https://gamewith.akamaized.net/img/5d85af1de5295e8bded86e109ce82c58.jpg',
	'adtower4_2': 'https://gamewith.akamaized.net/img/eeba9a6f873b0e1077b21fa12707a257.jpg',
	'adtower4_3': 'https://gamewith.akamaized.net/img/2738bf3a13703448c040c891ed54bd4f.jpg',
	'guild_okashi': 'https://gamewith.akamaized.net/img/e5ae685106e51ecd6c63586aac7278d6.jpg',
	'halloween1': 'https://gamewith.akamaized.net/img/56799fc07c49383cbca76f9ad29e5e13.jpg',
	'halloween2': 'https://gamewith.akamaized.net/img/ff3c3f4adcc2bf0ac4420526519cf93e.jpg',
	'halloween3': 'https://gamewith.akamaized.net/img/b99ba1bb8598e96dc2003ff92994c187.jpg',
	'halloween4': 'https://gamewith.akamaized.net/img/9b6902bfb178273a69d03adaeb586ace.jpg',
	'mist_d': 'https://gamewith.akamaized.net/img/1337c0fefb128904dc99156aaf6b2a41.jpg',
};

var runeExtraText = {
	'sharenyan': '(4種)',
	'shareact': '(5種)',
	'sharenwei': '(萬)',
	'points': '(萬)',
	'points2': '(萬)',
	'points_burst': '(萬)',
	'miku2': '(萬)',
	'maou3': '(萬)',
}

var alertDays = 7;
