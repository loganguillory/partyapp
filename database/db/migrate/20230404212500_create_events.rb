class CreateEvents < ActiveRecord::Migration[7.0]
  def change
    create_table :events do |t|
      t.string :Name
      t.string :Location
      t.string :Image
      t.text :Description
      t.string :Host

      t.timestamps
    end
  end
end
