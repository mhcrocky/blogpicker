class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by_credentials(params[:user][:username],
        params[:user][:password])
        if !@user
            render json: ['Incorrect username or password!'], status: 401
        else    
            login(@user)
            render :show
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
        else
            render json:['No one is logged in'], status: 404
        end
    end
end
