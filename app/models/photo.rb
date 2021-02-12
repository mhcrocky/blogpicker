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

    belongs_to :user,
        primary_key: :id,
        foreign_key: :user_id,
        class_name: :User

    has_one_attached :picture
end
