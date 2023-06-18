package.json の書き方についてのメモ

## 読み込み対象ファイル

"main": 実際に各プロジェクトから読み込まれるファイル?。ここを cjs 形式にしてしまうと import で読み込めなかったりしそう？
"module": ems 形式で記述したファイルで、import で読み込むとこっちになるという説明がよくされていたが、あくまで vite などの dev モードのときの話っぽい？
→ npm link で読み込んでいる時、next の run dev でも "module" 側を読み込んだ。

※ "module" にも ビルドしたファイルを読み込むようにしないと、node_modules 内のソースをパースできないことでエラーになる。
npm link かつ next の pages の場合、Cannot read properties of null (reading 'useContext') みたいなエラーが出てしまう...

export で指定すると、import,require で確実に分けれるのかも？

## 依存関係

"peerDependencies": 依存するがビルド後ファイルに内包しないもの。react とかを指定する。たまに消えるっぽい？ので定期的に確認して記述漏れしないように。

## 開発時のキャッシュ削除

next.js
rm -rf .next/cache

## 使用時の注意

next.js 13 以降の app ルーター使用時、Reat Hook を使ったコンポーネントを使う際に "use client"; の記述が必要。

※ "@loos/lism-test/components" から直接インポートしてもらうようにすると Lism 側で書いておけば必要なくなる。

ただし、/components から直接ソース読み込む場合、`next.config.js` で下記の設定が必要

```
transpilePackages: ['@loos/lism-test'],
```

## 開発時の注意点

コンポーネントの先頭で react 読み込みは必要。
import React from 'react';
これがないと React が undefined になるっぽい

"use client" を書いていると、ビルド時にエラーがでるが、無視しても問題なさそう。

※ next.js 以外で使われる時に問題が発生するかもしれないから、lism-next とかで next 用 のものだけに使う？

### ローカル開発時

next.js の pages を使用していて、かつ npm link で当パッケージを使用する場合、
`npm link ../your-product/node_modules/react`
する必要あり。(`Module not found: Can't resolve 'react'` エラーになる。)

```
npm link ../demo-project/my-app/node_modules/react

npm link ../../Test/next_js/test/node_modules/react
```

devDependencies に react を含めてしまうと、peer に書いていても本番パッケージでバグってしまう。
( `"TypeError: Cannot read properties of null (reading 'useContext')"` みたいになる。）

しかし、devDependencies に react がないと npm link でのローカル開発時に 「Module not found: Can't resolve 'react'」 になってしまう。
see: https://github.com/nextauthjs/next-auth/issues/181

## publish

npm publish --access=public

# Prettier と Eslint についてのメモ

## 目標：

-   html、js のコード保存時、自動で prettier が動いて整形されるようにする。
-   eslint にエラー表示をしてもらう

### 必要だった npm package

-   "prettier",
-   "eslint",
-   "eslint-config-prettier",
-   "eslint-config-standard",

### 必要な VSCode の拡張機能

-   ESLint,
-   Prettier (projcet でのみ有効化中)

### vs code に必要な設定

(html, js に対する vscode 側のデフォルトフォーマット機能をオフにし、Eslint プラグイン側の format もオフにすることで、保存時に prettier が動くようになる。)

```
{
	"html.format.enable": false,
	"javascript.format.enable": false,
	"eslint.format.enable": false
}
```
