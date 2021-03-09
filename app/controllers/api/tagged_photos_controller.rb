class Api::TaggedPhotosController < ApplicationController
    def create
        @tagged_photo = TaggedPhoto.new(
            photo_id: params[:tagged_photo][:photo_id],
            tag_id: params[:tagged_photo][:tag_id]
        )

        if @tagged_photo.save
            render :show
        else
            render json: @tagged_photo.errors.full_messages, status: 422
        end
    end

    def index
        @tagged_photos = TaggedPhoto.all
        render :index
    end
end
