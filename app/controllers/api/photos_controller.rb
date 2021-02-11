class Api::PhotosController < ApplicationController
    def create 
        @photo = Photo.new(photo_params)
        @photo.user_id = current_user.id
        if @photo.save
            redirect_to 
        else  
            render json: @photo.errors.full_messages, status: 422
        end
    end


    private

    def photo_params
        params.require(:photo).permit(:title, :description)
    end

end
