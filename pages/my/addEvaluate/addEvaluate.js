Page({
  data: {
    current: 5
  },
  change(e) {
    this.setData({
      current:e.detail.index
    })
  }
})