const path = require("path");
const utils = require("./build/utils");

// 用于做相应的merge处理
const merge = require("webpack-merge");

const resolve = (dir) => {
  return path.join(__dirname, dir);
};
module.exports = {
  // 项目二级目录
  publicPath: "./",
  // 编译输出目录
  outputDir: resolve("../../../build/app/module"),
  // 生产环境构建生成 source map
  productionSourceMap: true,
  chainWebpack: (config) => {
    config.module
      .rule("images")
      .use("url-loader")
      .tap((options) =>
        merge(options, {
          limit: 5120,
        })
      );
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@img", resolve("src/assets/img"));
  },
  // 本地服务器
  devServer: {
    open: true, // 是否自动打开浏览器页面
    // ......
  },
  // 多入口
  configureWebpack: (config) => {
    config.entry = utils.getEntries(); // 直接覆盖 entry 配置
    // 使用 return 一个对象会通过 webpack-merge 进行合并，plugins 不会置空
    return {
      plugins: [...utils.htmlPlugin()],
    };
  },
  // pages 多入口配置
  pages: utils.setPages(),
};
