import tui from '../../../common/httpRequest'
Page({
  href(e) {
    let type=e.currentTarget.dataset.type
    if(type==1){
      tui.href('/pages/my/notice/notice');
    }else{
      tui.toast("功能开发中~")
    }
  }
})