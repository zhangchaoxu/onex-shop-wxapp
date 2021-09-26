import tui from '../../../common/httpRequest'
Page({
  data: {
    webURL: 'https://thorui.cn/images/mall/',
    evaluateList: [{
      star: 5,
      imgs: ['cat_1.jpg', 'cat_2.jpg', 'cat_1.jpg', 'cat_2.jpg', 'cat_2.jpg'],
      zan: false
    }, {
      star: 4,
      imgs: ['cat_1.jpg'],
      zan: true
    }, {
      star: 5,
      imgs: [],
      zan: false
    }, {
      star: 5,
      imgs: ['cat_1.jpg', 'cat_2.jpg', 'cat_2.jpg'],
      zan: false
    }, {
      star: 5,
      imgs: ['cat_1.jpg', 'cat_2.jpg'],
      zan: false
    }]
  },
  previewImage(e) {
    let dataset=e.currentTarget.dataset;
    let index=Number(dataset.index)
    let current=Number(dataset.current)
    let imgs = this.data.evaluateList[index].imgs
    let urls = imgs.map(item => {
      return this.data.webURL + item
    })
    wx.previewImage({
      current: urls[current],
      urls: urls
    })
  },
  evaluateDetail(){
    tui.href('/pages/index/evaluateDetail/evaluateDetail')
  }
})