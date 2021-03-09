class Tag < ApplicationRecord
    validates :name, presence: true, uniqueness: true
    validates :name, length: { maximum: 15 }
end
