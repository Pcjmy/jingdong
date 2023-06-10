## README

仿京东到家

### 项目信息

Vue3

```shell
项目初始化
> vue create jingdong
Router
Vuex
CSS Pre-processors
Sass/SCSS (with dart-sass)
ESLint + Standard config
项目运行
> npm run serve
```

BEM CSS 规范

- 使用双下划线连接块和元素
- 使用双破折号连接块或元素和修饰符

实现的功能

- 登录注册
- 附近店铺
- 购物车

### 遇到的问题

```shell
1.Uncaught SyntaxError: "undefined" is not valid JSON at JSON.parse (<anonymous>)
解决办法：使用JSON.parse时先判断解析的对象是否存在
const getLocaCartList = () => {
  if (localStorage.cartList == null ) {
    return null
  }
  return JSON.parse(localStorage.cartList)
}

2.Cart.vue?b406:93 Uncaught (in promise) TypeError: Cannot read properties of null (reading '1')
    at ReactiveEffect.eval [as fn] (Cart.vue?b406:93:1)
解决办法：cartList为null时要返回{}而不是null

const getLocaCartList = () => {
  if (localStorage.cartList == null ) {
    return {}
  }
  return JSON.parse(localStorage.cartList)
}

3.真机上加号图标显示与浏览器不同
解决办法：换用iconfont，调整CSS样式


4.移动端适配问题
解决办法：将px换成rem，根据屏幕宽度设置html的fontsize

5.不同浏览器显示差异
解决办法：安装normalize.css

6.浏览器的默认最小字体大小是12像素，需要将字体设为10像素
解决办法：`transform: scale()`

7.图片加载过程中页面抖动
解决办法：使用padding-bottom预留空间

8.插值表达式中的特殊字符会被转义
解决办法：使用v-html指令
```
