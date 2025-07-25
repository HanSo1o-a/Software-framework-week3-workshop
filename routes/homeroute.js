module.exports = {
  route: function (app, path) {
    const users = [
      { email: "user1@example.com", password: "123" },
      { email: "user2@example.com", password: "456" },
      { email: "user3@example.com", password: "789" }
    ];

    // 路由1: 首页（显示 form.html）
    app.get('/', function (req, res) {
      res.sendFile(path.resolve('./www/form.html'));
    });

    // 路由2: 账户页
    app.get('/account', function (req, res) {
      res.send(`<h2>Account Page</h2><p>Name: Demo User</p><img src="https://via.placeholder.com/150">`);
    });

    // 路由3: 登录验证
    app.post('/login', function (req, res) {
      const { email, password } = req.body;
      const valid = users.some(u => u.email === email && u.password === password);
      res.json({ valid });
    });
  }
};
