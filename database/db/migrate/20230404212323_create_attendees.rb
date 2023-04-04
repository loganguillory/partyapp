class CreateAttendees < ActiveRecord::Migration[7.0]
  def change
    create_table :attendees do |t|
      t.integer :UserID
      t.integer :EventID

      t.timestamps
    end
  end
end
