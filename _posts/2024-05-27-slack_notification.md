---
layout: post
title: "Slackに通知を送らせよう"
date: 2024-05-27 17:20:02 +0900
published: true
tags: [slack, app, 開発]
---

## 背景
デモ実行している際に，nlp.stanford.eduが落ちているのかアクセスできない問題が発生

<!--more-->

https://www.isitdownrightnow.com/

https://downforeveryoneorjustme.com/

この辺りのサイトで調べても全体で落ちているようだった
現地時間を調べた感じ+8時間だったので，深夜帯はアクセス禁止されているのではないかと仮説（事実，家でbuild成功した時には日付を超えるあたりの時間帯だった記憶）

そこで，nlp.stanford.eduにアクセスできるか10minごとに検証してみようというのが本題

user idとuser tokenを引数で指定してあげる，こうすると，以下のような通知が来るはず

@yuto imai nlp.stanford.edu is back online!の画像を入れる

なお，実行させておきたいときずっと走らせなきゃなので，プロセス圧迫に注意
