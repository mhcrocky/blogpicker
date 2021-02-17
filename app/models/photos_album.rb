class PhotosAlbum < ApplicationRecord
    validates :photo_id, :album_id, presence: true

    belongs_to :photo,
        primary_key: :id, 
        foreign_key: :photo_id,
        class_name: :Photo

    belongs_to :album,
        primary_key: :id, 
        foreign_key: :album_id,
        class_name: :Album
end
