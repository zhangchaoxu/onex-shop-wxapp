import tui from '../../../common/httpRequest'
Page({
  data: {
    webURL: "https://www.thorui.cn/wx/static/images/mall/order/",
    //1-待付款 2-付款成功 3-待收货 4-订单已完成 5-交易关闭
    status: 1,
    show: false
  },
  switchStatus() {
    let status = this.data.status + 1
    this.setData({
      status:status > 5 ? 1 : status
    })
    tui.toast("状态切换成功")
  },
  logistics() {
    tui.href("/pages/my/logistics/logistics")
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
  refund(){
    tui.href("/pages/my/refund/refund")
  }
  
})