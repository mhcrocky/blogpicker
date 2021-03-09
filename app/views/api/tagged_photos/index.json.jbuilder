@tagged_photos.each do |tagged_photo|
    json.set! tagged_photo.id do
        json.extract! tagged_photo, :id, :tag_id, :photo_id
    end
end