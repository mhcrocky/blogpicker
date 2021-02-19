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

## Highlights

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

### Creating Albums Form

Allowing users to create albums was a mixture of Rails backend magic and creative React frontend logic. In the backend, albums and photos were connect through a joins table (photosAlbums). Both albums and photos had a dependent: :destroy included in their joins talbe association. This would prevent a joins association to persist that refrenced a photo or album that had been deleted.

![creating an album](/readme_assets/create_alb.gif?raw=true)

When creating an album the form displayed the user's photos for them as options. Using css the photos were displayed in greyscale to signify an un-selected photo. An on click event was added in the front end to toggle a css class that displayed the selected photo in full color. In addition, this click event contained logic to keep track of which photos to add to the album. This was done by having an instance variable that kept track of the photo's ids.