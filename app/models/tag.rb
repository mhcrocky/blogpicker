# == Schema Information
#
# Table name: tags
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
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
