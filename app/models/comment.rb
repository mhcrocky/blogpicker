class Comment < ApplicationRecord
    validates :photo_id, :user_id, :body, presence: true

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    belongs_to :photo,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :Photo
end
