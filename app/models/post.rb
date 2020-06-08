# == Schema Information
#
# Table name: posts
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  user_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Post < ApplicationRecord
  validates :author_id, :user_id, :body, presence: true

  belongs_to :author,
    class_name: :User,
    foreign_key: :author_id

  belongs_to :wall,
    class_name: :User,
    foreign_key: :user_id

  has_one_attached :photo

  has_many :comments,
    class_name: :Comment,
    foreign_key: :post_id,
    dependent: :destroy

end
