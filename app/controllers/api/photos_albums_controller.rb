class Api::PhotosAlbumsController < ApplicationController
    def create

        # accept an array and iterate through it
        params[:photos_album].values.each do |obj|
            PhotosAlbum.create!(album_id: obj[:albumId], photo_id: obj[:photoId])
        end
    end

    def index
        @photos_albums = PhotosAlbum.all
        render :index
    end

end
