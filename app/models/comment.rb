# == Schema Information
#
# Table name: comments
#
#  id                :bigint           not null, primary key
#  user_id           :integer          not null
#  post_id           :integer          not null
#  body              :string           not null
#  parent_comment_id :integer
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#
class Comment < ApplicationRecord
  validates :user_id, :post_id, :body, presence: true

  belongs_to :user
  belongs_to :post 

  belongs_to :parent_comment,
    class_name: :Comment,
    foreign_key: :parent_comment_id,
    optional: true

  has_many :comment_replies,
    class_name: :Comment,
    foreign_key: :parent_comment_id
    
end
