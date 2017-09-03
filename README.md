webBuildTools

往线上推送的都是源文件、在线上被访问的是加工后的源文件

加工过程需要用到的依赖用--save来保存

辅助我们编写源文件的依赖用--save-dev来保存

配置webstorm flow ，直接用当前目录下的./node_modules/.bin/flow.cmd 就行了

使用flow导致stub，还不知道原因、先不用

很奇怪，明明没用到react，却一定要添加babel-preset-react，否则转码的时候就报错