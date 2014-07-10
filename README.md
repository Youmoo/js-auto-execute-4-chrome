auto-execute : 打开一个网页，自动执行预设的脚本
------------------------------------------
### 依赖
* chrome browser
* Zepto

### 使用
1. 下载此扩展，解压到某个目录下
2. 打开chrome browser,在地址栏中输入*chrome://extensions/*
3. 在extensions页面勾选*Developer mode*
4. 在extensions页面点击*Load unpacked extensions*,选中扩展解压目录
5. ok,打开[baidu](http://www.baidu.com)试试吧

### 自定义脚本添加规则
1. 脚本命名为当前网页的domain加上js后缀，比如*www.baidu.com.js*
2. 脚本要放在解压目录的*site-js*目录下

### 自定义脚本示例
复制*site-js*目录下的*template.js*并命名为*www.baidu.com.js*

template.js
```javascript
+function ($) {
    //your script goes here,use $ like you use jQuery
}(Zepto);
```

www.baidu.com.js
```javascript
+function ($) {
    //#kw1是百度的搜索框
    $("#kw1").val("Good good study,day day up !");
}(Zepto);
```

### 建议
chrome扩展提供了很多便捷的功能，如果需要可联系QQ1315331828
