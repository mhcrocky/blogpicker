class Api::PhotosController < ApplicationController
    def create 
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id
        if @photo.save
            render json: {message: "Success"}
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        @photo = Photo.find_by(id: params[:id])
        if @photo.update(photo_params)
            render :show
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy
        photo = Photo.find_by(id: params[:id])
        photoId = {photoId: photo.id}
        photo.delete
        render json: photoId
    end

    def index
        @photos = Photo.all 
        render :index
    end

    def show
        @photo = Photo.find_by(id: params[:id])
        if @photo
            render :show
        else
            render json: ["Photo does not exist"], status: 404
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description, :picture)
    end

end
