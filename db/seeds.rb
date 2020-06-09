require 'faker' 
require 'open-uri'

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Post.destroy_all
Comment.destroy_all
FriendRequest.destroy_all

user1 = User.create!(
    fname: 'Tiffany',
    lname: 'Chin',
    email: 'ctiff@lookbook.com',
    birthday: '1995-1-28',
    gender: 'Female',
    password: 'password',
    bio: "good vibes only",
    current_city: "New York City, NY",
    school: "App Academy"
  )

user2 = User.create!(
    fname: 'Lexus',
    lname: 'Chin',
    email: 'clexus@lookbook.com',
    birthday: '2016-1-8',
    gender: 'Female',
    password: 'password',
    bio: "meooowwww",
    current_city: "New York City, NY",
  )

def random_bday() 
  year = rand(1970..2005)
  month = rand(1..12)
  
  if [4, 6, 9, 11].include?(month)
    day = rand(1..30)
  elsif month == 2
    if year % 4 == 0
      day = rand(1..29)
    else 
      day = rand(1..28)
    end 
  else  
    day = rand(1..31)
  end 

  "#{year}-#{month}-#{day}"
end 

def random_relation()
  [
    'Single',
    'In a relationship',
    'Engaged',
    'Married',
    'In a civil union',
    'In a domestic partnership',
    'In an open relationship',
    'It''s complicated',
    'Separated',
    'Divorced',
    'Widowed',
    nil
  ].sample
end 

10.times do 
  User.create(
    fname: Faker::Name.first_name,
    lname: Faker::Name.last_name,
    email: Faker::Internet.email,
    birthday: random_bday(),
    gender: Faker::Gender.binary_type,
    password: SecureRandom.alphanumeric,
    bio: [Faker::Quote.famous_last_words, nil].sample,
    current_city: "#{Faker::Address.city}, #{Faker::Address.state}",
    workplace: [Faker::Job.title, nil].sample,
    relationship_status: random_relation()
  )
end 

User.all.each do |user|
  profile_pic = open('https://lookbook-aa-seeds.s3.amazonaws.com/default_pfp.png')
  cover_photo = open('https://lookbook-aa-seeds.s3.amazonaws.com/default_cv.png')
  user.pfp.attach(io: profile_pic, filename: 'default_pfp.png')
  user.cover_photo.attach(io: cover_photo, filename: 'default_cv.png')
end 


Post.create!(
  author_id: 2, 
  user_id: 1, 
  body: "Hi mom!"
)

Post.create!(
  author_id: 1, 
  user_id: 2, 
  body: "You're too young to be using lookbook!"
)


20.times do 
  Post.create!(
    author_id: rand(3..12),
    user_id: rand(3..12),
    body: Faker::Quote.famous_last_words
  )
end 

FriendRequest.create!(
  requester_id: 1,
  requestee_id: 2,
  status: true
)