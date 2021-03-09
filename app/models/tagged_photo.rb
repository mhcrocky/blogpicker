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
