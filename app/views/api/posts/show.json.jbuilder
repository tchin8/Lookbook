json.extract! @post, :id, :author_id, :user_id, :body, :created_at 

#@posts.each do |post|
  #json.set! post.id do
   # json.extract! post, :id, :author_id, :user_id, :body, :created_at
    
    #json.comments do
    #  post.comments.each do |comment|
    #    json.set! comment.id do 
    #      json.extract! comment, :id, :user_id, :post_id, :body, :created_at, :parent_comment_id
    #    end 
    #  end 
    #end 
#  end
#end

