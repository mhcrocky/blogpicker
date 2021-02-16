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
        @album = Album.show
        render :show
    end

    def destroy
        photo = Album.find_by(id: params[:id])
        photo.delete
        render json: {message: "Succesfully deleted!"}
    end

    private

    def album_params
        params.require(:albums).permit(:title, :description)
    end
end
