class Api::FavoritesController < ApplicationController
    def create
        @favorite = Favorite.new(photo_id: params[:tagged_photo][:photo_id])
        @favorite.user_id = current_user.id
        if @favorite.save
            render :show
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def index
        @favorites = Favorite.all
        render :index
    end

    def destroy
        favorite = Favorite.find_by(id: params[:id])
        favorite_id = {id: favorite.id}
        favorite.destroy
        render json: favorite_id
    end
end
