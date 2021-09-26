import tui from '../../../common/httpRequest'
const poster = require('../../../components/common/tui-poster/tui-poster.js');
let globalData = getApp().globalData;
Page({
  data: {
    height: 64, //header高度
    top: 26, //标题图标距离顶部距离
    scrollH: 0, //滚动总高度
    opcity: 0,
    iconOpcity: 0.5,
    banner: [
      'https://thorui.cn/video/mall.mp4',
      'https://www.thorui.cn/img/product/11.jpg',
      'https://www.thorui.cn/img/product/2.png',
      'https://www.thorui.cn/img/product/33.jpg',
      'https://www.thorui.cn/img/product/4.png',
      'https://www.thorui.cn/img/product/55.jpg',
      'https://www.thorui.cn/img/product/6.png',
      'https://www.thorui.cn/img/product/7.jpg',
      'https://www.thorui.cn/img/product/8.jpg'
    ],
    bannerIndex: 0,
    topMenu: [{
        icon: 'message',
        text: '消息',
        size: 26,
        badge: 3
      },
      {
        icon: 'home',
        text: '首页',
        size: 23,
        badge: 0
      },
      {
        icon: 'people',
        text: '我的',
        size: 26,
        badge: 0
      },
      {
        icon: 'cart',
        text: '购物车',
        size: 23,
        badge: 2
      },
      {
        icon: 'kefu',
        text: '客服小蜜',
        size: 26,
        badge: 0
      },
      {
        icon: 'feedback',
        text: '我要反馈',
        size: 23,
        badge: 0
      },
      {
        icon: 'share',
        text: '分享',
        size: 26,
        badge: 0
      }
    ],
    menuShow: false,
    popupShow: false,
    value: 1,
    //1-已结束，2-正在进行，3-即将开抢
    status: 2,
    //1-未设提醒 2-已设提醒
    remind: 1,
    autoplay:false,
    sharePopup: false,
    posterImg: '',
    winWidth: tui.rpx2px(560 * 2),
    winHeight: tui.rpx2px(890 * 2),
    modalShow: false
  },
  onLoad: function (options) {
    this.setData({
      status:options.status || 2
    })
    let obj =wx.getMenuButtonBoundingClientRect()
    setTimeout(() => {
      wx.getSystemInfo({
        success: res => {
          this.setData({
            width: obj.left || res.windowWidth,
            height:obj.top ? obj.top + obj.height + 8 : res.statusBarHeight + 44,
            top:obj.top ? obj.top + (obj.height - 32) / 2 : res.statusBarHeight + 6,
            scrollH:res.windowWidth
          },()=>{
            globalData.navigationBarWidth=this.data.width
            globalData.navigationBarHeight=this.data.height
            globalData.statusBarHeight=res.statusBarHeight
          })
        }
      });
    }, 0);
  },
  bannerChange: function(e) {
    this.setData({
      bannerIndex:e.detail.current
    })
  },
  previewImage: function(e) {
    let index = Number(e.currentTarget.dataset.index);
    let urls=[...this.data.banner]
    urls.splice(0,1)
    wx.previewImage({
      current: this.data.banner[index-1],
      urls: urls
    });
  },
  back: function() {
    wx.navigateBack();
  },
  openMenu: function() {
    this.setData({
      menuShow:true
    })
  },
  closeMenu: function() {
    this.setData({
      menuShow:false
    })
  },
  showPopup: function() {
    this.setData({
      popupShow:true
    })
  },
  hidePopup: function() {
    this.setData({
      popupShow:false
    })
  },
  change: function(e) {
    this.setData({
      value:e.detail.value
    })
  },
  evaluate() {
    tui.href('/pages/index/goodsEvaluate/goodsEvaluate')
  },
  common: function() {
    tui.toast('功能开发中~');
  },
  btnTopMenu(e) {
    let index=Number(e.currentTarget.dataset.index)
    this.closeMenu()
    if (index == 4) {
      wx.makePhoneCall({
        phoneNumber: "10086"
      })
    } else if (index == 6) {
      this.showSharePopup()
    } else {
      let url = {
        0: '/pages/my/message/message',
        1: "/pages/tabbar/index/index",
        2: '/pages/tabbar/my/my',
        3: '/pages/tabbar/cart/cart',
        5: '/pages/my/feedback/feedback?page=mall'
      } [index];
      
      if (index == 0 || index == 5) {
        url && tui.href(url)
      } else {
        wx.switchTab({
          url: url
        })
      }
    }
  },
  submit() {
    this.setData({
      popupShow:false
    })
    tui.href('/pages/order/submitOrder/submitOrder')
  },
  btnRemind() {
    this.setData({
      remind: this.data.remind == 1 ? 2 : 1
    })
  },
  coupon() {
    tui.href('/pages/index/coupon/coupon')
  },
  shop() {
    tui.href('/pages/index/shop/shop')
  },
  play() {
    this.setData({
      autoplay:false
    })
    // wx.navigateTo({
    //   url: '../video/video'
    // })
  },
  pause(){
    this.setData({
      autoplay:true
    })
  },
  showSharePopup(){
    this.setData({
      sharePopup:true
    })
  },
  hideSharePopup() {
    this.setData({
      sharePopup:false
    })
  },
  async createPoster() {
    this.hideSharePopup()
    if (this.data.posterImg) {
      this.setData({
        modalShow:true
      })
      return;
    }
    wx.showLoading({
      mask: true,
      title: '图片生成中...'
    });
    let mainPic = await poster.getImage('https://thorui.cn/img/product/poster.jpg');
    let qrcode = await poster.getImage('https://thorui.cn/extend/share/applets.png');
    await poster.removeSavedFile();
    if (mainPic && qrcode) {
      const imgs = {
        mainPic: mainPic,
        qrcode: qrcode
      };
      let text = '谈判官明星同款耳坠韩国气质简约显脸瘦的耳环女百搭个性长款耳钉 个性水滴耳环【A2】';
      poster.drawGoodsPoster('posterId', this.data.winWidth, this.data.winHeight, imgs, text, '49.00', '199.00', 'ThorUI示例小程序',
        res => {
          wx.hideLoading();
          if (res) {
            this.setData({
              posterImg:res
            })
            setTimeout(() => {
              this.setData({
                modalShow:true
              })
            }, 60);
          } else {
            tui.toast('生成海报失败,请稍后再试');
          }
        });
    } else {
      wx.hideLoading();
      tui.toast('生成海报图片下载失败,请稍后再试');
    }
  },
  hideShareModal() {
    this.setData({
      modalShow:false
    })
  },
  savePic() {
    if (this.data.posterImg) {
      poster.saveImage(this.data.posterImg);
      this.hideShareModal();
    }
  },
  onShare() {
    this.hideSharePopup()
  },
  onPageScroll(e) {
    let scroll = e.scrollTop <= 0 ? 0 : e.scrollTop;
    let opcity = scroll / this.data.scrollH;
    if (this.data.opcity >= 1 && opcity >= 1) {
      return;
    }
    this.setData({
      opcity:opcity,
      iconOpcity:0.5 * (1 - opcity < 0 ? 0 : 1 - opcity)
    })
  }
})