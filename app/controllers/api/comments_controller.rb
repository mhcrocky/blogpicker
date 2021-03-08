class Api::CommentsController < ApplicationController
    def create
        @comment = Comment.new(comment_params)
        @comment.user_id = current_user.id
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        comment = Comment.find_by(id: params[:id])
        commentId = {commentId: comment.id}
        comment.destroy
        render json: commentId
    end

    def index
        @comments = Comment.all
        render :index
    end

    private

    def comment_params
        params.require(:comment).permit(:body, :photo_id)
    end
end
