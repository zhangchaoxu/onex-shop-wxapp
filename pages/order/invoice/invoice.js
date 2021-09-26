Page({
  data: {
    type: 1, //发票类型：1-电子普通发票 2-不开发票
    invoiceTitle: 1, //发票抬头：1-个人 2-企业
    optional:false,
    modal: false
  },
  switchType(e) {
    let type=Number(e.currentTarget.dataset.type)
    this.setData({
      type:type
    })
  },
  switchTitle(e) {
    let type=Number(e.currentTarget.dataset.type)
    this.setData({
      invoiceTitle:type
    })
  },
  showModal(){
    this.setData({
      modal:true
    })
  },
  hideModal(){
    this.setData({
      modal:false
    })
  },
  optionalToggle(){
    this.setData({
      optional:!this.data.optional
    })
  }
})