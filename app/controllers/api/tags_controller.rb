class Api::TagsController < ApplicationController
    def create
        @tag = Tag.new(params[:tag][:name])
        if @tag.save
            render :show
        else
            render json: @tag.errors.full_messages, status: 422
        end
    end

    def index
        @tags = Tag.all
        render :index
    end
end
