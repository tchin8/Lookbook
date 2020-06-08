# json.extract! @user, :id, :fname, :lname, :email

#json.array! @users do |user|
  #json.extract! user, :id, :fname, :lname, :email, :birthday, :gender, :bio, #:current_city, :workplace, :school, :hometown, :relationship_status

  ##json.photoUrl url_for(post.photo)
#end

@users.each do |user|
  json.set! user.id do 
    json.extract! user, :id, :fname, :lname, :email, :birthday, :gender, :bio, :current_city, :workplace, :school, :hometown, :relationship_status
    json.pfpUrl url_for(user.pfp)
    json.coverPhotoUrl url_for(user.cover_photo)
  end 
end 