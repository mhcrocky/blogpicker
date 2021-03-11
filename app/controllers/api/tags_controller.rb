class Api::TagsController < ApplicationController
    def create
        @tag = Tag.new(name: params[:tag][:name])
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def show
        @tag = Tag.find_by(id: params[:id])
        render :show
    end

    def index
        @tags = Tag.all
        render :index
    end
end
