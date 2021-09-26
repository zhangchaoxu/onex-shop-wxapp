const form = require("../../../components/common/tui-validation/tui-validation.js")
import tui from '../../../common/httpRequest'
Page({
  data: {
    desc: "",
    email: ""
  },
  onLoad: function (options) {
   
  },
  inputDesc(e) {
    this.setData({
      desc: e.detail.value
    })
  },
  inputEmail(e) {
    this.setData({
      email: e.detail.value
    })
  },
  submit() {
    let rules = [{
      name: "desc",
      rule: ["required", "minLength:8", "maxLength:500"],
      msg: ["请输入问题描述", "问题描述必须8个或以上字符", "问题描述不能超过500个字符"]
    }, {
      name: "email",
      rule: ["required", "isEmail"],
      msg: ["请输入邮箱", "请输入正确的邮箱"]
    }];
    let formData = {
      desc: this.data.desc,
      email: this.data.email
    }
    let checkRes = form.validation(formData, rules);
    if (!checkRes) {
      tui.request("/Home/AddFeedBack", "POST", {
        Name: this.data.email,
        Subject: "问题反馈",
        Email: this.data.email,
        Message: this.data.desc
      }).then((res) => {
        console.log(res)
        if (res.code == 100) {
          this.setData({
            desc: "",
            email: ""
          })
          tui.toast('提交成功');
        } else {
          tui.toast(res.message);
        }
      }).catch((res) => {})
    } else {
      tui.toast(checkRes)
    }
  }
})