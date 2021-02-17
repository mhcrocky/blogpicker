class Album < ApplicationRecord
    validates :title, :description, :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :photos_albums,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :PhotosAlbum

    has_many :photos,
        through: :photos_albums,
        source: :photo
end
