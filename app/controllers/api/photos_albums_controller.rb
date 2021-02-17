class Api::PhotosAlbumsController < ApplicationController
    def create
        @photos_album = PhotosAlbum.new(photos_albums_params)
        if @photos_album.save
            render :show
        else
            render json: @photos_albums.errors.full_messages, status: 422
        end
    end

    def index
        @photos_albums = PhotosAlbum.all
        render :index
    end

    def destroy
        photos_album = PhotosAlbum.find_by(id: params[:id])
        photos_album.delete
        render json: {message: "Succesfully deleted!"}
    end

    private

    def photos_albums_params
        params.require(:photos_album).permit(:album_id, :photo_id)
    end
end
