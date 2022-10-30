## 仿京东到家

### 项目信息

Vue3

```shell
项目运行
>npm run serve
```

插件

```shell
npm install axios --save
```

实现的功能

+ 首页开发

![](image/实现页面/首页.png)

### 遇到的问题

```shell
Uncaught SyntaxError: "undefined" is not valid JSON
    at JSON.parse (<anonymous>)
```

解决办法：使用JSON.parse时先判断解析的对象是否存在

```javascript
const getLocaCartList = () => {
  if (localStorage.cartList == null ) {
    return null
  }
  return JSON.parse(localStorage.cartList)
}
```



```shell
Cart.vue?b406:93 Uncaught (in promise) TypeError: Cannot read properties of null (reading '1')
    at ReactiveEffect.eval [as fn] (Cart.vue?b406:93:1)
```

解决办法：cartList为null时要返回{}而不是null

```javascript
const getLocaCartList = () => {
  if (localStorage.cartList == null ) {
    return {}
  }
  return JSON.parse(localStorage.cartList)
}
```



真机上加号图标显示与浏览器不同

解决办法：换用iconfont，调整CSS样式



移动端适配问题

解决办法：将px换成rem，根据屏幕宽度设置html的fontsize







