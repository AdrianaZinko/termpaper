class CreateMenus < ActiveRecord::Migration[6.1]
  def change
    create_table :menus do |t|
      t.string :name
      t.string :description
      t.integer :weight
      t.string :photo
      t.integer :price
      t.references :institution, null: false, foreign_key: true

      t.timestamps
    end
  end
end
