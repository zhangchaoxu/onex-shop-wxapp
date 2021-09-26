import tui from '../../../common/httpRequest'
Page({
  data: {
    hotSearch: ['休闲零食', '自热火锅', '小冰箱迷你'],
    banner: ['1.jpg', '2.jpg', '3.jpg', '4.jpg', '5.jpg'],
    category: [{
      img: '1.png',
      name: '短袖T恤'
    },
    {
      img: '2.png',
      name: '足球'
    },
    {
      img: '3.png',
      name: '运动鞋'
    },
    {
      img: '4.png',
      name: '中老年'
    },
    {
      img: '5.png',
      name: '甜美风'
    },
    {
      img: '6.png',
      name: '鱼尾裙'
    },
    {
      img: '7.png',
      name: '相机配件'
    },
    {
      img: '8.png',
      name: '护肤套装'
    },
    {
      img: '9.png',
      name: '单肩包'
    },
    {
      img: '10.png',
      name: '卫衣'
    }
  ],
    newProduct: [
      {
        name: '时尚舒适公主裙高街修身长裙',
        present: 198,
        original: 298,
        pic: '1.jpg',
        type: 1,
        isLabel: true
      },
      {
        name: '高街修身雪纺衫',
        present: 398,
        original: 598,
        pic: '2.jpg',
        type: 2,
        isLabel: true
      },
      {
        name: '轻奢商务上衣',
        present: 99,
        original: 199,
        pic: '3.jpg',
        type: 1,
        isLabel: true
      },
      {
        name: '品质牛皮婚鞋牛皮婚鞋品质就是好',
        present: 99,
        original: 199,
        pic: '5.jpg',
        type: 1,
        isLabel: true
      },
      {
        name: '轻奢时尚大包限时新品推荐',
        present: 99,
        original: 199,
        pic: '6.jpg',
        type: 1,
        isLabel: false
      },
      {
        name: '高街修身长裙',
        present: 999,
        original: 1299,
        pic: '4.jpg',
        type: 2,
        isLabel: true
      }
    ],
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
    pageIndex: 1,
    loadding: false,
    pullUpOn: true
  },
  detail: function() {
    tui.href('/pages/index/productDetail/productDetail')
  },
  coupon() {
    tui.href('/pages/index/coupon/coupon')
  },
  classify: function() {
    wx.switchTab({
      url:'../classify/classify'
    });
  },
  more: function(e) {
    let key = e.currentTarget.dataset.key || '';
    tui.href('/pages/index/productList/productList?searchKey=' + key)
  },
  search: function() {
    tui.href('/pages/common/search/search')
  },
  seckill(e) {
    let type=Number(e.currentTarget.dataset.index)
    let url = type == 1 ? '/pages/index/seckillList/seckillList' : '/pages/index/seckillDetail/seckillDetail';
    tui.href(url)
  },
  group(e){
    let type=Number(e.currentTarget.dataset.type)
    let url = type == 1 ? '/pages/index/groupList/groupList' : '/pages/index/groupDetail/groupDetail';
    tui.href(url);
  },
  onPullDownRefresh: function() {
    let loadData = JSON.parse(JSON.stringify(this.data.productList));
    loadData = loadData.splice(0, 10)
    this.setData({
      productList: loadData,
      pageIndex: 1,
      pullUpOn: true,
      loadding: false
    })
    wx.stopPullDownRefresh()
	},
	onReachBottom: function() {
	  if (!this.data.pullUpOn) return;
    this.setData({
      loadding: true
    }, () => {
      if (this.data.pageIndex == 4) {
        this.setData({
          loadding: false,
          pullUpOn: false
        })
      } else {
        let loadData = JSON.parse(JSON.stringify(this.data.productList));
        loadData = loadData.splice(0, 10)
        if (this.data.pageIndex == 1) {
          loadData = loadData.reverse();
        }
        this.setData({
          productList: this.data.productList.concat(loadData),
          pageIndex: this.data.pageIndex + 1,
          loadding: false
        })
      }
    })
	},
  onShareAppMessage: function () {
      return {
        title:"ThorUI组件库-商城模板"
      }
  }
})