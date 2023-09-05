# how to start

```
pnpm create astro@latest --template minimal
```

# React を使えるようにする

```
pnpm astro add react
```

# sass サポート

```
pnpm add -D sass
```

# prettier サポート

see: https://github.com/withastro/prettier-plugin-astro

```
pnpm add --D prettier prettier-plugin-astro
```

※pnpm を使っていると認識されないのでコマンドで実行

```
prettier --write ./src/**/*.astro --plugin=prettier-plugin-astro
```

# stylelint

`{...}`の中で `//` 使うには`stylelint-config-recommended-scss`が必要だった。
(`stylelint-config-standard-scss`だとルールが厳格すぎて、キャメルケースなどでエラーになる)

```
pnpm add -D stylelint-config-recommended-scss
```

```:.stylelintrc
{
	"extends": "stylelint-config-recommended-scss"
}
```
