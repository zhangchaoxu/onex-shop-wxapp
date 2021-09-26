import tui from '../../../common/httpRequest'
Page({
  data: {
    webURL: 'https://thorui.cn/images/mall/group/',
    selectH: 0,
    dropdownList: [{
        name: '价格升序',
        selected: false
      },
      {
        name: '价格降序',
        selected: false
      }
    ],
    isList: false, //列表或大图
    tabIndex: 0, //顶部筛选索引
    drawer: false,
    drawerH: 600,
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
    ],
    tabbarHeight: 50
  },
  onLoad: function (options) {
    let sys = wx.getSystemInfoSync()
    this.setData({
      tabbarHeight: sys.windowWidth / 750 * 100,
      drawerH: sys.windowHeight
    })
  },
  search: function () {
    tui.href('/pages/common/search/search')
  },
  screen: function (e) {
    this.hideDropdownList();
    let index = e.currentTarget.dataset.index;
    if (index == -1 || index == 1) {
      this.setData({
        tabIndex: index
      })
    } else if (index == 0) {
      this.showDropdownList();
    } else if (index == 2) {
      this.setData({
        isList: !this.data.isList
      })
    } else if (index == 3) {
      this.setData({
        drawer: true
      })
    }
  },
  showDropdownList: function () {
    this.setData({
      selectH: 176
    })
  },
  hideDropdownList: function () {
    this.setData({
      selectH: 0
    })
  },
  dropdownItem: function (e) {
    let index = Number(e.currentTarget.dataset.index);
    let arr = this.data.dropdownList;
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        arr[i].selected = true;
      } else {
        arr[i].selected = false;
      }
    }
    this.setData({
      dropdownList: arr,
      tabIndex: 0,
      selectH: 0
    })
  },
  closeDrawer: function () {
    this.setData({
      drawer: false
    })
  },
  detail() {
    tui.href('/pages/index/groupDetail/groupDetail')
  },
  onShareAppMessage: function () {

  }
})