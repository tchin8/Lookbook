class Api::FriendRequestsController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def create
    @friend_request = FriendRequest.new(friend_params)

    if @friend_request.save
      render :show
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end 

  def update 
    @friend_request = FriendRequest.find(params[:id])

    if @friend_request.update(friend_params)
      render :show 
    else 
      render json: @friend_request.errors.full_messages, status: 422
    end 
  end 
  
  def destroy
    @friend_request = FriendRequest.find(params[:id])

    if @friend_request.destroy
      render :show
    else
      render json: @friend_request.errors.full_messages, status: 422
    end
  end

  private

  def friend_params
    params.require(:friend_request).permit(:requester_id, :requestee_id)
  end

end
