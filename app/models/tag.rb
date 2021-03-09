class Tag < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :name, length: { maximum: 15 }

    has_many :tagged_photos,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :TaggedPhoto,
        dependent: :destroy

    has_many :photos,
        through: :tagged_photos,
        source: :photo\
end
