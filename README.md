# maimai.github.io

個人ブログサイト「純米吟醸と和解せよ」のリポジトリです。

URL: https://yutojubako.github.io/maimai.github.io/

## 概要

このブログは、機械学習、コンピュータビジョン、ロボティクスなどの技術的なトピックに関する記事を公開するためのものです。Hugo静的サイトジェネレータを使用して構築されており、tailwindテーマを採用しています。

## セットアップ

### 前提条件

- Git
- Hugo（最新版推奨）

### 手順

1. 最新版Hugoを[公式リリースページ](https://github.com/gohugoio/hugo/releases)からインストール

2. 本リポジトリをクローン
   ```shell
   git clone git@github.com:yutojubako/maimai.github.io.git
   cd maimai.github.io
   ```

3. テーマのサブモジュールを初期化
   ```shell
   git submodule update --init --recursive
   ```

4. ローカルサーバーを起動
   ```shell
   # 通常モード（開発環境）
   hugo server --environment development
   
   # ドラフトを含める場合（開発環境）
   hugo server -D --environment development
   ```

5. ブラウザで `http://localhost:1313/` にアクセスして確認

## サイト構造

```
maimai.github.io/
├── archetypes/       # 新規コンテンツのテンプレート
├── config/           # 設定ファイル
├── content/          # コンテンツファイル
│   ├── about/        # 自己紹介ページ
│   └── posts/        # ブログ記事
├── layouts/          # レイアウトのカスタマイズ
├── public/           # ビルド後の静的ファイル
├── resources/        # キャッシュされたリソース
├── static/           # 静的ファイル（画像など）
└── themes/           # テーマファイル
```

## 新規投稿の作成

### 新しい記事の作成

```shell
hugo new posts/記事名.md
```

### フロントマター

各Markdownファイルの先頭に以下のようなフロントマターを記述します：

```yaml
---
title: "記事タイトル"
date: YYYY-MM-DDThh:mm:ss+09:00
tags: [tag1, tag2, tag3]
draft: false  # true=下書き、false=公開
---
```

### タグの追加

タグは配列形式で追加します：

```yaml
tags: [tag1, tag2, tag3]
```

### 記事の区切り

記事の概要と本文を区切るには、以下のコメントを挿入します：

```markdown
<!--more-->
```

## ビルドとデプロイ

### ローカルでのビルド

```shell
# 通常ビルド（本番環境用）
hugo --environment production

# ドラフトを含める場合（本番環境用）
hugo -D --environment production
```

ビルドされたファイルは `public/` ディレクトリに出力されます。

### GitHub Pagesへのデプロイ

このリポジトリはGitHub Pagesを使用して公開されています。デプロイ前に必ず本番環境用の設定でビルドしてください：

```shell
hugo --environment production
```

ビルド後、mainブランチにpushすると自動的にデプロイされます。

## カスタマイズ

### サイト設定

サイトの基本設定は `config/` ディレクトリ内の設定ファイルで行います。

#### 環境別設定

このリポジトリでは、環境別の設定ファイルを使用しています：

- `config/_default/config.toml`: 共通設定
- `config/development/config.toml`: ローカル開発用設定（baseURL = "http://localhost:1313/"）
- `config/production/config.toml`: 本番環境用設定（baseURL = "https://yutojubako.github.io/maimai.github.io/"）

環境を指定してHugoを実行するには：

```shell
# 開発環境（ローカルサーバー）
hugo server --environment development

# 本番環境用にビルド
hugo --environment production
```

環境を指定しない場合は、デフォルトで開発環境（development）が使用されます。

### テーマのカスタマイズ

テーマのカスタマイズは `layouts/` ディレクトリ内のファイルを編集することで行えます。

## ライセンス

コンテンツとコードのライセンスについては、各ファイルを参照してください。
