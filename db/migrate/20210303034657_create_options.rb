class CreateOptions < ActiveRecord::Migration[6.0]
  def change
    create_table :options do |t|
      t.string :value, null: false
      t.integer :votes, default: 0, null: false
      t.references :poll, null: false, foreign_key: true

      t.timestamps
    end
  end
end
