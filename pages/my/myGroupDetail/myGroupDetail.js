import tui from '../../../common/httpRequest'
Page({
  data: {
    webURL: 'https://thorui.cn/images/mall/group/',
    modal: false,
    productList: [
      {
        img: 1,
        name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）',
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: '德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒',
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: '百雀羚套装女补水保湿护肤品',
        sale: 1599,
        factory: 2899,
        payNum: 236
      },
      {
        img: 5,
        name: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
        sale: 599,
        factory: 899,
        payNum: 2399
      },
      {
        img: 6,
        name: '短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤',
        sale: 599,
        factory: 899,
        payNum: 2399
      },
      {
        img: 1,
        name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜',
        sale: 599,
        factory: 899,
        payNum: 2342
      },
      {
        img: 2,
        name: '德国DMK进口牛奶',
        sale: 29,
        factory: 69,
        payNum: 999
      },
      {
        img: 3,
        name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
        sale: 299,
        factory: 699,
        payNum: 666
      },
      {
        img: 4,
        name: '百雀羚套装女补水保湿护肤品',
        sale: 1599,
        factory: 2899,
        payNum: 236
      }
    ],
    //1-拼团中 2-拼团成功 3-拼团失败
    status: 1
  },
  onLoad(options) {
    this.setData({
      status:options.status || 1
    })
  },
  showModal() {
    this.setData({
      modal:true
    })
  },
  hideModal(){
    this.setData({
      modal:false
    })
  },
  detail(){
    tui.href('/pages/index/groupDetail/groupDetail')
  }

})