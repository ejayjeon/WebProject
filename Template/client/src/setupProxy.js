const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    app.use(
        '/api',
        proxy.createProxyMiddleware({
            target: 'http://localhost:5000',
            // 프론트엔드에서 타겟을 줄 때 5000번으로 주겠다.
            changeOrigin: true
        })
    );
};