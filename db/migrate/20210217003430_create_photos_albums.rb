class CreatePhotosAlbums < ActiveRecord::Migration[5.2]
  def change
    create_table :photos_albums do |t|
      t.integer :photo_id, null: false
      t.integer :album_id, null: false
      t.timestamps
    end
    add_index :photos_albums, :photo_id
    add_index :photos_albums, :album_id
  end
end
