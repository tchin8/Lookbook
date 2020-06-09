class Api::UsersController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  #before_action :ensure_logged_in, only: [:index, :show, :update]

  def index 
    @users = User.all
    render :index
  end 

  def show 
    @user = User.find(params[:id])
    render :show
  end 

  def create
    @user = User.new(user_params)
    # profile_pic = open('https://lookbook-aa-dev.s3.amazonaws.com/default_pfp.png')
    # cover_photo = open('https://lookbook-aa-dev.s3.amazonaws.com/default_cv.png')
    # @user.pfp.attach(io: profile_pic, filename: 'default_pfp.png')
    # @user.cover_photo.attach(io: cover_photo, filename: 'default_cv.png')

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def update 
    @user = User.find(params[:id])
    #if @user.id == current_user.id
      if @user.update(user_params)
        render :show
      else  
        render json: @user.errors.full_messages, status: 422
      end 
    #end 
  end 

  def posts 
    @user = User.find(params[:id])
    @posts = @user.posts
    render :posts
  end 

  private

  def user_params
    params.require(:user).permit(:fname, :lname, :email, :password, :birthday, :gender, :bio, :current_city, :workplace, :school, :hometown, :relationship_status, :pfp, :cover_photo)
  end
end