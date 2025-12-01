# コントリビューション

このリポジトリへのコントリビューションを検討いただきありがとうございます！変更を加える前に、Issue やメールなどでリポジトリのオーナーと議論することをお勧めします。

[行動規範](CODE_OF_CONDUCT.md)がありますので、プロジェクトとのすべてのやり取りにおいて遵守してください。

## 開発環境のセットアップ

ローカル開発環境をセットアップするには、以下の手順に従ってください：

1. リポジトリをクローン

   ```sh
   git clone https://github.com/yutojubako/maimai.github.io
   cd maimai.github.io
   ```

2. Ruby の依存関係をインストール

   ```sh
   bundle install
   ```

3. ローカルサーバーを起動

   ```sh
   bundle exec jekyll serve
   ```

4. ブラウザで <http://localhost:4000/maimai.github.io/> にアクセス

## Issue と機能リクエスト

ソースコードのバグ、ドキュメントの誤り、または新機能のリクエストを見つけましたか？[GitHub で Issue を作成](https://github.com/yutojubako/maimai.github.io/issues)して報告できます。Issue を作成する前に、既存の Issue を検索して重複を避けてください。

バグレポートを作成する際は、以下の点に注意してください：

- **再現可能** - 問題を再現する手順を含める
- **具体的** - できるだけ詳細に：どのバージョン、どの環境など
- **一意** - 既存の開かれている Issue と重複しない
- **単一のバグにスコープを絞る** - 1 つのレポートに 1 つのバグ

**さらに良い方法：修正や新機能を含むプルリクエストを送信してください！**

## プルリクエストの送信方法

1. あなたの提出に関連する[プルリクエスト](https://github.com/yutojubako/maimai.github.io/pulls)を検索する。作業の重複を避けましょう。

2. プロジェクトをフォーク

3. 機能ブランチを作成（`git checkout -b feat/amazing_feature`）

4. 変更をコミット（`git commit -m 'feat: add amazing_feature'`）  
   コミットメッセージには [Conventional Commits](https://www.conventionalcommits.org) の仕様に従うことを推奨します。

5. ブランチにプッシュ（`git push origin feat/amazing_feature`）

6. [プルリクエストを開く](https://github.com/yutojubako/maimai.github.io/compare?expand=1)

## コーディング規約

- マークダウンファイルは適切にフォーマットする
- YAML フロントマターの構文を正しく使用する
- 日本語と英語の両方で明確な文章を書く
- 画像やリソースは適切なディレクトリに配置する

## コミュニティ

質問や議論がある場合は、Issue を通じてコミュニティと交流してください。建設的で敬意あるコミュニケーションを心がけましょう。
