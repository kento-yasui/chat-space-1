# ChatSpace DB設計
## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, add_index :true, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|
###Association
- has_many :rooms
- has_many :messages
- has_many :rooms, through: rooms_users

## roomsテーブル
|column|type|options|
|------|----|-------|
|roomname|string|null: false, unique: true|
###Association
- has_many :users
- has_many :messages
- has_many :users,through: rooms_users

## messagesテーブル
|column|type|options|
|------|----|-------|
|body|string||
|image|string||
|user_id|references|null: false, foreign_key :true|
|room_id|references|null: false, foreign_key :true|
###Association
- belongs_to :user
- belongs_to :room

## rooms_usersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key :true|
|room_id|integer|null: false, foreign_key :true|
###Association
- belongs_to :user
- belongs_to :room

