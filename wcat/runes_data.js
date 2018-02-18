//'m/d/y h:m',eventCate,eventName,{runeName: runeAmount}
//one line for each eventName
var eventList = [
['4/2/2018 15:00','猩猩協力','戰分',{'pointsn':9999,'gorilla':4000}],
['3/12/2018 15:00','情人節','交換開箱',{'valen2':400,'valen3':1750}],
['3/12/2018 15:00','情人節','石板',{'valen3':1000}],
['3/12/2018 15:00','情人節','衣櫃(建築)',{'valen1':24}],
['2/28/2018 15:00','龍騎強化','石板2',{'dragon4':500}],
['2/28/2018 15:00','龍騎強化','石板1',{'dragon3':600}],
['2/28/2018 15:00','龍騎強化','交換突破石2',{'dragon4':160}],
['2/28/2018 15:00','龍騎強化','交換突破石1',{'dragon2':100}],
['2/28/2018 15:00','龍騎強化','交換貼紙',{'dragon2':100}],
['2/28/2018 15:00','龍騎強化','伝承の壁画',{'dragon1':300}],
['2/26/2018 15:00','名星会','名星会殿堂·黒',{'meisei':285}],
['2/26/2018 15:00','名星会','BGM',{'meisei':225}],
['1/25/2018 15:00','雕像','男',{'wilfrid':300}],
['1/24/2018 15:00','雕像','女',{'mila':300}],
['2/13/2018 15:00','新年2018','積分',{'points':40}],
['2/13/2018 15:00','新年2018','突破石',{'newyear2018_3':240}],
['2/13/2018 15:00','新年2018','石板',{'newyear2018_3':400}],
['2/13/2018 15:00','新年2018','恐龍建築',{'newyear2018_1':20,'newyear2018_2':10}],
['1/31/2018 15:00','茶熊聖誕','石板',{'chaguma3_xmas5':50}],
['1/31/2018 15:00','茶熊聖誕','交換',{'chaguma3_xmas4':6}],
['1/31/2018 15:00','茶熊聖誕','聖誕樹',{'chaguma3_xmas1':60,'chaguma3_xmas2':60,'chaguma3_xmas3':60}],
['1/31/2018 15:00','茶熊英雄角','茶熊免費角色',{'chaguma3_seiya1':99,'chaguma3_seiya2':18}],
['1/31/2018 15:00','茶熊3','石板',{'chaguma3_battle':500}],
['1/31/2018 15:00','茶熊3','学生寮',{'chaguma3_boy':3,'chaguma3_girl':5}],
['1/31/2018 15:00','茶熊3','BGM',{'chaguma3_bgm':7}],
['1/31/2018 15:00','茶熊3','各桌椅',{'chaguma3_table':9}],
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
	'pointsn': 'http://i.imgur.com/SBhKxMB.jpg',
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
	'halloween5': 'https://gamewith.akamaized.net/img/7ca25b9c7ad43ac9d467061a825b8b44.jpg',
	'mist_d': 'https://gamewith.akamaized.net/img/1337c0fefb128904dc99156aaf6b2a41.jpg',
	'od2_1': 'https://gamewith.akamaized.net/img/5682ffd615fe0c7eefc222255c7a829b.jpg',
	'od2_2': 'https://gamewith.akamaized.net/img/41ca3d33ea654d61775d5cf4b7210b7e.jpg',
	'od2_3': 'https://gamewith.akamaized.net/img/23dd35c480534acf62abbff7b62c9395.jpg',
	'bigmini': 'https://gamewith.akamaized.net/img/bc0e0cf7eaf5268fb8e5842afd9ff284.jpg',
	'fightg1': 'https://gamewith.akamaized.net/img/914804840b937fd386b9a5bedfbf23fe.jpg',
	'fightg2': 'https://gamewith.akamaized.net/img/25ec9727386775c5a6de2d803e80a5fe.jpg',
	'chaguma3_boy': 'https://i.imgur.com/YCUls9v.png',
	'chaguma3_girl': 'https://i.imgur.com/9d6cwjk.png',
	'chaguma3_table': 'https://i.imgur.com/YAk4ja4.png',
	'chaguma3_battle': 'https://gamewith.akamaized.net/img/c03e07ab53d1c75ee2f15e62ecbdfaca.jpg',
	'chaguma3_bgm': 'https://gamewith.akamaized.net/img/a2fbbe12b980e0610f9759189728822a.jpg',
	'chaguma3_xmas1': 'https://gamewith.akamaized.net/img/5660843bbe1b939b1ea63a6b8d19e46a.jpg',
	'chaguma3_xmas2': 'https://gamewith.akamaized.net/img/7247d780c674b2bbb33811eb345d5991.jpg',
	'chaguma3_xmas3': 'https://gamewith.akamaized.net/img/805dd8d5724b12187c1d2c4a62e1c16f.jpg',
	'chaguma3_xmas4': 'https://gamewith.akamaized.net/img/77d972902de28930369ff282d126a5d9.jpg',
	'chaguma3_xmas5': 'https://gamewith.akamaized.net/img/77eda691848507cd8628932725b390ad.jpg',
	'chaguma3_seiya1': 'https://gamewith.akamaized.net/img/1bd6c43ef3509f78fb32b9efefd10d5d.jpg',
	'chaguma3_seiya2': 'https://gamewith.akamaized.net/img/6d0807ca5e7082344c7ecd774d9b6618.jpg',
	'newyear2018_1': 'https://gamewith.akamaized.net/img/a9e40da8ca40b6f2c40be2e865597774.jpg',
	'newyear2018_2': 'https://gamewith.akamaized.net/img/7287919570290451faedc77505cd1e8f.jpg',
	'newyear2018_3': 'https://gamewith.akamaized.net/img/23d1d4838d73be350bfaff5c3afc8176.jpg',
	'mila': 'https://gamewith.akamaized.net/img/01fd6b8f2804bd8248d4b3f97dd029f8.jpg',
	'wilfrid': 'https://gamewith.akamaized.net/img/a28ab7403b2eb07852bc530b2c3138e8.jpg',
	'meisei': 'https://gamewith.akamaized.net/img/a3ab2d8c3b1232392bea645eab7ea05f.jpg',
	'dragon1': 'https://gamewith.akamaized.net/img/79316a4844debf3ac971e4447a2b763b.jpg',
	'dragon2': 'https://gamewith.akamaized.net/img/7b2c329ff96436ca1c71d32501efd8f8.jpg',
	'dragon3': 'https://gamewith.akamaized.net/img/0c97d0253e0d0616f3a359d23055b226.jpg',
	'dragon4': 'https://gamewith.akamaized.net/img/bc240dfccd1b19e245ab10643e13928a.jpg',
	'gorilla': 'https://i.imgur.com/bXyJzmO.png',
	'valen1': 'https://gamewith.akamaized.net/img/115764cc3d25ff6cd43a609ff600f30f.jpg',
	'valen2': 'https://gamewith.akamaized.net/img/f28831ebbeb88e4a3d79c89e9cbcc404.jpg',
	'valen3': 'https://gamewith.akamaized.net/img/5dc5628eaefc48e3f4e5301cb2495008.jpg',
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
