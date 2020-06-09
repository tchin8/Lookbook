json.extract! @user, :id, :fname, :lname, :email, :birthday, :gender, :bio, :current_city, :workplace, :school, :hometown, :relationship_status
json.pfpUrl url_for(@user.pfp)
json.coverPhotoUrl url_for(@user.cover_photo)
json.friends do 
  @user.received_friend_requests.select do |rfr|
    rfr.status == true
  end 
  @user.sent_friend_requests.select do |sfr| 
    sfr.status == true
  end 
end 
