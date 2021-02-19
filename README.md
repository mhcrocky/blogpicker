# Picktr

[Live Link](http://picktr.herokuapp.com/#/)

Picktr is a photo sharing web application based off of the popular website Flickr. The stack implemented used React and Redux JavaScript libraries for the frontend, a PostgreSQL database, and Ruby on Rails for the backend.

## Features
    + Users can upload photos and edit their posts
    + Photos are stored using AWS S3 and Rail's Active Storage
    + Responsive photo-feed that is dynamically updated with new photos
    + Users can nest photos in albums
    + Backend and frontend user authentication with use of BCrypt
    + Clean and easy to use UI to view single photos and nested photos


### Dyanamic Photo-Feed

![picktr feed](/readme_assets/picktr_feed.png?raw=true)

The photo index is a react component that renders photos through the React-Redux cycle. Taking advantage of React, new photos are updated upon succesful upload. The photos are dynamically sized using css flex-box, and flex-wrap. This allows for a great looking feed whithout having to worry about re-sizing images.

The highlight of the photo feed component is its ability to adjust the content based on wether it is displayed on the main feed, a single user's feed or a single album's feed. When the component is nested in the user's show route or an album's show route, the content of the feed pertains only to that user/album. This is done using conditional rendering when mapping the state to props.

```javascript
let photos = [];
if (userId) {
    Object.values(photosState).forEach((photo) => {
        if (photo.userId === userId) photos.push(photo);
    }) 
} else if (photoIds) {
    if (Object.values(photosState).length === 0) {
        photos = [];
    } else {
        photoIds.forEach((id) => {
            photos.push(photosState[id]);
        })
    }
} else {
    photos = Object.values(photosState);
}
```

A userId prop or photoIds prop will be passed down to the photo index component to select a specific slice of the Redux state.

### Creating Albums

