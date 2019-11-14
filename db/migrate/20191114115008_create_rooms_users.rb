class CreateRoomsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms_users do |t|
      t.integer :user_id, null: false, foreign_key: true
      t.integer :room_id, null: false, foreign_key: true
      t.timestamps
    end
    belongs_to :user
    belongs_to :room
  end
end
