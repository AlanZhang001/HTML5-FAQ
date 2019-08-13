### H5项目常见问题及注意事项

#### Meta基础知识： 

##### H5页面窗口自动调整到设备宽度，并禁止用户缩放页面
``` Javascript
//一、HTML页面结构
<meta name="viewport" content="width=device-width,initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no" />
// width    设置viewport宽度，为一个正整数，或字符串‘device-width’
// height   设置viewport高度，一般设置了宽度，会自动解析出高度，可以不用设置
// initial-scale    默认缩放比例，为一个数字，可以带小数
// minimum-scale    允许用户最小缩放比例，为一个数字，可以带小数
// maximum-scale    允许用户最大缩放比例，为一个数字，可以带小数
// user-scalable    是否允许手动缩放

//二、JS动态判断
var phoneWidth =  parseInt(window.screen.width);
var phoneScale = phoneWidth/640;
var ua = navigator.userAgent;
if (/Android (\d+\.\d+)/.test(ua)){
	var version = parseFloat(RegExp.$1);
	if(version>2.3){
		document.write('<meta name="viewport" content="width=640, minimum-scale = '+phoneScale+', maximum-scale = '+phoneScale+', target-densitydpi=device-dpi">');
	}else{
		document.write('<meta name="viewport" content="width=640, target-densitydpi=device-dpi">');
	}
} else {
	document.write('<meta name="viewport" content="width=640, user-scalable=no, target-densitydpi=device-dpi">');
}
```

##### H5空白页基本meta标签
```
<!-- 设置缩放 -->
<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no, minimal-ui" />
<!-- 可隐藏地址栏，仅针对IOS的Safari（注：IOS7.0版本以后，safari上已看不到效果） -->
<meta name="apple-mobile-web-app-capable" content="yes" />
<!-- 仅针对IOS的Safari顶端状态条的样式（可选default/black/black-translucent ） -->
<meta name="apple-mobile-web-app-status-bar-style" content="black" />
<!-- IOS中禁用将数字识别为电话号码/忽略Android平台中对邮箱地址的识别 -->
<meta name="format-detection"content="telephone=no, email=no" />
```

##### PC端基础meta标签
```
<!-- 页面关键词-->
<meta name="keywords" content="your tags" />
<!-- 页面描述-->
<meta name="description" content="150 words" />
<!-- 搜索引擎索引方式：robotterms是一组使用逗号(,)分割的值，通常有如下几种取值：none，noindex，nofollow，all，index和follow。确保正确使用nofollow和noindex属性值。-->
<meta name="robots" content="index,follow" />
<!--
    all：文件将被检索，且页面上的链接可以被查询；
    none：文件将不被检索，且页面上的链接不可以被查询；
    index：文件将被检索；
    follow：页面上的链接可以被查询；
    noindex：文件将不被检索；
    nofollow：页面上的链接不可以被查询。
 -->
 
 <!-- 页面重定向和刷新：content内的数字代表时间（秒），既多少时间后刷新。如果加url,则会重定向到指定网页（搜索引擎能够自动检测，也很容易被引擎视作误导而受到惩罚）。-->
 <meta http-equiv="refresh" content="0;url=" />
 
```

##### 页面缓存设置
```
<!-- 清除缓存 http1.0 -->
<meta http-equiv="pragma" content="no-cache">
<meta http-equiv="cache-control" content="no-cache">
<meta http-equiv="expires" content="0">   
```

##### 其他meta标签
```
<!-- 启用360浏览器的极速模式(webkit) -->
<meta name="renderer" content="webkit">
<!-- 避免IE使用兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<!-- 针对手持设备优化，主要是针对一些老的不识别viewport的浏览器，比如黑莓 -->
<meta name="HandheldFriendly" content="true">
<!-- 微软的老式浏览器 -->
<meta name="MobileOptimized" content="320">
<!-- uc强制竖屏 -->
<meta name="screen-orientation" content="portrait">
<!-- QQ强制竖屏 -->
<meta name="x5-orientation" content="portrait">
<!-- UC强制全屏 -->
<meta name="full-screen" content="yes">
<!-- QQ强制全屏 -->
<meta name="x5-fullscreen" content="true">
<!-- UC应用模式 -->
<meta name="browsermode" content="application">
<!-- QQ应用模式 -->
<meta name="x5-page-mode" content="app">
<!-- windows phone 点击无高光 -->
<meta name="msapplication-tap-highlight" content="no">

<meta name="author" content="author name" /> <!-- 定义网页作者 -->
<meta name="google" content="index,follow" />
<meta name="googlebot" content="index,follow" />
<meta name="verify" content="index,follow" />
```


#### 常见问题：

##### 移动端如何定义字体font-family
``` CSS
@ --------------------------------------中文字体的英文名称
@ 宋体      SimSun
@ 黑体      SimHei
@ 微信雅黑   Microsoft Yahei
@ 微软正黑体 Microsoft JhengHei
@ 新宋体    NSimSun
@ 新细明体  MingLiU
@ 细明体    MingLiU
@ 标楷体    DFKai-SB
@ 仿宋     FangSong
@ 楷体     KaiTi
@ 仿宋_GB2312  FangSong_GB2312
@ 楷体_GB2312  KaiTi_GB2312  
@
@ 说明：中文字体多数使用宋体、雅黑，英文用Helvetica

body { font-family: Microsoft Yahei,SimSun,Helvetica; } 
```


##### 打电话发短信写邮件怎么实现
``` HTML
// 一、打电话
<a href="tel:0755-10086">打电话给:0755-10086</a>

//  二、发短信，winphone系统无效
<a href="sms:10086">发短信给: 10086</a>

// 三、写邮件
//注：在添加这些功能时，第一个功能以"?"开头，后面的以"&"开头
//1.普通邮件
<a href="mailto:863139978@qq.com">点击我发邮件</a>
//2.收件地址后添加?cc=开头，可添加抄送地址（Android存在兼容问题）
<a href="mailto:863139978@qq.com?cc=zhangqian0406@yeah.net">点击我发邮件</a>
//3.跟着抄送地址后，写上&bcc=,可添加密件抄送地址（Android存在兼容问题）
<a href="mailto:863139978@qq.com?cc=zhangqian0406@yeah.net&bcc=384900096@qq.com">点击我发邮件</a>
//4.包含多个收件人、抄送、密件抄送人，用分号(;)隔开多个邮件人的地址
<a href="mailto:863139978@qq.com;384900096@qq.com">点击我发邮件</a>
//5.包含主题，用?subject=
<a href="mailto:863139978@qq.com?subject=邮件主题">点击我发邮件</a>
//6.包含内容，用?body=;如内容包含文本，使用%0A给文本换行 
<a href="mailto:863139978@qq.com?body=邮件主题内容%0A腾讯诚信%0A期待您的到来">点击我发邮件</a>
//7.内容包含链接，含http(s)://等的文本自动转化为链接
<a href="mailto:863139978@qq.com?body=http://www.baidu.com">点击我发邮件</a>
//8.内容包含图片（PC不支持）
<a href="mailto:863139978@qq.com?body=<img src='images/1.jpg' />">点击我发邮件</a>
//9.完整示例
<a href="mailto:863139978@qq.com;384900096@qq.com?cc=zhangqian0406@yeah.net&bcc=993233461@qq.com&subject=[邮件主题]&body=腾讯诚邀您参与%0A%0Ahttp://www.baidu.com%0A%0A<img src='images/1.jpg' />">点击我发邮件</a>
```


##### 移动端touch事件（区分webkit和winphone）
```
/* 当用户手指放在移动设备在屏幕上滑动会触发的touch事件 */
// 以下支持webkit
touchstart——当手指触碰屏幕时候发生。不管当前有多少只手指
touchmove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用event的preventDefault()可以阻止默认情况的发生：阻止页面滚动
touchend——当手指离开屏幕时触发
touchcancel——系统停止跟踪触摸时候会触发。例如在触摸过程中突然页面alert()一个提示框，此时会触发该事件，这个事件比较少用

//TouchEvent说明：
touches：屏幕上所有手指的信息
targetTouches：手指在目标区域的手指信息
changedTouches：最近一次触发该事件的手指信息
touchend时，touches与targetTouches信息会被删除，changedTouches保存的最后一次的信息，最好用于计算手指信息

//参数信息(changedTouches[0])
clientX、clientY在显示区的坐标
target：当前元素

//事件响应顺序
ontouchstart  > ontouchmove  > ontouchend > onclick

// 以下支持winphone 8
MSPointerDown——当手指触碰屏幕时候发生。不管当前有多少只手指
MSPointerMove——当手指在屏幕上滑动时连续触发。通常我们再滑屏页面，会调用css的html{-ms-touch-action: none;}可以阻止默认情况的发生：阻止页面滚动
MSPointerUp——当手指离开屏幕时触发
```


##### 移动端click屏幕产生200-300ms的延时响应
```
说明：移动设备上的web网页是有300ms延迟的，玩玩会造成按钮点击延迟甚至是点击失效。

以下是历史原因，来源一个公司内一个同事的分享：

2007年苹果发布首款iphone上IOS系统搭载的safari为了将适用于PC端上大屏幕的网页能比较好的展示在手机端上，使用了双击缩放(double tap to zoom)的方

案，比如你在手机上用浏览器打开一个PC上的网页，你可能在看到页面内容虽然可以撑满整个屏幕，但是字体、图片都很小看不清，此时可以快速双击屏幕上的某一部分，

你就能看清该部分放大后的内容，再次双击后能回到原始状态。

双击缩放是指用手指在屏幕上快速点击两次，iOS 自带的 Safari 浏览器会将网页缩放至原始比例。

原因就出在浏览器需要如何判断快速点击上，当用户在屏幕上单击某一个元素时候，例如跳转链接<a href="#"></a>，此处浏览器会先捕获该次单击，但浏览器不能决定

用户是单纯要点击链接还是要双击该部分区域进行缩放操作，所以，捕获第一次单击后，浏览器会先Hold一段时间t，如果在t时间区间里用户未进行下一次点击，则浏览器

会做单击跳转链接的处理，如果t时间里用户进行了第二次单击操作，则浏览器会禁止跳转，转而进行对该部分区域页面的缩放操作。那么这个时间区间t有多少呢？在IOS 

safari下，大概为300毫秒。这就是延迟的由来。造成的后果用户纯粹单击页面，页面需要过一段时间才响应，给用户慢体验感觉，对于web开发者来说是，页面js捕获

click事件的回调函数处理，需要300ms后才生效，也就间接导致影响其他业务逻辑的处理。

//解决方案：
fastclick可以解决在手机上点击事件的300ms延迟
zepto的touch模块，tap事件也是为了解决在click的延迟问题
```

##### 简易的fastclick模拟示例。[demo](demo/fastclick.html)

```html
    <body>
        <h2>fastclick模拟测试</h2>
        <br/>
        <div class="demo">捕获tap</div>
    </body>
    <script type="text/javascript">
        var demo = document.querySelector('.demo');
        demo.addEventListener('touchstart',function(e){
            // 阻止默认事件，阻止tap事件引起的click
            e.preventDefault();

            // 创建点击事件并触发
            var event = document.createEvent("MouseEvents");
            event.initMouseEvent("click",true,true,document.defaultView,0,0,0,0,0,false,false,false,false,0,null);
            event.alisename = "tap";
            e.target.dispatchEvent(event);
        });

        demo.addEventListener('click',function(e){
            console.log(e.target);
            alert(e.alisename);
        });

    </script>

```

##### Rentina显示屏原理及设计方案
```
说明：retina屏是一种具备超高像素密度的液晶屏，同样大小的屏幕上显示的像素点由1个变为多个，如在同样带下的屏幕上，苹果设备的retina显示屏中，像素点1个变为4个。
在高清显示屏中的位图被放大，图片会变得模糊，因此移动端的视觉稿通常会设计为传统PC的2倍。
那么，前端的应对方案是：设计稿切出来的图片长宽保证为偶数，并使用backgroud-size把图片缩小为原来的1/2

//例如图片宽高为：200px*200px，那么写法如下
.css{width:100px;height:100px;background-size:100px 100px;}
//其它元素的取值为原来的1/2，例如视觉稿40px的字体，使用样式的写法为20px
.css{font-size:20px}

//image-set设计Rentina背景图
image-set,webkit私有属性，也是CSS4的属性，为解决Rentina屏幕下的图像而生。
.css {
	background: url(images/bg.jpg) no-repeat center;
	background: -webkit-image-set(
	url(images/bg.jpg) 1x,     //支持image-set普通屏
	url(images/bg-2x.jpg) 2x); //支持image-set的Rentinan
}
```


##### 点击元素产生背景或边框怎么去掉
```
//ios用户点击一个链接，会出现一个半透明灰色遮罩, 如果想要禁用，可设置-webkit-tap-highlight-color的alpha值为0去除灰色半透明遮罩；
//android用户点击一个链接，会出现一个边框或者半透明灰色遮罩, 不同生产商定义出来额效果不一样，可设置-webkit-tap-highlight-color的alpha值为0去除部分机器自带的效果；
//winphone系统,点击标签产生的灰色半透明背景，能通过设置<meta name="msapplication-tap-highlight" content="no">去掉；
//特殊说明：有些机型去除不了，如小米2。对于按钮类还有个办法，不使用a或者input标签，直接用div标签
a,button,input,textarea { 
	-webkit-tap-highlight-color: rgba(0,0,0,0); 
	-webkit-user-modify:read-write-plaintext-only; //-webkit-user-modify有个副作用，就是输入法不再能够输入多个字符
}   
// 也可以 
* { -webkit-tap-highlight-color: rgba(0,0,0,0); }
//winphone下
<meta name="msapplication-tap-highlight" content="no">
```


##### 美化表单元素
``` CSS
//一、使用appearance改变webkit浏览器的默认外观
input,select { -webkit-appearance:none; appearance: none; }

//二、winphone下，使用伪元素改变表单元素默认外观
//1.禁用select默认箭头，::-ms-expand修改表单控件下拉箭头，设置隐藏并使用背景图片来修饰
select::-ms-expand { display:none; }

//2.禁用radio和checkbox默认样式，::-ms-check修改表单复选框或单选框默认图标，设置隐藏并使用背景图片来修饰
input[type=radio]::-ms-check,
input[type=checkbox]::-ms-check { display:none; }

//3.禁用pc端表单输入框默认清除按钮，::-ms-clear修改清除按钮，设置隐藏并使用背景图片来修饰
input[type=text]::-ms-clear,
input[type=tel]::-ms-clear,
input[type=number]::-ms-clear { display:none; }
```


##### 移动端字体单位font-size选择px还是rem
```
// 如需适配多种移动设备，建议使用rem。以下为参考值：
html { font-size: 62.5%; }   //10/16 = 62.5%
//设置12px字体   这里注意在rem前要加上对应的px值，解决不支持rem的浏览器的兼容问题，做到优雅降级
body { font-size:12px; font-size:1.2rem; }     
```

##### 根据屏幕尺寸修改viewpoint来实现自适应
```
var docEl = window.document.documentElement;
var width = docEl.getBoundingClientRect().width;
//根矩屏幕尺寸进行缩放
if (width !== 750) {
   var rate = width / 750;
   var content = 'width=750,minimum-scale=' + rate +
                 ',maximum-scale=' + rate +
                 ',initial-scale=' + rate +
                 ',user-scalable=no'
   document.getElementById('viewport').setAttribute('content',content);
}
```

##### 根据设备尺寸尺寸来修改rem的值以达到自适应

```
<!--动态计算rem-->
<script type="text/javascript">
    /**
     * []
     * @param  {object} doc [document]
     * @param  {object} win [window]
     * @return {void}
     */
    (function(doc, win) {
        var docEl = doc.documentElement;
        var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
        var recalc = function() {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if (clientWidth > 750) {
                clientWidth = 750;
            }
            docEl.style.fontSize = 100 * (clientWidth / 750) + 'px';
            adjustRem(docEl, clientWidth);
        };
        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
        recalc();
        /**
         * [adjustRem 自适应rem]
         * @param  {object} docElE       [doc.documentElement]
         * @param  {number} clientWidth [屏幕宽度]
         * @return {void}
         */
        function adjustRem(docElE, clientWidth) {
            if (!clientWidth || clientWidth >= 750) return;
            var div = document.createElement('div');
            div.style.width = '1.4rem';
            div.style.height = '0';

            if(!document.body){
                return;
            }

            document.body.appendChild(div);
            var expectWidth = 140 * clientWidth / 750;
            var fitRadio = (div.clientWidth / expectWidth);
            if (fitRadio > 1.1 || fitRadio < 0.9) {
                docElE.style.fontSize = 100 * (clientWidth / 750) / fitRadio + 'px';
            }
            document.body.removeChild(div);
        }
    })(document, window);
</script>

```

##### 超实用的CSS样式
```
//去掉webkit的滚动条——display: none;
//其他参数,目前在IOS上测试无效
::-webkit-scrollba               //滚动条整体部分
::-webkit-scrollbar-thumb        //滚动条内的小方块
::-webkit-scrollbar-track        //滚动条轨道
::-webkit-scrollbar-button       //滚动条轨道两端按钮
::-webkit-scrollbar-track-piece  //滚动条中间部分，内置轨道
::-webkit-scrollbar-corner       //边角，两个滚动条交汇处
::-webkit-resizer                //两个滚动条的交汇处上用于通过拖动调整元素大小的小控件

// 实例
/* --------------重写chrome滚动条--begin */
::-webkit-scrollbar{width: 6px; height: 6px; }
::-webkit-scrollbar-track-piece{background-color: #CCCCCC; -webkit-border-radius: 6px; }
::-webkit-scrollbar-thumb:vertical{height: 5px; background-color: #999999; -webkit-border-radius: 6px; }
::-webkit-scrollbar-thumb:horizontal{width: 5px; background-color: #CCCCCC; -webkit-border-radius: 6px; }
/* --------------重写chrome滚动条--end */

// 禁止长按链接与图片弹出菜单
a,img { -webkit-touch-callout: none }    

// 禁止ios和android用户选中文字
html,body {
    -webkit-user-select:none; 
    -moz-user-select:none;
    -ms-user-select:none;
    user-select: none; 
    cursor:default;
}

// 改变输入框placeholder的颜色值
::-webkit-input-placeholder { 
	/* WebKit browsers */
	color: #999; 
}
:-moz-placeholder { 
	/* Mozilla Firefox 4 to 18 */
	color: #999; 
}
::-moz-placeholder { 
	/* Mozilla Firefox 19+ */
	color: #999; 
}
:-ms-input-placeholder { 
	/* Internet Explorer 10+ */
	color: #999; 
}
input:focus::-webkit-input-placeholder{ color:#999; }

// android上去掉语音输入按钮
input::-webkit-input-speech-button {display: none}

// 阻止windows Phone的默认触摸事件
/*说明：winphone下默认触摸事件事件使用e.preventDefault是无效的，可通过样式来禁用，如：*/
html { -ms-touch-action:none; } //禁止winphone默认触摸事件
```

##### 取消input在ios下，输入的时候英文首字母的默认大写
``` HTML
<input autocapitalize="off" autocorrect="off" />
```

##### 屏幕旋转的事件和样式
``` JS
//JS处理
function orientInit(){
	var orientChk = document.documentElement.clientWidth > document.documentElement.clientHeight?'landscape':'portrait';
	if(orientChk =='lapdscape'){
		//这里是横屏下需要执行的事件
	}else{
		//这里是竖屏下需要执行的事件
	}
}

orientInit();
window.addEventListener('onorientationchange' in window?'orientationchange':'resize', function(){
	setTimeout(orientInit, 100);
},false)	

//CSS处理
//竖屏时样式
@media all and (orientation:portrait){   }
//横屏时样式
@media all and (orientation:landscape){   }
```


##### audio元素和video元素在ios和andriod中无法自动播放
```
//音频，写法一
<audio src="music/bg.mp3" autoplay loop controls>你的浏览器还不支持哦</audio>

//音频，写法二
<audio controls="controls">	
	<source src="music/bg.ogg" type="audio/ogg"></source>
	<source src="music/bg.mp3" type="audio/mpeg"></source>
	优先播放音乐bg.ogg，不支持在播放bg.mp3
</audio>

//JS绑定自动播放（操作window时，播放音乐）
$(window).one('touchstart', function(){
	music.play();
})

//微信下兼容处理
document.addEventListener("WeixinJSBridgeReady", function () {
    music.play();
}, false);

//小结
//1.audio元素的autoplay属性在IOS及Android上无法使用，在PC端正常
//2.audio元素没有设置controls时，在IOS及Android会占据空间大小，而在PC端Chrome是不会占据任何空间
//3. 微信中，单纯的将video或者audio隐藏并暂停无效，需要动态的移除和创建该dom元素。这种情况多见于弹出框中有video或audio
```

##### 重力感应事件
```
// 运用HTML5的deviceMotion，调用重力感应事件
if(window.DeviceMotionEvent){
	document.addEventListener('devicemotion', deviceMotionHandler, false)
}	

var speed = 30;
var x = y = z = lastX = lastY = lastZ = 0;
function deviceMotionHandler(eventData){
	var acceleration = event.accelerationIncludingGravity;
	x = acceleration.x;
	y = acceleration.y; 
	z = acceleration.z;
	if(Math.abs(x-lastX)>speed || Math.abs(y-lastY)>speed || Math.abs(z-lastZ)>speed ){
		//这里是摇动后要执行的方法 
		yaoAfter();
	}
	lastX = x;
	lastY = y;
	lastZ = z;
}

function yaoAfter(){
	//do something
}

//说明：说见案例摇一摇效果中yao.js
```


##### 微信浏览器用户调整字体大小后页面矬了，怎么阻止用户调整
```
//以下代码可使Android机页面不再受用户字体缩放强制改变大小，但是会有1S左右延时，期间可以考虑loading来处理
if (typeof(WeixinJSBridge) == "undefined") {
	document.addEventListener("WeixinJSBridgeReady", function (e) {
	    setTimeout(function(){
		    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize':0}, function(res){
			    alert(JSON.stringify(res));
		    })
	    }, 0)
	});
}else{	
    setTimeout(function(){
	    WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize':0}, function(res){
		    alert(JSON.stringify(res));
	    })
    }, 0)	
}

//IOS下可使用 -webkit-text-size-adjust禁止用户调整字体大小
body { -webkit-text-size-adjust:100%!important; }

//最好的解决方案：最好使用rem或百分比布局
```

##### 定位的坑
```
//fixed定位
//1.ios下fixed元素容易定位出错，软键盘弹出时，影响fixed元素定位
//2.android下fixed表现要比iOS更好，软键盘弹出时，不会影响fixed元素定位
//3.ios4下不支持position:fixed
//解决方案：使用[Iscroll](http://cubiq.org/iscroll-5)，如：
<div id="wrapper">
        <ul>
               <li></li>
               .....
        </ul>
</div>
<script src="iscroll.js"></script>
<script>
	var myscroll;
	function loaded(){
		myscroll=new iScroll("wrapper");
	}
	window.addEventListener("DOMContentLoaded",loaded,false);
</script>


//position定位
//Android下弹出软键盘弹出时，影响absolute元素定位
//解决方案:
var ua = navigator.userAgent.indexOf('Android');
if(ua>-1){
	$('.ipt').on('focus', function(){
		$('.css').css({'visibility':'hidden'})
	}).on('blur', function(){
		$('.css').css({'visibility':'visible'})
	})
}

```


##### 播放视频不全屏
``` HTML
<!--
1.ios7+支持自动播放
2.支持Airplay的设备（如：音箱、Apple TV)播放
x-webkit-airplay="true" 
3.播放视频不全屏
webkit-playsinline="true" 
-->
<video x-webkit-airplay="true" webkit-playsinline="true" preload="auto" autoplay src="http://"></video>
```

##### JS判断设备
```
function deviceType(){
	var ua = navigator.userAgent;
	var agent = ["Android", "iPhone", "SymbianOS", "Windows Phone", "iPad", "iPod"];	
	for(var i=0; i<len,len = agent.length; i++){
		if(ua.indexOf(agent[i])>0){			
			break;
		}
	}
}
deviceType();
window.addEventListener('resize', function(){
	deviceType();
})
```

##### JS判断微信浏览器
```
function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=='micromessenger'){
		return true;
	}else{
		return false;
	}
}
```


##### android 2.3 bug
```
//1.@-webkit-keyframes 需要以0%开始100%结束，0%的百分号不能去掉
//2.after和before伪类无法使用动画animation
//3.border-radius不支持%单位，如要兼容，可以给radius设置一下较大的值
//4.translate百分比的写法和scale在一起会导致失效，例如：
-webkit-transform: translate(-50%,-50%) scale(-0.5, 1)
```

##### android 4.x bug
```
//1.三星 Galaxy S4中自带浏览器不支持border-radius缩写
//2.同时设置border-radius和背景色的时候，背景色会溢出到圆角以外部分
//3.部分手机(如三星)，a链接支持鼠标:visited事件，也就是说链接访问后文字变为紫色
//4.android无法同时播放多音频audio
```


##### 消除transition闪屏
``` CSS
.css {
	-webkit-transform-style: preserve-3d;
	-webkit-backface-visibility: hidden;
	-webkit-perspective: 1000;
}
```


##### 开启硬件加速
``` CSS
//目前，像Chrome/Filefox/Safari/IE9+以及最新版本Opera都支持硬件加速，当检测到某个DOM元素应用了某些CSS规则时就会自动开启，从而解决页面闪白，保证动画流畅。

方法1：
.css {
	-webkit-transform: translate3d(0,0,0);
	-moz-transform: translate3d(0,0,0);
	-ms-transform: translate3d(0,0,0);
	transform: translate3d(0,0,0);

    position: relative;
    z-index: 1;  // 可以设大点，尽量设得比兄弟元素的z-index值高
}
// 注意：使用3D硬件加速提升动画性能时，最好给元素增加一个z-index属性，人为干扰复合层的排序，可以有效减少chrome创建不必要的复合层，提升渲染性能，移动端优化效果尤为明显。详细的说明：<https://div.io/topic/1348?utm_source=tuicool>

方法2：
.css{
    -webkit-transform: translateZ(0);
   -moz-transform: translateZ(0);
   -ms-transform: translateZ(0);
   -o-transform: translateZ(0);
   transform: translateZ(0);

    // 以上样式触发硬件加速后会出现 “页面可能会出现闪烁的效果“ 的问题,需要补充以下样式
   -webkit-backface-visibility: hidden;
   -moz-backface-visibility: hidden;
   -ms-backface-visibility: hidden;
   backface-visibility: hidden;
   -webkit-perspective: 1000;
   -moz-perspective: 1000;
   -ms-perspective: 1000;
   perspective: 1000;
}

```

##### 解决ios端overflow：scroll时滑动卡顿问题
```
.css {
    -webkit-overflow-scrolling:touch;
}
```

- 渲染优化
```
//1.禁止使用iframe（阻塞父文档onload事件）
//2.禁止使用gif图片实现loading效果（降低CPU消耗，提升渲染性能）
//使用CSS3代码代替JS动画；
//开启GPU加速；
//使用base64位编码图片(不小图而言，大图不建议使用)
	// 对于一些小图标，可以使用base64位编码，以减少网络请求。但不建议大图使用，比较耗费CPU。小图标优势在于：
	//1.减少HTTP请求；
	//2.避免文件跨域；
	//3.修改及时生效；
```

##### IOS 事件委托的坑

当使用委托给一个元素添加click事件时，如果事件是委托到 document 或 body 上，并且委托的元素是默认不可点击的（如 div, span 等），此时 click 事件会失效。
解决办法：
```
​1. 将 click 事件直接绑定到目标​元素（​​即 .target）上
2. 将目标​元素换成 <a> 或者 button 等可点击的​元素
​3. 将 click 事件委托到​​​​​非 document 或 body 的​​父级元素上（推荐）
​4. 给​目标元素加一条样式规则 cursor: pointer;（推荐）
```

##### IOS `<input class='xx-xx' readonly type="text/>`标签 readonly后仍然能出现焦点效果（光标在input中）
解决办法是给input设置不能选中的样式
```
.xx-xx {-webkit-user-select:none; user-select: none; }
```


##### 最小字体的总结【参考http://www.cnblogs.com/he-lian/p/4512276.html】

```
 1.     iphone6-plus、iphone5：     微信、QQ直接打开、safari中字体可以从最1px字体开始；
 2.     小米2s：微信、QQ浏览器最小显示字体8px；自带浏览器最小字体从1px开始；
 3.     小米4s：firefox可以从最小字体1px开始；chrome中最小显示字体为12px；
 4.     pc：360安全浏览器7：最小最示12px；firefox与ie10最小显示字体为1px。
 5.     未标明的为未测机型；
 
 结论1：
    - 移动端最小字体为12px（仅chrome有此限制），建议最小使用12px；
    - 如果设计稿中有小于12px的字体，按实际字号写css样式；
 
 结论2：
    - iphone类移动设备不受最小字号限制；
    - 其它设备可能会受8px限制；
    - chrome中限制最小12px。
```

##### Chrome谷歌浏览器下不支持css字体小于12px的解决办法

chrome下css设置字体大小为12px及以下时，显示都是一样大小，都是默认12px；
对于旧版的chrome添加私有属性webkit-text-size-adjust:none;新版无效，需要通过其他方式来处理。

```
<div class="smallFont">
     这里是12号字体<span>CHROME下小字体测试8px</span>
</div>

.smallFont{
    font-size: 12px;
    width: 300px;
    padding: 25px;
    background-color: #333;
    color: #fff;
    margin-bottom: 20px;
}
.smallFont span{
    font-size:8px;/*其他浏览器直接设置字体即可*/
    -webkit-text-size-adjust:none;/*老版本chrome支持*/
    -webkit-transform:scale(0.66); /*chrome下通过缩放解决小字体显示问题*/
    transform-origin:0;/*改变基点*/
    display: inline-block;
}
```

##### 移动端滚动到底部时加载代码。[demo](demo/pulldownLoad.html)
```
var $container = document.querySelector('.wrapper');
// 可见高度
var clientHeight = $container.clientHeight;
$container.addEventListener('scroll',function(e){
    // 整个内容高度
    contentH = $container.scrollHeight;
    //滚动高度
    scrollTop =  $container.scrollTop;
    // 滑动到底部了
    if(contentH - clientHeight - scrollTop < 10) {
        // 滚动到底部时的回调
         doSomething();
    }
});
```

##### 图片的懒加载，img标签进入时才加载图片[demo](demo/lazyload2.html)
```
<body>
    <h3>测试图片懒加载功能</h3>
    <ul class="wrapper">
        <li class="item"><img src="#" link="http://difang.kaiwind.com/zhejiang/jctp/201407/18/W020140718488038543716.jpg" alt="加载中"></li>
        <li class="item"><img src="#" link="http://difang.kaiwind.com/zhejiang/jctp/201407/18/W020140718488038574300.jpg" alt="加载中"></li>
    </ul>
</body>
<script type="text/javascript">
    // 用于滚动的容器
    var $container = document.querySelector('.wrapper');
    // 容器的高度
    var clientHeight = $container.clientHeight;
    // 容器的下边框的offsetheight，当容器的下边框不在可视区域之内是，屏幕高度作为下边框
    var bottomOffset = Math.min($container.getBoundingClientRect().bottom,window.innerHeight);
    // 需要用于更新的元素
    var items = [...document.querySelectorAll('.item')];

    // 更新页面上的元素
    function update(){
        items.forEach(item=>{
            // 元素进入视野，且没有进行处理过
            if(item.getBoundingClientRect().top <= bottomOffset &&
                !item.classList.contains('loaded')){
                var img = item.querySelector('img');
                // 设置图片的地址
                img.setAttribute('src',img.getAttribute('link'));
                item.classList.add('loaded');
            }
        });
    }

    // 滚动及页面加载完成也进行处理
    update();
    $container.addEventListener('scroll',()=>{
        update();
    });
</script>
```

##### 关于移动端设置字体微软雅黑的问题。

```
1. 各个手机系统有自己的默认字体，且都不支持微软雅黑
2. 如无特殊需求，手机端无需定义中文字体，使用系统默认
3. 英文字体和数字字体可使用 Helvetica ，三种系统都支持
```
因此移动端一般设置字体为：
```
/* 移动端定义字体的代码 */
body{
    font-family:Helvetica;
}
```

##### IOS的字体锯齿问题
```
IOS上，做3D变换时，经常会出现字体模糊的情况，通过-webkit-font-smoothing属性的设置可解决大部分的字体模糊情况，参考<https://segmentfault.com/q/1010000000467910>。

-webkit-font-smoothing
它有三个属性值：
    none ------ 对低像素的文本比较好
    subpixel-antialiased------默认值
    antialiased ------抗锯齿很好 

例子：
body{
    -webkit-font-smoothing: antialiased;
}

```

##### 多行文字的截断，最后一段显示....
```
.demo{
    display: -webkit-box;    //1.设置display类型为-webkit-box
    font-size: 14px;
    line-height: 18px;
    overflow: hidden;        //2.设置元素超出隐藏
    text-overflow: ellipsis; //3.设置超出样式为省略号
    -webkit-line-clamp: 2;   //4.设置2行应用省略
    -webkit-box-orient: vertical;
}
```

##### 防止微信webview 调整字体大小
ios 和 微信的调整方式不一致
```
<!--针对IOS-->
<style type="text/css">
    body {
        -webkit-text-size-adjust: 100% !important;
    }
</style>
<!--针对Android-->
<script type="text/javascript">
    (function() {
        if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
            handleFontSize();
        } else {
            if (document.addEventListener) {
                document.addEventListener("WeixinJSBridgeReady", handleFontSize, false);
            } else if (document.attachEvent) {
                document.attachEvent("WeixinJSBridgeReady", handleFontSize);
                document.attachEvent("onWeixinJSBridgeReady", handleFontSize);
            }
        }

        function handleFontSize() {
            // 设置网页字体为默认大小
            WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
            // 重写设置网页字体大小的事件
            WeixinJSBridge.on('menu:setfont', function() {
                WeixinJSBridge.invoke('setFontSizeCallback', { 'fontSize' : 0 });
            });
        }
    })();
</script>
```
>详细文章见这里：<https://github.com/AlanZhang001/webtouch/blob/master/%E7%A7%BB%E5%8A%A8%E7%AB%AF%E5%AD%97%E4%BD%93%E6%94%BE%E5%A4%A7%E9%97%AE%E9%A2%98%E7%9A%84%E7%A0%94%E7%A9%B6.md>

##### window.open
window.open 不能在ajax的异步回调中使用，且ios中(ios>9.0),touchstart,touchend 事件是不能触发window.open 的

##### toFixed问题
js中toFixed在的作用是用定点表示法来格式化一个数，即小数点保留多少位，但是该方法在保留小数时存在四舍五入的问题。
如：
```
1.35.toFixed(1) // 1.4 正确
1.335.toFixed(2) // 1.33  错误
1.3335.toFixed(3) // 1.333 错误
1.33335.toFixed(4) // 1.3334 正确
1.333335.toFixed(5)  // 1.33333 错误
1.3333335.toFixed(6) // 1.333333 错误
```

重写toFixed的实现即可：demo见[toFixed.html](./demo/toFixed.html)，或者直接安装`npm install num-tofixed`

```
/**
 * 使用定点表示法来格式化一个数
 * @param  {String|Number}  num     [必选，数字或者表示数字的字符串,范围为[0,20],超过范围则报错]
 * @param  {Number}  digits  [必选，小数点后数字的个数]
 * @param  {Boolean} isRound [可选，格式化时是否四舍五入，默认为true，即进行四舍五入,为false时直接截取，不满足位数的往后补0]
 * @return {String}          [结果]
 */
function toFixed(num, digits, isRound) {
    num += '';
    isRound = Boolean(isRound);
    // 是否为正数
    let isPositive = !/^-/gi.test(num);
    // 去掉正负号，统一按照正数来处理，最后再加上符号
    num = num.replace(/^(?:-|\+)/gi,'');
    // 小数点过大
    if (digits > 20 || digits < 0) {
        throw new RangeError('toFixed() digits argument must be between 0 and 20');
    }
    // 如果是简写如.11则整数位补0，变成0.11
    if (/^\./gi.test(num)) {
        num = '0' + num;
    }
    // 非数字
    if (!/^\d+\.?\d*$/gi.test(num)) {
        throw new Error('toFixed() num argument must be a valid num');
    }
    let numParts = num.split('.');
    let result = '';
    let floatPart = '';
    // 在str后面加n个0
    let _paddingZero = function(str, n) {
        for (var i = 0; i < n; i++) {
            str += '0';
        }
        return str;
    };
    // 在str后面加0，直至str的长度达到n
    // 如果超过了n，则直接截取前n个字符串
    let _paddingZeroTo = function(str, n) {
        if (str.length >= n) {
            return str.substr(0, n);
        } else {
            return _paddingZero(str, n - str.length);
        }
    };
    // 直接就是整数
    if (numParts.length < 2) {
        result = numParts[0] + '.' + _paddingZero('',digits);
    // 为浮点数
    } else {
        // 如果为截取
        if (isRound === false) {
            result = numParts[0] + '.' + _paddingZeroTo(numParts[1],digits);
        // 如果为四舍五入
        } else {
            // 放大10的N次方倍
            let enlarge = numParts[0] + _paddingZeroTo(numParts[1],digits) + '.' + numParts[1].substr(digits);
            // 取整
            enlarge = Math.round(enlarge) + '';
            // 缩小10的N次方
            result = enlarge.substr(0,enlarge.length - digits) + '.' + enlarge.substr(enlarge.length - digits);
        }
    }
    // 如果最后一位为.,则去除
    result = result.replace(/\.$/gi,'').replace(/^\./gi,'0.');
    // 加上符号位
    result = isPositive ? result : '-' + result;
    return result;
}
```

##### 计算字符串所占的内存字节数,而不是字符串长度
```
    /**
     * 计算字符串所占的内存字节数，默认使用UTF-8的编码方式计算，也可制定为UTF-16
     * UTF-8 是一种可变长度的 Unicode 编码格式，使用一至四个字节为每个字符编码
     *
     * 000000 - 00007F(128个代码)      0zzzzzzz(00-7F)                             一个字节
     * 000080 - 0007FF(1920个代码)     110yyyyy(C0-DF) 10zzzzzz(80-BF)             两个字节
     * 000800 - 00D7FF
       00E000 - 00FFFF(61440个代码)    1110xxxx(E0-EF) 10yyyyyy 10zzzzzz           三个字节
     * 010000 - 10FFFF(1048576个代码)  11110www(F0-F7) 10xxxxxx 10yyyyyy 10zzzzzz  四个字节
     *
     * 注: Unicode在范围 D800-DFFF 中不存在任何字符
     *
     * UTF-16 大部分使用两个字节编码，编码超出 65535 的使用四个字节
     * 000000 - 00FFFF  两个字节
     * 010000 - 10FFFF  四个字节
     *
     * @param  {String} str
     * @param  {String} charset utf-8, utf-16
     * @return {Number}
     */
    byteLength: function(charset) {
        var str = this.valueOf();
        var total = 0,
            charCode,
            i,
            len;

        charset = charset ? charset.toLowerCase() : '';

        if (charset === 'utf-16' || charset === 'utf16') {
            for (i = 0, len = str.length; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode <= 0xffff) {
                    total += 2;
                } else {
                    total += 4;
                }
            }
        } else {
            for (i = 0, len = str.length; i < len; i++) {
                charCode = str.charCodeAt(i);
                if (charCode <= 0x007f) {
                    total += 1;
                } else if (charCode <= 0x07ff) {
                    total += 2;
                } else if (charCode <= 0xffff) {
                    total += 3;
                } else {
                    total += 4;
                }
            }
        }

        return total;
    }
```

##### Content-Security-Policy
https站点中，如果应用到了第三发的组件（如腾讯视频），有时候会存在https站点中引用http资源的情况，会出现警告甚至报错
比如 ![](https://developers.google.com/web/fundamentals/security/prevent-mixed-content/imgs/passive-mixed-content-warnings.png?hl=zh-cn)

可以在head中增加如下标签：
```
<meta http-equiv="Content-Security-Policy" content="upgrade-insecure-requests">
```
值得注意的是，如果资源不能通过 HTTPS 获得，则升级的请求失败，并且无法加载该资源

详细查看:(防止混合内容)[https://developers.google.com/web/fundamentals/security/prevent-mixed-content/fixing-mixed-content?hl=zh-cn]

##### ios上，从A页面跳入B页面，再次返回A页面时，html不会刷新，但是JS会再次执行。
```
<!--移动端回退时，reload-->
<script type="text/javascript">
    window.addEventListener('pageshow', function(e) {
    	// 有浏览器不支持persisted属性，则通过判断回退来进行reload
        if (e.persisted || window.performance &&
            window.performance.navigation.type === 2) {
            window.location.reload();
        }
    });
</script>
```
