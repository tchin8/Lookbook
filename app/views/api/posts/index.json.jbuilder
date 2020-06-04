# @posts.each do |post|
#   json.set! post.id do
#     json.extract! post, :author_id, :user_id, :body
#   end
# end


json.array! @posts do |post|
  json.extract! post, :id, :author_id, :user_id, :body, :created_at
end

