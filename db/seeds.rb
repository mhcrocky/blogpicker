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
    username: 'demo_user',
    password: '123456'
)
user1 = User.create!(
    username: 'ILovePhotos',
    password: '123456'
)
user2 = User.create!(
    username: 'dogPhotosOnly',
    password: 'password'
)

# photo seeds

photo1 = Photo.create!(
    title: "amazing",
    description: "This photo is amazing!",
    user_id: demo_user.id
)
photo2 = Photo.create!(
    title: "orange",
    description: "This photo is an orange!",
    user_id: demo_user.id
)
photo3 = Photo.create!(
    title: "banana",
    description: "This photo is an banana!",
    user_id: user1.id
)
photo4 = Photo.create!(
    title: "valorant",
    description: "Sweet photo of Jett",
    user_id: user1.id
)
photo5 = Photo.create!(
    title: "doge",
    description: "To the moon!",
    user_id: user2.id
)
photo6 = Photo.create!(
    title: "pug",
    description: "Pugz are the best",
    user_id: user2.id
)