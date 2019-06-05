## 项目使用方法

## 启动方式
`npm run serve`  //启动项目
`npm run build`  //打包项目

## 目录介绍

```
|-- dist                     编译后的文件目录
|-- node_modules             依赖包
|-- public                   模板文件和静态资源(网页图标 favicon.ico和网页入口 index.html)
|-- src                      开发目录（配置完成后基本只在该文件夹开发即可）
   |-- assets                    资源，如 css、image、iconfont
   |-- components                组件
   |-- router                    路由 vue-router
   |-- store                     状态 vuex
   |-- views                     路由组件，即某个路由直接指向该组件
   |-- App.vue                   根组件
   |-- main.js                   项目入口
|-- .browserslistrc          配置支持的浏览器范围，babel会根据这个进行 Polyfill
|-- .editorconfig            设置该项目的编辑器的配置
|-- .env.development         开发环境自定义参数
|-- .env.production          生产环境自定义参数
|-- .eslintrc.js             eslint 配置
|-- .gitignore               git 忽略目录
|-- babel.config.js          babel 配置
|-- package.json             项目依赖列表
|-- postcss.config.js        postcss 配置
|-- README.md
|-- vue.config.js            项目配置及 webpack 配置
```

