# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.delete_all
Photo.delete_all

# user seeds 

demo_user = User.create!(
    username: 'Demo_User',
    password: '123456'
)
user1 = User.create!(
    username: 'FriendOfDogs',
    password: '123456'
)
user2 = User.create!(
    username: 'Cato-grapher',
    password: 'password'
)
user3 = User.create!(
    username: 'NautilusSoup',
    password: 'password'
)


# photo seeds

photo1 = Photo.create!(
    title: "Yung Pup",
    description: "Yung pup ready to drop his album dog!",
    user_id: user1.id
)
file1 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/yung_pup.jpg')
photo1.picture.attach(io: file1, filename: 'yung_pup.jpg')

photo2 = Photo.create!(
    title: "Good Boi",
    description: "My dog chilling on a bed.",
    user_id: user1.id
)
file2 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/dog_on_bed.jpg')
photo2.picture.attach(io: file2, filename: 'dog_on_bed.jpg')

photo3 = Photo.create!(
    title: "Golden Gate Bridge",
    description: "Bay area represent!",
    user_id: demo_user.id
)
file3 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/gg_bridge.JPG')
photo3.picture.attach(io: file3, filename: 'gg_bridge.JPG')

photo4 = Photo.create!(
    title: "Bananable",
    description: "Got to feed monkeys while on my trip!",
    user_id: demo_user.id
)
file4 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/monkeys.jpg')
photo4.picture.attach(io: file4, filename: 'monkeys.jpg')

photo5 = Photo.create!(
    title: "Taco-Tuesday",
    description: "Everyday should be taco tuesday.",
    user_id: user2.id
)
file5 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/taco_truck.JPG')
photo5.picture.attach(io: file5, filename: 'taco_truck.JPG')

photo6 = Photo.create!(
    title: "Pikachus",
    description: "Still waiting to catch a shiny pikachu in pokemon go...",
    user_id: user2.id
)
file6 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/pikachus.jpg')
photo6.picture.attach(io: file6, filename: 'pikachus.jpg')

photo7 = Photo.create!(
    title: "Say Less Smile More",
    description: "Some dope graffiti art I came across.",
    user_id: user3.id
)
file7 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/smile_graffiti.jpg')
photo7.picture.attach(io: file7, filename: 'smile_graffiti.jpg')

photo8 = Photo.create!(
    title: "Snowy Mountain",
    description: "A freezing day but worth the photo!",
    user_id: user3.id
)
file8 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/snowy_mountain.jpg')
photo8.picture.attach(io: file8, filename: 'snow_mountain.jpg')

photo9 = Photo.create!(
    title: "Succulent Picture",
    description: "Been trying out my green thumb during quarantine.",
    user_id: demo_user.id
)
file9 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/succulant.jpg')
photo9.picture.attach(io: file9, filename: 'succulant.jpg')

photo10 = Photo.create!(
    title: "Bird is the Word",
    description: "Caught this bird chilling by the pond!",
    user_id: demo_user.id
)
file10 = open('https://picktr-seeds.s3-us-west-1.amazonaws.com/bird.jpg')
photo10.picture.attach(io: file10, filename: 'bird.jpg')