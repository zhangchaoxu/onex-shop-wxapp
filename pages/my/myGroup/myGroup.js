import tui from '../../../common/httpRequest'
Page({

//实际项目中，根据实际列表拼团状态来判断显示
  data: {
    tabs: [
      {
        name: '全部'
      },
      {
        name: '拼团中'
      },
      {
        name: '拼团成功'
      },
      {
        name: '拼团失败'
      }
    ],
    currentTab: 0,
    statusArr: ['拼团成功', '待分享，差一人', '拼团成功', '拼团失败，已退款']
  },

  change(e) {
    this.setData({
      currentTab:e.detail.index
    })
  },
  detail() {
    let status = this.data.currentTab == 0 ? 2 : this.data.currentTab;
    tui.href(`/pages/my/myGroupDetail/myGroupDetail?status=${status}`);
  }
})