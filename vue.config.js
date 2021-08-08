module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets : '@/assets',
        components: '@/components',
        views: "@/views",
        utils: "@/utils"
      }
    }
  },
  devServer: {
    // 代理，转发
    proxy: {
      '/soso': {
        target: 'https://c.y.qq.com',
        ws: true,
        changeOrigin: true
      }
    }
  }
}
