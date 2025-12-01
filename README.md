<h1 align="center">
  maimai.github.io
</h1>

<div align="center">
  個人ブログサイト - 機械学習とロボティクスの研究記録
  <br />
  <br />
  <a href="https://yutojubako.github.io/maimai.github.io/"><strong>サイトを見る »</strong></a>
  <br />
  <br />
  <a href="https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=bug&template=bug_report.md&title=bug%3A+">バグ報告</a>
  ·
  <a href="https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=feat%3A+">機能リクエスト</a>
  ·
  <a href="https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=question&template=support_question.md&title=support%3A+">質問する</a>
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

このリポジトリは、Yuto Imai の個人ブログサイトのソースコードです。機械学習、コンピュータビジョン、ロボティクスに関する研究内容や技術的な知見を共有することを目的としています。

主な特徴：

- Jekyll ベースの静的サイト生成
- GitHub Pages による自動デプロイ
- レスポンシブデザイン対応
- ブログ記事、プロジェクト、履歴書の公開

**公開URL**: <https://yutojubako.github.io/maimai.github.io/>

### 使用技術

- [Jekyll](https://jekyllrb.com/) - 静的サイトジェネレーター
- [Minima](https://github.com/jekyll/minima) - Jekyll テーマ
- [GitHub Pages](https://pages.github.com/) - ホスティング
- [GitHub Actions](https://github.com/features/actions) - CI/CD

## はじめに

### 前提条件

ローカル環境でサイトをビルド・プレビューするには、以下が必要です：

- Ruby 3.1 以上
- Bundler
- Git

### インストール

1. リポジトリをクローン

   ```bash
   git clone https://github.com/yutojubako/maimai.github.io.git
   cd maimai.github.io
   ```

2. 依存関係をインストール

   ```bash
   bundle install
   ```

3. ローカルサーバーを起動

   ```bash
   bundle exec jekyll serve
   ```

4. ブラウザで確認

   <http://localhost:4000/maimai.github.io/> にアクセス

## 使い方

### ブログ記事の追加

`_posts/` ディレクトリに `YYYY-MM-DD-title.md` 形式でファイルを作成します。

```markdown
---
layout: post
title: "記事タイトル"
date: 2024-01-01
categories: [machine-learning, robotics]
---

記事の内容...
```

### プロジェクトの追加

`projects.md` を編集してプロジェクト情報を追加します。

### 設定の変更

`_config.yml` でサイトの基本設定を変更できます。

## ロードマップ

今後の予定：

- [ ] 記事の検索機能追加
- [ ] タグ別記事一覧ページの実装
- [ ] RSS フィードの最適化
- [ ] ダークモード対応の改善
- [ ] 多言語対応（日本語/英語）

進行中の機能や提案については [Issues](https://github.com/yutojubako/maimai.github.io/issues) をご覧ください。

## コントリビューション

コントリビューションを歓迎します！ぜひご協力ください。

詳細は [CONTRIBUTING.md](docs/CONTRIBUTING.md) をご確認ください。

## サポート

サポートが必要な場合は、以下の方法でお問い合わせください：

- [Issue を作成](https://github.com/yutojubako/maimai.github.io/issues/new?assignees=&labels=question&template=support_question.md&title=support%3A+)
- Email: ytim8812@keio.jp

## セキュリティ

セキュリティ上の問題を発見した場合は、[SECURITY.md](docs/SECURITY.md) の手順に従って報告してください。

## ライセンス

このプロジェクトは MIT ライセンスの下でライセンスされています。詳細は [LICENSE](LICENSE) ファイルをご覧ください。

## 謝辞

- [Jekyll](https://jekyllrb.com/) - 優れた静的サイトジェネレーター
- [Minima Theme](https://github.com/jekyll/minima) - シンプルで美しいテーマ
- [GitHub Pages](https://pages.github.com/) - 無料のホスティングサービス
- [amazing-github-template](https://github.com/dec0dOS/amazing-github-template) - プロジェクト構成の参考
