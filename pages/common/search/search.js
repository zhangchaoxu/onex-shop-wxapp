const util = require("../../../utils/util.js")
Page({
  data: {
    history: [
      "美洲杯",
      "D站观点",
      "C罗",
      "早安D站",
      "2019退役球星",
      "女神大会",
      "德利赫特",
      "托雷斯",
      "自热火锅",
      "华为手机",
      "有机酸奶"
    ],
    hot: [
      "德利赫特",
      "托雷斯",
      "早安D站",
      "D站观点",
      "德利赫特",
      "美洲杯",
      "华为手机",
      "C罗",
      "自热火锅",
      "2019退役球星",
      "女神大会"
    ],
    key: "",
    showActionSheet: false,
    tips: "确认清空搜索历史吗？",
    searchResult:["按照展示的列表输入关键词看效果","thorui","2019退役球星","搜索关键词高亮显示","模拟搜索结果集","开源不易，需要鼓励","人人为我，我为人人"],
    searchList:[]
  },
  back: function() {
    wx.navigateBack();
  },
  cleanKey: function() {
    this.setData({
      key:''
    })
  },
  closeActionSheet: function() {
    this.setData({
      showActionSheet:false
    })
  },
  openActionSheet: function() {
    this.setData({
      showActionSheet:true
    })
  },
  itemClick: function(e) {
    let index = e.detail.index;
    if (index == 0) {
      this.setData({
        showActionSheet:false,
        history:[]
      })
    }
  },
  inputKey: function(e) {
    let val=e.detail.value
    this.setData({
      key:util.trim(val)
    })
    if (!val) {
      this.setData({
        searchList:[]
      })
      return;
    }
    //根据关键词查找
    let arr = []
    //实际开发中，根据搜索返回结果集，此处只是做展示提示搜索哪些文字
    this.data.searchResult.forEach((item) => {
      arr.push({
        key: item,
        showKey: util.replaceAll(item, val, `<label style="color:#E41F19">${val}</label>`)
      })
    })
    this.setData({
      searchList:arr
    })
  }
})