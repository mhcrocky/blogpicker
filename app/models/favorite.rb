# == Schema Information
#
# Table name: favorites
#
#  id         :bigint           not null, primary key
#  photo_id   :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Favorite < ApplicationRecord
    validates :photo_id, :user_id, presence: true

    belongs_to :photo,
        primary_key: :id,
        foreign_key: :photo_id,
        class_name: :Photo

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User
end
