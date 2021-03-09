class CreateTaggedPhotos < ActiveRecord::Migration[5.2]
  def change
    create_table :tagged_photos do |t|
      t.integer :tag_id, null: false
      t.integer :photo_id, null: false
      t.timestamps
    end
    add_index :tagged_photos, :tag_id
    add_index :tagged_photos, :photo_id
  end
end
