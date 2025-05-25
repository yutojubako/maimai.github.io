---
title: "PytorchのMultiHeadAttentionの次元に注意"
date: 2024-06-06T11:02:55+09:00
tags: [pytorch, attention, ML, leakage]
draft: false
---

<!--more-->

# TL:DR

デフォルトで用意されているパラメータ`batch_first`を適切に設定しないとleakageしまくるという話

## 背景

- ランキングモデルにselfattentionを組み込もうとした時に，急にMRR=83%とか出てくる
- 評価時の関数に問題があるかどうか確認したが，自分では問題を発見できなかった
- attentionを組み込んだ際のみにこの現象が確認されたので，attention部分の自分の実装に問題がある

## 問題点

pytorchのデフォルトの`MultiheadAttention`では，入力として`[L, N, D]`形式のテンソルが想定されている

引数`batch_first`をつけないと，系列長部分をbatchとして解釈してしまうため，バッチ内のleakageが発生する．(内部計算で系列長方向に参照しまくるため，バッチ内の他データを参照してしまう)

### 参考文献

[公式リファレンス](https://pytorch.org/docs/stable/generated/torch.nn.MultiheadAttention.html)
