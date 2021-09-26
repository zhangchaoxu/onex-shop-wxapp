Page({
  data: {
    nickname: ''
  },
  inputNickname(e) {
    this.setData({
      nickname:e.detail.value
    })
  },
  clearInput() {
    this.setData({
      nickname:''
    })
  }
})