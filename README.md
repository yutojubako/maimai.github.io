<h1 align="center">
  maimai.github.io
</h1>

<div align="center">
  研究者のための個人Webサイト - 機械学習とロボティクスの研究記録
  <br />
  <br />
  <a href="https://yutojubako.github.io/maimai.github.io/"><strong>Webサイトを見る »</strong></a>
  <br />
  <br />
  <a href="https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=bug&template=bug_report.md&title=bug%3A+">バグ報告</a>
  ·
  <a href="https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=feat%3A+">機能リクエスト</a>
  ·
  <a href="https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=question&template=support_question.md&title=support%3A+">質問</a>
</div>

<div align="center">
<br />

[![Deploy Jekyll site to Pages](https://github.com/yutojubako/maimai.github.io/actions/workflows/gh-pages.yml/badge.svg)](https://github.com/yutojubako/maimai.github.io/actions/workflows/gh-pages.yml)
[![Project license](https://img.shields.io/github/license/yutojubako/maimai.github.io.svg?style=flat-square)](LICENSE)
[![Pull Requests welcome](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=flat-square)](https://github.com/yutojubako/maimai.github.io/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22)
[![code with love by yutojubako](https://img.shields.io/badge/%3C%2F%3E%20with%20%E2%99%A5%20by-yutojubako-ff1414.svg?style=flat-square)](https://github.com/yutojubako)

</div>

<details open="open">
<summary>目次</summary>

- [概要](#概要)
  - [使用技術](#使用技術)
- [はじめに](#はじめに)
  - [前提条件](#前提条件)
  - [インストール](#インストール)
- [使い方](#使い方)
- [ロードマップ](#ロードマップ)
- [コントリビューション](#コントリビューション)
- [サポート](#サポート)
- [セキュリティ](#セキュリティ)
- [ライセンス](#ライセンス)
- [謝辞](#謝辞)

</details>

---

## 概要

Yuto Imaiの研究活動やプロジェクトを紹介する個人Webサイトのリポジトリです。機械学習、コンピュータビジョン、ロボティクスに関する研究成果や技術的な知見を発信しています。

**主な機能：**

- Jekyllベースの静的サイトジェネレーター
- GitHub Pagesによる自動デプロイメント
- レスポンシブデザイン
- ブログ記事、研究プロジェクト、履歴書の公開

**公開URL**: <https://yutojubako.github.io/maimai.github.io/>

> **Note**: このリポジトリは [GitHub Copilot](https://github.com/features/copilot) を活用して開発されています。

### 使用技術

- [Jekyll](https://jekyllrb.com/) - 静的サイトジェネレーター
- [Minima](https://github.com/jekyll/minima) - Jekyll テーマ
- [GitHub Pages](https://pages.github.com/) - ホスティング
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## はじめに

### 前提条件

ローカル環境でサイトをビルド・プレビューする場合、以下が必要です：

- Ruby 3.1 以上
- Bundler
- Git

### ローカルでの実行方法

1. リポジトリをクローン

   ```bash
   git clone https://github.com/yutojubako/maimai.github.io.git
   cd maimai.github.io
   ```

2. 依存パッケージをインストール

   ```bash
   bundle install
   ```

3. ローカルサーバーを起動

   ```bash
   bundle exec jekyll serve
   ```

4. ブラウザで確認

   ブラウザで <http://localhost:4000/maimai.github.io/> にアクセスします。

## 使い方

### 新しい記事の投稿

`_posts/` ディレクトリに `YYYY-MM-DD-title.md` の形式でMarkdownファイルを作成します。

```markdown
---
layout: post
title: "記事タイトル"
date: 2024-01-01
categories: [machine-learning, robotics]
---

記事の内容を記述...
```

### プロジェクトの追加

`projects.md` ファイルを編集してプロジェクト情報を追加できます。

### サイト設定のカスタマイズ

`_config.yml` ファイルでサイトの基本設定（タイトル、説明、SNSリンクなど）を変更できます。

## ロードマップ

今後の予定：

- [ ] 記事検索機能の追加
- [ ] タグ別記事一覧ページの実装
- [ ] RSSフィードの最適化
- [ ] ダークモード対応の改善
- [ ] 多言語対応（日本語・英語）

進行中の機能や提案については [Issues](https://github.com/yutojubako/maimai.github.io/issues) をご覧ください。

## コントリビューション

プロジェクトへの貢献を歓迎します。バグ報告、機能提案、プルリクエストなど、どのような形でも大歓迎です。

詳細については [CONTRIBUTING.md](docs/CONTRIBUTING.md) をご確認ください。

## サポート

ご質問やサポートが必要な場合は、以下の方法でお問い合わせください：

- [Issueを作成](https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=question&template=support_question.md&title=support%3A+)
- Email: ytim8812@keio.jp

## セキュリティ

セキュリティ上の問題を発見された場合は、[SECURITY.md](docs/SECURITY.md) の手順に従って報告してください。

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 謝辞

このプロジェクトは以下のツールやテンプレートを活用しています：

- [Jekyll](https://jekyllrb.com/) - 静的サイトジェネレーター
- [Minima Theme](https://github.com/jekyll/minima) - シンプルで美しいJekyllテーマ
- [GitHub Pages](https://pages.github.com/) - 無料ホスティングサービス
- [amazing-github-template](https://github.com/dec0dOS/amazing-github-template) - プロジェクト構成の参考
- [GitHub Copilot](https://github.com/features/copilot) - AI支援による開発ツール
