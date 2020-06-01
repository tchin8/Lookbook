class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  before_action :ensure_logged_in, only: [:index, :show, :update]

  def index 
    @user = User.all
    render "api/users/index"
  end 

  def show 
    @user = User.find(params[:id])
    render "api/users/show"
  end 

  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])
    if @user.id == current_user.id
      if @user.update(user_params)
        render "api/users/show"
      else  
        render json: @user.errors.full_messages, status: 422
      end 
    end 
  end 

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :password, :birthday, :gender)
  end
end