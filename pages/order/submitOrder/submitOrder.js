Page({
  data: {
    hasCoupon: true,
    insufficient: false,
    show: false,
    couponShow:false
  },
  chooseAddr() {
    wx.navigateTo({
      url: "/pages/my/address/address"
    })
  },
  btnPay() {
    this.setData({
      show:true
    })
  },
  popupClose() {
    this.setData({
      show:false
    })
  },
  couponClose(){
    this.setData({
      couponShow:false
    })
  },
  selectCoupon(){
    this.setData({
      couponShow:true
    })
  },
  invoice(){
    wx.navigateTo({
      url: "/pages/order/invoice/invoice"
    })
  }
})