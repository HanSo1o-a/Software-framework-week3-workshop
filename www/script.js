// 等待文档加载完毕
$(document).ready(function () {

  // 监听表单提交事件
  $('#loginForm').submit(function (event) {
    event.preventDefault(); // 阻止表单默认提交行为（刷新页面）

    // 获取用户输入的邮箱和密码
    const email = $('#email').val();
    const password = $('#password').val();

    // 发送 POST 请求到服务器 /login 路由
    $.post('/login', { email, password }, function (response) {

      // 提交前先隐藏所有提示框
      $('#successmsg').removeClass('showmessage').addClass('hidemessage');
      $('#errormsg').removeClass('errormessage').addClass('hidemessage');

      // 根据服务器返回值判断显示哪个提示
      if (response.valid) {
        $('#successmsg').addClass('showmessage');
      } else {
        $('#errormsg').addClass('errormessage');
      }

    }); // end $.post
  }); // end submit
}); // end ready
