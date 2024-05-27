---
title: "Slackに通知を送らせよう"
date: 2024-05-27T17:20:02+09:00
tags: [slack, app, 開発]
draft: false
---

## 背景
デモ実行している際に，nlp.stanford.eduが落ちているのかアクセスできない問題が発生

<!--more-->

https://www.isitdownrightnow.com/

https://downforeveryoneorjustme.com/

この辺りのサイトで調べても全体で落ちているようだった
現地時間を調べた感じ+8時間だったので，深夜帯はアクセス禁止されているのではないかと仮説（事実，家でbuild成功した時には日付を超えるあたりの時間帯だった記憶）

そこで，nlp.stanford.eduにアクセスできるか10minごとに検証してみようというのが本題


## 必要なもの

1. SlackのOAuth Token

2. SlackのUser id

3. python環境(pip install slack-sdk)が必要

### OAuth token
https://api.slack.com/apps

ここにアクセスし，access tokenを発行する．

create new appからFrom scratchを選択，app名と入れたいworkspaceを指定してappを作成

![yourapps.png](/images/yourapps.png)

次に，OAuth & Permissionsを選択し，User tokenスコープにchat:writeを入れて，User OAuth Tokenをメモっておく（Bot User OAuth TokenはSlackbotの作成時に必要，今回はpythonで実行するため不要）

![[OAuth&Permissions]](/images/oauth_and_permissions.png)

### User id

![memberid](/images/member_id.png)

この表示の3点メニューからメンバーIDをコピー可能，メンションなどを作成する際にもユーザ指定のために必要となる（今回は自分のdmの為，自分のIDを把握するのみでOK）

### python環境
python 3.8.10/3.10.1にて動作を確認
pyenv-virtualenv(ubuntu/wsl)
dotfilesに関する設定等はまた記事にします

## 実際のコード
```python
import argparse
import os
import time

import requests
from slack_sdk import WebClient
from slack_sdk.errors import SlackApiError


def check_connection(url):
    try:
        response = requests.get(url, timeout=10)
        if response.status_code == 200:
            return True
    except:
        pass
    return False


def send_slack_notification(message, slack_token, user_id):
    client = WebClient(token=slack_token)
    try:
        response = client.chat_postMessage(
            channel=user_id, text=f"<@{user_id}> {message}"
        )
        print(f"Slack notification sent: {response['ts']}")
    except SlackApiError as e:
        print(f"Error sending Slack notification: {e}")


def send_notification(message, slack_token, user_id, debug=False):
    if debug:
        print(f"Debug mode: <@{user_id}> {message}")
    else:
        send_slack_notification(message, slack_token, user_id)


def main(args):
    url = "https://nlp.stanford.edu/"
    while True:
        if check_connection(url):
            send_notification(
                "nlp.stanford.edu is back online!",
                args.slack_token,
                args.slack_user_id,
                args.debug,
            )
            break
        else:
            # send_notification("nlp.stanford.edu is still offline. Checking again in 10 minutes...", args.slack_token, args.slack_user_id, args.debug)
            time.sleep(600)  # Wait for 10 minutes (600 seconds)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Check connection to nlp.stanford.edu")
    parser.add_argument("--debug", action="store_true", help="Enable debug mode")
    parser.add_argument("--slack-token", required=True, help="Slack API token")
    parser.add_argument(
        "--slack-user-id", required=True, help="Slack user ID to send notifications"
    )
    args = parser.parse_args()
    main(args)
```
user idとuser tokenを引数で指定してあげる，こうすると，以下のような通知が来るはず
<@yuto imai nlp.stanford.edu is back online!の画像を入れる>

なお，実行させておきたいときずっと走らせなきゃなので，プロセス圧迫に注意
