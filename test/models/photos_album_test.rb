# == Schema Information
#
# Table name: photos_albums
#
#  id         :bigint           not null, primary key
#  photo_id   :integer          not null
#  album_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class PhotosAlbumTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
