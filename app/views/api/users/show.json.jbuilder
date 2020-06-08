json.extract! @user, :id, :fname, :lname, :email, :birthday, :gender, :bio, :current_city, :workplace, :school, :hometown, :relationship_status
json.pfpUrl url_for(@user.pfp)
json.coverPhotoUrl url_for(@user.cover_photo)

