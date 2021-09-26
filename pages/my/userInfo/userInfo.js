import tui from '../../../common/httpRequest'
Page({
  data: {
    sex: '男',
		date:'请选择'
  },
  changeAvatar(){
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: res => {
        const tempFilePaths = res.tempFilePaths[0];
        tui.href('/pages/my/cropper/cropper?src=' + tempFilePaths);
      }
    });
  },
  nickname(){
    tui.href("/pages/my/nickname/nickname")
  },
  changeSex() {
    let that = this
    wx.showActionSheet({
      itemList: ['男', '女'],
      success(e) {
        that.setData({
          sex:['男', '女'][e.tapIndex]
        })
      }
    })
  },
  changeDate(e){
     this.setData({
       date:e.detail.value
     })
  }
})