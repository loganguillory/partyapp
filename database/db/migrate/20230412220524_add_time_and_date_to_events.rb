class AddTimeAndDateToEvents < ActiveRecord::Migration[7.0]
  def change
    add_column :events, Date, :timestamp
  end
end
