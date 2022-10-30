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













