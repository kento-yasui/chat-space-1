class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :email, null: false
      t.string :password, null: false
      t.references :rooms, foreign_key: true
      t.timestamps
      add_index :users, :name, unique: true
      add_index :users, :email, unique: true
      add_index :users, :password, unique: true
      has_many :rooms
      has_many :messages
      has_many :rooms,throght: rooms_users
    end
  end
end
