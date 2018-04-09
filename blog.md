
## 準備

### フォルダ準備

```
mkdir words_totaling
cd words_totaling
npm init -y
```

### .gitignoreを準備

```
touch .gitignore
```

```.gitignore
.DS_Store
node_modules/
dist/
npm-debug.log
yarn-error.log
.env
.cache
.vscode
```

### モジュールインストール

```
npm i --save-dev babel-polyfill babel-polyfill babel-preset-env parcel-bundler parcel-plugin-vue vue vue-router
```

### index.htmlの作成

```
touch index.html
```

```index.html
<html>
    <head>
        <meta charset="utf-8">
        <title>Vue.jsで何か作っていく by n0bisuke</title>
    </head>

    <body>
        <app></app>
        <script src="./src/index.js"></script>
    </body>
    
</html>
```

### .babelrc

```
touch .babelrc
```

```.babelrcs
{
  "presets": [
    ["env", {
      "targets": {
        "browsers": ["last 2 versions", "safari >= 7"]
      }
    }]
  ]
}
```

### srcフォルダとjsファイル

```
mkdir src
touch src/app.vue
touch src/index.js
```

```app.vue
<template>
    <div id="app">
        testtest
    </div>
</template>

<script>
export default {
    name: 'app',
    data() {
        return {};
    },
    mounted() {},
    computed: {},
    methods: {}
}
</script>

<style>
body {
    margin: 0;
    background: #FBEFF2; /* fallback for old browsers */
    font-family: "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

#app{
    text-align: center;
}
</style>
```

```index.js
import Vue from 'vue'
import App from './app.vue'
import 'babel-polyfill'

export function createApp() {    
    const app = new Vue({
        el: 'app',
        render: h => h(App),
        components: {app}
    });
    return {app};
}

window.onload = () => createApp();
```

### 起動

* package.jsonの編集

```
  "scripts": {
    "dev": "parcel index.html",
    "build": "parcel build index.html --public-url /",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
```

```
npm run dev

> words_totaling@1.0.0 dev /Users/n0bisuke/dotstudio/6_project/words_totaling
> parcel index.html

Server running at http://localhost:1234
✨  Built in 55ms.
```

http://localhost:1234にブラウザでアクセス 

![](https://i.gyazo.com/42e05abfd0ae5a25d948be2b66854375.png)

### 現状のフォルダの中身

```
$ ls
dist              node_modules      package.json      src
index.html        package-lock.json readme.md
```

## ルーティング追加

```
touch src/router.js
```

```

```