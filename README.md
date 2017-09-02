webBuildTools

往线上推送的都是源文件、在线上被访问的是加工后的源文件

加工过程需要用到的依赖用--save来保存

辅助我们编写源文件的依赖用--save-dev来保存

项目中用到的flow 使用全局安装,然后 flow init

npm run e625 : 需要 babel-cli 全局安装

很奇怪，明明没用到react，却一定要添加babel-preset-react，否则转码的时候就报错