@posts.each do |post|
  json.set! post.id do
    json.extract! post, :author_id, :user_id, :body
  end
end
