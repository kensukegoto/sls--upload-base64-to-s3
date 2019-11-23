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



