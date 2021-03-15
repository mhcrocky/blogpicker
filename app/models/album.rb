# == Schema Information
#
# Table name: albums
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Album < ApplicationRecord
    validates :title, :description, :user_id, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :photos_albums,
        primary_key: :id,
        foreign_key: :album_id,
        class_name: :PhotosAlbum,
        dependent: :destroy

    has_many :photos,
        through: :photos_albums,
        source: :photo
end
