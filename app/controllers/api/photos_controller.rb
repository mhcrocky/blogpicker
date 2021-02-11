class Api::PhotosController < ApplicationController
    def create 
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id
        if @photo.save
            redirect_to api_photo(@photo)
        else  
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def update
        @photo = Photo.find_by(id: params[:id])
        if @photo.update(photo_params)
            redirect_to api_photo(@photo)
        else
            render json: @photo.errors.full_messages, status: 422
        end
    end

    def destroy
        photo = Photo.find_by(id: params[:id])
        photo.delete
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
            render json: @photo.errors.full_messages, status: 404
        end
    end

    private

    def photo_params
        params.require(:photo).permit(:title, :description)
    end

end
