class Api::AlbumsController < ApplicationController
    def create
        @album = Album.new(album_params)
        @album.user_id = current_user.id
        if @album.save
            render :show
        else
            render json: @album.errors.full_messages, status: 422
        end
    end

    def index
        @albums = Album.all
        render :index
    end

    def show
        @album = Album.find_by(id: params[:id])
        render :show
    end

    def destroy
        album = Album.find_by(id: params[:id])
        album_id = {albumId: album.id}
        album.destroy
        render json: album_id
    end

    private

    def album_params
        params.require(:album).permit(:title, :description)
    end
end
