json.extract! photo, :id, :title, :description, :user_id
json.photo_url url_for(photo.picture)