class CreateGroups < ActiveRecord::Migration[5.0]
  def change
    create_table :groups do |t|
      t.string :name, null: false
      t.timestamps
    end
    add_index :groups, :name, unique: true
    has_many :groups_users
    has_many :messages
    has_many :users,through: groups_users
  end
end
