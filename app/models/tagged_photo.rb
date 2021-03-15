# == Schema Information
#
# Table name: tagged_photos
#
#  id         :bigint           not null, primary key
#  tag_id     :integer          not null
#  photo_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class TaggedPhoto < ApplicationRecord
    validates :photo_id, :tag_id, presence: true

    belongs_to :tag,
        primary_key: :id,
        foreign_key: :tag_id,
        class_name: :Tag

    belongs_to :photo,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :Photo
end
