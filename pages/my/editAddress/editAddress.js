const cityData = require('../../../utils/picker.city.min.js')
Page({
  data: {
    lists: ["公司", "家", "学校", "其他"],
    selectList: cityData,
    multiArray: [], //picker数据
    value: [0, 0, 0],
    text: ""
  },
  onLoad(){
   let multiArray = [
      this.toArr(this.data.selectList),
      this.toArr(this.data.selectList[0].children),
      this.toArr(this.data.selectList[0].children[0].children)
    ]

    this.setData({
      multiArray:multiArray
    })
  },
  picker: function(e) {
    let value = e.detail.value;
    if (this.data.selectList.length > 0) {
      let provice = this.data.selectList[value[0]].text
      let city = this.data.selectList[value[0]].children[value[1]].text
      let district = this.data.selectList[value[0]].children[value[1]].children[value[2]].text
      //this.selectList[value[0]].children[value[1]].children[value[2]].value
      this.setData({
        text:provice + " " + city + " " + district
      })
    }
  },
  toArr(object) {
    let arr = [];
    for (let i in object) {
      arr.push(object[i].text);
    }
    return arr;
  },
  columnPicker: function(e) {
    //第几列 下标从0开始
    let column = e.detail.column;
    //第几行 下标从0开始
    let value = e.detail.value;
    if (column === 0) {
      let multiArray = [
        this.data.multiArray[0],
        this.toArr(this.data.selectList[value].children),
        this.toArr(this.data.selectList[value].children[0].children)
      ];
      this.setData({
        multiArray:multiArray,
        value:[value, 0, 0]
      })
    } else if (column === 1) {
      let multiArray = [
        this.data.multiArray[0],
        this.data.multiArray[1],
        this.toArr(this.data.selectList[this.data.value[0]].children[value].children)
      ];
      this.setData({
        multiArray:multiArray,
        value:[this.data.value[0], value, 0]
      })
    }
  }
})