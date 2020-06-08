# == Schema Information
#
# Table name: users
#
#  id                  :bigint           not null, primary key
#  fname               :string           not null
#  lname               :string           not null
#  email               :string           not null
#  birthday            :date             not null
#  gender              :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  bio                 :string
#  current_city        :string
#  workplace           :string
#  school              :string
#  hometown            :string
#  relationship_status :string
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#
class User < ApplicationRecord
  validates :fname, :lname, :email, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true
  validates :gender, presence: true

  attr_reader :password
  after_initialize :ensure_session_token

  has_many :authored_posts,
    class_name: :Post,
    foreign_key: :author_id
  
  has_many :posts,
    class_name: :Post,
    foreign_key: :user_id

  has_one_attached :pfp

  has_one_attached :cover_photo

  has_many_attached :user_photos

  has_many :comments,
    class_name: :Comment,
    foreign_key: :user_id

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    if !user 
      return ['The email you\'ve entered doesn\'t match any account.' ]
    elsif user && user.is_password?(password)
      return user
    end
    nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = self.class.generate_session_token
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= self.class.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64
  end

end
