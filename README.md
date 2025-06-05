# maimai.github.io

[![Deploy Jekyll site to Pages](https://github.com/yutojubako/maimai.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/yutojubako/maimai.github.io/actions/workflows/gh-pages.yml)

個人ブログサイトのリポジトリです。

URL: <https://yutojubako.github.io/maimai.github.io/>

## 概要

このブログは Jekyll と al-folio テーマで構築されています。機械学習やロボティクスに関する記事を主に公開します。

## セットアップ

### 前提条件

- Ruby 3.1 以上
- Bundler
- Git

### 手順

```bash
bundle install
bundle exec jekyll serve
```

ブラウザで <http://localhost:4000/maimai.github.io/> を開いて確認できます。

## デプロイ

GitHub Pages のワークフローにより、`master` ブランチへの push で自動的にビルド・公開されます。

## ディレクトリ構成

```
maimai.github.io/
├── _posts/      # ブログ記事
├── static/      # 画像など静的ファイル
├── about.md     # プロフィールページ
├── Gemfile      # Jekyll 用依存関係
└── _config.yml  # サイト設定
```

## ライセンス

コンテンツとコードのライセンスについては、各ファイルを参照してください。
