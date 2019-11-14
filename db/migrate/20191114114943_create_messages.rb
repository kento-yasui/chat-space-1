class CreateMessages < ActiveRecord::Migration[5.0]
  def change
    create_table :messages do |t|
      t.references :user_id, null: false, foreign_key: true
      t.references :room_id, null: false, foreign_key: true
      t.timestamps
    end
    belongs_to :user
    belongs_to :room
  end
end
