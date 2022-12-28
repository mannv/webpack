## demo1
```
npx webpack
same ./node_modules/.bin/webpack
```

theo tài liệu thì `npx` command có sẵn trong node 8.x / npm 5.2 hoặc lớn hơn 

khi đó webpack sẽ dóng gói thư viện `lodash` và file `/src/index.js` thành 1 file main.js


## demo1_webpack
sử dụng package `html-webpack-plugin` để tự động sinh ra file index.html trong thưc mục dist
```
npm i html-webpack-plugin --save-dev
```

để clean thư mục `dist` mỗi khi build ra cần thêm thuộc tính **clean** (default = false)
```js
output: {
    ...,
    clean: true
}
```
