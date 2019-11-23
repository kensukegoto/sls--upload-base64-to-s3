# データの形式

## Content-Type

application/x-www-form-urlencoded

event.bodyで値を受け取れるが`body: 'name=ibaraki&img=ibaraki.jpg'`となるのでlambdaの中でパースが必要？

## 各データ

- name
  - String
- email
  - String
- img
  - Base64

# S3にファイルをアップロードすると`sls remove`で削除出来ない！

## DeletionPolicy で Retain を設定して, スタックの削除とは切り離す
## カスタムリソースを利用して, Lambda ファンクションでオブジェクトを削除してからバケットを削除する

### カスタムリソースとはなんぞ？

# 画像をあげるには？

- base64で送る
  - [AWS API Gateway + Lambda + S3 でバイナリデータを保存する](https://qiita.com/acron/items/4c035bef8295a7035ea1)
- API Gatewayにjpegなどが送られたらbase64に変換されるようにAPI Gatewayの設定をする
  - pluginが必要になる

[【AWS勉強メモ】Serverless Frameworkでバイナリデータを処理するアーキテクチャを構築](https://qiita.com/akatsukaha/items/0a1e01ac62513c07e003)

# 確認したい

- application/x-www-form-urlencodedでpostした場合に、各データをkey,valueで取得出来るように出来ないか？

