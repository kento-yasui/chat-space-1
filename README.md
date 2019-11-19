# ChatSpace DB設計
## usersテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, add_index :true, unique: true|
|email|string|null: false, unique: true|
|password|string|null: false, unique: true|

###Association
- has_many :groups_users
- has_many :messages
- has_many :groups, through: groups_users

## groupsテーブル
|column|type|options|
|------|----|-------|
|name|string|null: false, unique: true|

###Association
- has_many :groups_users
- has_many :messages
- has_many :users,through: groups_users

## messagesテーブル
|column|type|options|
|------|----|-------|
|body|string||
|image|string||
|user_id|references|null: false, foreign_key :true|
|group_id|references|null: false, foreign_key :true|

###Association
- belongs_to :user
- belongs_to :group

## groups_usersテーブル
|column|type|options|
|------|----|-------|
|user_id|integer|null: false, foreign_key :true|
|group_id|integer|null: false, foreign_key :true|

###Association
- belongs_to :user
- belongs_to :group

