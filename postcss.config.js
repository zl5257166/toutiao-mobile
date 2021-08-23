module.exports = {
  // 配置要使用的相关插件
  plugins: {
    // 自动添加浏览器厂商声明前缀，兼容不同浏览器
    // vue-cli 在内部默认已经开启了autoprefixer
    // autoprefixer: {
    //   // browsers 用来配置要兼容到的系统（浏览器）环境
    //   // 这个配置没有问题，但是写在此会编译警告
    //   // 因为vue-cli要通过 .browserslistrc文件来配置兼容环境信息，在此写不合适
    //   browsers: ['Android >= 4.0', 'iOS >= 8']
    // },
    // px 转为 rem
    'postcss-pxtorem': {
      // 转换的根元素基准值
      rootValue: 37.5,
      // 需要转换的属性
      // * 代表 所有css属性都要转换，若只转换某些 则写['font-size','...']
      propList: ['*']
    }
  }
}
