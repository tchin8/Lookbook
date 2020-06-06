json.array! @posts do |post|
  json.extract! post, :id, :author_id, :user_id, :body, :created_at

  #json.photoUrl url_for(post.photo)
end

