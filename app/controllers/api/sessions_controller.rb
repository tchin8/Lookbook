class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  before_action :ensure_logged_in, only: [:destroy]

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      if @user.is_a?(Array)
        render json: @user, status: 401
      else 
        login(@user)
        render "api/users/show"
      end 
    else
      render json: ["The password you've entered is incorrect"], status: 401
    end
  end

  def destroy
    logout
  end
end
