class CreateInstitutions < ActiveRecord::Migration[6.1]
  def change
    create_table :institutions do |t|
      t.string :title
      t.string :type_dishes
      t.string :photo
      t.datetime :clock_start
      t.datetime :clock_end

      t.timestamps
    end
  end
end
