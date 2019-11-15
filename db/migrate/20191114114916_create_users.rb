class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :password, null: false, unique: true
      t.references :groups, foreign_key: true
      t.timestamps
    end
    has_many :groups
    has_many :messages
    has_many :groups,throght: groups_users
  end
end
