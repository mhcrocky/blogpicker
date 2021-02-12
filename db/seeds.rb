# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

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
photo2 = Photo.create!(
    title: "Good Boi",
    description: "My dog chilling on a bed.",
    user_id: user1.id
)
photo3 = Photo.create!(
    title: "Golden Gate Bridge",
    description: "Bay area represent!",
    user_id: demo_user.id
)
photo4 = Photo.create!(
    title: "Bananable",
    description: "Got to feed monkeys while on my trip!",
    user_id: demo_user.id
)
photo5 = Photo.create!(
    title: "Taco-Tuesday",
    description: "Everyday should be taco tuesday.",
    user_id: user2.id
)
photo6 = Photo.create!(
    title: "Pikachus",
    description: "Still waiting to catch a shiny pikachu in pokemon go...",
    user_id: user2.id
)
photo7 = Photo.create!(
    title: "Say Less Smile More",
    description: "Some dope graffiti art I came across.",
    user_id: user3.id
)
photo8 = Photo.create!(
    title: "pug",
    description: "Pugz are the best",
    user_id: user3.id
)
photo9 = Photo.create!(
    title: "pug",
    description: "Pugz are the best",
    user_id: user2.id
)
photo10 = Photo.create!(
    title: "pug",
    description: "Pugz are the best",
    user_id: user2.id
)