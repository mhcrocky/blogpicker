# == Schema Information
#
# Table name: photos_albums
#
#  id         :bigint           not null, primary key
#  photo_id   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
