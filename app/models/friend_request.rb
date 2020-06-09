# == Schema Information
#
# Table name: friend_requests
#
#  id           :bigint           not null, primary key
#  requester_id :integer          not null
#  requestee_id :integer          not null
#  status       :boolean          default(FALSE)
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class FriendRequest < ApplicationRecord
  validates :requestee_id, :requester_id, presence: true

  belongs_to :requester,
    class_name: :User,
    foreign_key: :requester_id

  belongs_to :requestee,
    class_name: :User,
    foreign_key: :requestee_id
end
