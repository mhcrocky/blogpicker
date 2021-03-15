# == Schema Information
#
# Table name: photos
#
#  id          :bigint           not null, primary key
#  title       :string           not null
#  description :string           not null
#  user_id     :integer          not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Photo < ApplicationRecord
    validates :title, :description, :user_id, presence: true
    validate :ensure_photo

    def ensure_photo
        unless self.picture.attached?
            errors[:picture] << "must be attached!"
        end
    end

    has_many :comments,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :Comment,
        dependent: :destroy

    has_many :tagged_photos,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :TaggedPhoto,
        dependent: :destroy

    has_many :photos_albums,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :PhotosAlbum,
        dependent: :destroy

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_many :favorites,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :Favorite,
        dependent: :destroy

    has_one_attached :picture

    has_many :albums,
        through: :photos_albums,
        source: :album

    has_many :tags,
        through: :tagged_photos,
        source: :tag

    has_many :user_favorites,
        through: :favorites,
        source: :user
end
