import tui from '../../../common/httpRequest'
Page({
  data: {
    isShow: true
  },
  recharge() {
    tui.href('/pages/my/recharge/recharge')
  },
  toggle() {
    this.setData({
      isShow:!this.data.isShow
    })
  },
  records(){
    tui.href('/pages/my/records/records')
  },
  bankCard(){
    tui.href('/pages/my/bankCard/bankCard')
  },
  coupon(){
    tui.href('/pages/my/myCoupon/myCoupon')
  }
})