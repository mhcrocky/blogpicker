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
require 'test_helper'

class TaggedPhotoTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
