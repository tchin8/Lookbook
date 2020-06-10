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
    json.friends do 

      (json.array! ((user.received_friend_requests.reject { |rfr| !rfr.status}).map {|rfr| rfr.requester_id})).concat(json.array! ((user.sent_friend_requests.reject { |sent| !sent.status}).map {|sent| sent.requestee_id}))
    end 

    json.receivedFriendRequests do 
    #  (user.received_friend_requests.reject { |rfr| rfr.status }).each do |fr|
    #    json.set! fr.requester_id do 
    #      json.extract! fr, :id, :requester_id, :requestee_id, :status
    #    end 
    #  end 
      json.array! ((user.received_friend_requests.reject { |rfr| rfr.status}).map {|rfr| rfr.requester_id})
    end 

    json.sentFriendRequests do 
      json.array! ((user.sent_friend_requests.reject { |sfr| sfr.status}).map {|sfr| sfr.requestee_id})
    end 
  end 
end 