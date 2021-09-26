import tui from '../../../common/httpRequest'
let globalData = getApp().globalData;
Page({
  data: {
    width: globalData.navigationBarWidth || 260,
    height:globalData.navigationBarHeight || 64,
    statusBarHeight:globalData.statusBarHeight || 20,
    bubbleTop: '',
    //气泡弹窗
    itemList: [{
        title: '首页',
        icon: 'home'
      },
      {
        title: '收藏',
        icon: 'star'
      },
      {
        title: '分享',
        icon: 'partake'
      },
      {
        title: '店铺详情',
        icon: 'shop'
      }
    ],
    tabs: [{
        name: '推荐'
      },
      {
        name: '商品'
      },
      {
        name: '活动'
      },
      {
        name: '新品'
      },
      {
        name: '分类'
      }
    ],
    current: 0,
    /*推荐*/
    subTabs: [{
      name: '销量排行'
    }, {
      name: '收藏排行'
    }],
    rankingList: [{
        type: 1,
        list: [{
            img: '/static/images/mall/product/3.jpg',
            title: '百雀羚套装女补水保湿护肤品',
            sales: 100000
          },
          {
            img: '/static/images/mall/product/4.jpg',
            title: '柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
            sales: 98000
          },
          {
            img: '/static/images/mall/product/5.jpg',
            title: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
            sales: 90000
          }
        ]
      },
      {
        type: 2,
        list: [{
            img: '/static/images/mall/product/5.jpg',
            title: '百草味 肉干肉脯 休闲零食 靖江精制猪肉脯200g/袋',
            collection: 99999
          },
          {
            img: '/static/images/mall/product/3.jpg',
            title: '百雀羚套装女补水保湿护肤品',
            collection: 98000
          },
          {
            img: '/static/images/mall/product/4.jpg',
            title: '柔色尽情丝柔口红唇膏女士不易掉色保湿滋润防水 珊瑚红',
            collection: 66666
          }
        ]
      }
    ],
    rankingTab: 0,
    /*商品*/
    isList: false,
    screenType: 1,
    sortWay: '', //asc,desc
    productList: [{
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
    ]
  },
  back() {
    wx.navigateBack();
  },
  initHeader(e) {
    this.setData({
      width: Number(e.detail.left),
      height: Number(e.detail.height),
      statusBarHeight: Number(e.detail.statusBarHeight),
      bubbleTop: Number(e.detail.height) + 6 + 'px'
    })
  },
  search() {
    tui.href('/pages/common/search/search');
  },
  change(e) {
    this.setData({
      current: e.detail.index
    })
  },
  rankingChangeTab(e) {
    let index = Number(e.currentTarget.dataset.index)
    this.setData({
      rankingTab: index
    })
  },
  screen(e) {
    let index = Number(e.currentTarget.dataset.index)
    if (index == 4) {
      this.setData({
        isList: !this.data.isList
      })
    } else {
      this.setData({
        screenType: index
      })
      if (index == 3) {
        this.setData({
          sortWay: !this.data.sortWay || this.data.sortWay == 'desc' ? 'asc' : 'desc'
        })
      }
    }
  },
  detail() {
    tui.href('/pages/index/productDetail/productDetail');
  },
  shop() {
    tui.href('/pages/index/shopDetail/shopDetail');
  },
  product() {
    tui.href('/pages/index/productList/productList');
  }
})