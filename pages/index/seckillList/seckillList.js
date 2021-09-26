Page({
  data: {
    webURL: 'https://thorui.cn/images/mall/',
    //status：1-已结束，2-正在进行，3-即将开抢
    timeSlot: [{
        time: '08:00',
        status: 1,
        statusText: '已结束'
      },
      {
        time: '10:00',
        status: 2,
        statusText: '正在疯抢'
      },
      {
        time: '12:00',
        status: 3,
        statusText: '即将开抢'
      },
      {
        time: '14:00',
        status: 3,
        statusText: '即将开抢'
      },
      {
        time: '16:00',
        status: 3,
        statusText: '即将开抢'
      }
    ],
    productList: [{
        img: '/static/images/mall/product/2.jpg',
        name: '德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒',
        sale: '199',
        factory: '239.98',
        newGuest: true,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/1.jpg',
        name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）',
        sale: '118',
        factory: '239.98',
        newGuest: true,
        subscribe: true
      },
      {
        img: '/static/images/mall/product/3.jpg',
        name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
        sale: '299',
        factory: '699.00',
        newGuest: true,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/4.jpg',
        name: '百雀羚套装女补水保湿护肤品',
        sale: '1599',
        factory: '2899.50',
        newGuest: false,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/5.jpg',
        name: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
        sale: '599',
        factory: '799.00',
        newGuest: false,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/6.jpg',
        name: '短袖睡衣女夏季薄款休闲家居服短裤套装女可爱韩版清新学生两件套 短袖粉色长颈鹿 M码75-95斤',
        sale: '399',
        factory: '699.00',
        newGuest: false,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/1.jpg',
        name: '欧莱雅（LOREAL）奇焕光彩粉嫩透亮修颜霜 30ml（欧莱雅彩妆 BB霜 粉BB 遮瑕疵 隔离）',
        sale: '118',
        factory: '239.98',
        newGuest: false,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/2.jpg',
        name: '德国DMK进口牛奶  欧德堡（Oldenburger）超高温处理全脂纯牛奶1L*12盒',
        sale: '29',
        factory: '69.00',
        newGuest: false,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/4.jpg',
        name: '百雀羚套装女补水保湿护肤品',
        sale: '1599',
        factory: '2899.00',
        newGuest: false,
        subscribe: false
      },
      {
        img: '/static/images/mall/product/3.jpg',
        name: '【第2支1元】柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
        sale: '299',
        factory: '699.00',
        newGuest: false,
        subscribe: false
      }
    ],
    currentTab: 0,
    //status：1-已结束，2-正在进行，3-即将开抢
    status: 2,
    time: '08:00',
    opacity: 1
  },
  onLoad: function (options) {
    //展示优先：正在进行，即将开抢，已结束
    for (let i = 0, len = this.data.timeSlot.length; i < len; i++) {
      let item = this.data.timeSlot[i];
      if (item.status !== 1) {
        this.setData({
          currentTab: i
        })
        break;
      }
    }
  },
  changeTabs(e) {
    let index = Number(e.currentTarget.dataset.index)
    let item = this.data.timeSlot[index];
    this.setData({
      currentTab: index,
      status: item.status,
      time: item.time
    })
  },
  onPageScroll(e) {
    let scrollTop = e.scrollTop;
    if (scrollTop <= 2) {
      this.setData({
        opacity: 1
      })
    } else {
      if (this.data.opacity <= 0) return;
      this.setData({
        opacity: 1 - scrollTop / 40
      })
    }
  }
})