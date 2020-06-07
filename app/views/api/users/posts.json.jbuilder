#json.array! @posts do |post|
#  json.extract! post, :id, :author_id, :user_id, :body, :created_at

  #json.photoUrl url_for(post.photo)
#end


@posts.each do |post|
  json.set! post.id do
    json.extract! post, :id, :author_id, :user_id, :body, :created_at
  end
end