<h1 align="center">
  maimai.github.io
</h1>

<div align="center">
  Yuto Imai の履歴書サイト（Resume）
  <br />
  <br />
  <a href="https://yutojubako.github.io/maimai.github.io/"><strong>Webサイトを見る »</strong></a>
</div>

<div align="center">
<br />

[![Deploy to GitHub Pages](https://github.com/yutojubako/maimai.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/yutojubako/maimai.github.io/actions/workflows/deploy.yml)
[![Project license](https://img.shields.io/github/license/yutojubako/maimai.github.io.svg?style=flat-square)](LICENSE)

</div>

---

## About

Yuto Imai（今井悠人）の履歴書サイトです。SB Intuitions で日本語特化の視覚言語モデルの開発・評価に携わるリサーチエンジニアとしての経歴を紹介しています。

**公開URL**: <https://yutojubako.github.io/maimai.github.io/>

コンテンツのソースは [`resume.md`](resume.md) にも同等の内容があります。個人の技術ブログは [yutojubako/blog](https://github.com/yutojubako/blog) で別サイトとして公開しています。

## ローカルでの実行

```bash
git clone https://github.com/yutojubako/maimai.github.io.git
cd maimai.github.io
npm install
npm run dev
```

ブラウザで <http://localhost:4321/maimai.github.io/> にアクセス

## 編集のポイント

- 履歴書本体: `src/pages/index.astro`
- サイト設定（タイトル・ナビゲーション）: `src/site.config.ts`
- ファビコン: `public/favicon.svg`

## デプロイ

`master` への push で GitHub Actions（[withastro/action](https://docs.astro.build/ja/recipes/deploy-github-pages/)）が自動ビルドし、GitHub Pages にデプロイされます。

## 技術スタック

- [Astro](https://astro.build/) - 静的サイトジェネレーター
- [astro-theme-resume](https://github.com/srleom/astro-theme-resume) ベースのカスタムテーマ（Ivory & Ink）
- [Tailwind CSS](https://tailwindcss.com/) - スタイリング
- [GitHub Pages](https://pages.github.com/) - ホスティング

## ライセンス

MIT License - 詳細は [LICENSE](LICENSE) をご覧ください。
