class CreateRoomsUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :rooms_users do |t|

      t.timestamps
    end
  end
end
