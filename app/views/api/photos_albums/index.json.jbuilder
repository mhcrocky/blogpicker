@photos_albums.each do |photos_album|
    json.set! photos_album.id do
        json.extract! photos_album, :id, :photo_id, :album_id
    end
end