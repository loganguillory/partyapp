class CreateComments < ActiveRecord::Migration[7.0]
  def change
    create_table :comments do |t|
      t.integer :UserID
      t.integer :EventID

      t.timestamps
    end
  end
end
