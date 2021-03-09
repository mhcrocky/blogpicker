class Tag < ApplicationRecord
    validates :name, presence: true, unique: true
end
