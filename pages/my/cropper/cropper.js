Page({
  data: {
    src: '',
    imageUrl: '' //要裁剪的图片
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      src: options.src || 'https://thorui.cn/images/mall/banner/1.jpg'
    }, () => {
      //如果从上个页面传值时可显示loading
      this.data.src && wx.showLoading({
        title: '请稍候...',
        mask: true
      });
    })

  },
  ready() {
    this.setData({
      imageUrl: this.data.src
    })
  },
  cropper(e) {
    //裁剪完成后处理逻辑
    if(e.detail.url){
      wx.previewImage({
        urls: [e.detail.url] // 需要预览的图片http链接列表
      });
    }else{
      console.log(e.detail.base64)
      wx.showToast({
        title: '裁剪成功！查看控制台打印',
        icon:'none'
      })
    }
  }
})