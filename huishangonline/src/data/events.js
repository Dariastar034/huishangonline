const events = [
    // ===== 全局事件 Global =====
    { type: "global", title: "朝廷征税", desc: "朝廷下令征商税，所有商品价格下跌10%，并需缴纳50两税款。", effect: { price: 0.9, money: -50 } },
    { type: "global", title: "盐法改革", desc: "官府重新分配盐引，盐价上涨20%。", effect: { good: "食盐", price: 1.2 } },
    { type: "global", title: "徽州暴雨", desc: "连日暴雨冲毁道路，所有房产贬值10%。", effect: { asset: 0.9 } },
    { type: "global", title: "岁贡茶盛", desc: "贡茶品质上乘，茶叶价格上涨30%。", effect: { good: "茶叶", price: 1.3 } },
    { type: "global", title: "宣纸紧缺", desc: "文人盛世，宣纸供不应求，价格上涨25%。", effect: { good: "宣纸", price: 1.25 } },
    { type: "global", title: "盗匪横行", desc: "商路不靖，所有随身资金减少100两以支付保镖费用。", effect: { money: -100 } },
    { type: "global", title: "徽墨竞赛", desc: "徽墨名声远扬，徽墨价格上涨15%。", effect: { good: "徽墨", price: 1.15 } },
    { type: "global", title: "丝市暴跌", desc: "江南丝价暴跌，生丝价格下跌20%。", effect: { good: "生丝", price: 0.8 } },
    { type: "global", title: "朝廷褒奖", desc: "朝廷嘉奖徽商贡献，所有官商身份玩家额外获得300两分红。", effect: { status: "官商", money: 300 } },

    // ===== 个人事件 Personal =====
    { type: "personal", title: "天降横财", desc: "你在祠堂地砖下发现一箱旧银，获得500两！", effect: { money: 500 } },
    { type: "personal", title: "库房失窃", desc: "夜贼潜入库房，损失300两。", effect: { money: -300 } },
    { type: "personal", title: "义助修桥", desc: "你出资修筑官道桥梁，民众感恩。未来通过此桥免过路费。", effect: { status: "善商" } },
    { type: "personal", title: "货船沉没", desc: "运往扬州的货船倾覆，损失货物价值10%。", effect: { asset: 0.9 } },
    { type: "personal", title: "富户联姻", desc: "你与徽州名门联姻，获得2000两嫁妆。", effect: { money: 2000 } },
    { type: "personal", title: "官场提拔", desc: "你被推举为盐务署助理，获得官商身份。", effect: { status: "官商" } },
    { type: "personal", title: "墨价疯涨", desc: "你囤积的徽墨价格上涨40%。", effect: { good: "徽墨", price: 1.4 } },
    { type: "personal", title: "店铺火灾", desc: "你的商铺突发火灾，损失200两维修费。", effect: { money: -200 } },
    { type: "personal", title: "文人雅集", desc: "你赞助文人雅集，名声大噪，获得额外商誉（+5%房产价值）。", effect: { asset: 1.05 } },
    { type: "personal", title: "赌坊赢银", desc: "你在赌坊押对了骰子，赢得1000两！", effect: { money: 1000 } },
    { type: "personal", title: "赌坊失手", desc: "你在赌坊连输三局，损失500两。", effect: { money: -500 } },
    { type: "personal", title: "朝贡破费", desc: "为取悦上官赠礼，支出300两。", effect: { money: -300 } },
    { type: "personal", title: "竹纸创新", desc: "你研制新式竹纸，宣纸价格上升20%。", effect: { good: "宣纸", price: 1.2 } },
    { type: "personal", title: "茶路通畅", desc: "修路工程完成，你的茶叶销售成本下降10%。", effect: { good: "茶叶", price: 1.1 } },
    { type: "personal", title: "流寇劫财", desc: "行商途中遭遇流寇，失去100两。", effect: { money: -100 } },
    { type: "personal", title: "徽匠助力", desc: "你雇佣徽派匠人，令工坊效率提高，额外获得200两收益。", effect: { money: 200 } },
    { type: "personal", title: "家祠祭祖", desc: "祭祖获庇佑，未来一回合内免疫亏损。", effect: { status: "护佑" } },
    { type: "personal", title: "路遇贵人", desc: "遇到徽州巡抚，获其青睐，获得特许贸易权。", effect: { status: "官商" } },
    { type: "personal", title: "盗坊重修", desc: "你资助修缮赌坊，未来可抽取一次额外事件。", effect: { bonus: true } }
];

export function getRandomEvent(type = "personal") {
  const filtered = events.filter(e => e.type === type);
  const idx = Math.floor(Math.random() * filtered.length);
  return filtered[idx];
}

module.exports = { getRandomEvent, events };

