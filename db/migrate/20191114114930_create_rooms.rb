class CreateRooms < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms do |t|
      t.string :roomname, null: false
      t.timestamps
    end
    add_index :rooms, :roomname, unique: true
    has_many :users
    has_many :messages
    has_many :users,through: rooms_users
  end
end
