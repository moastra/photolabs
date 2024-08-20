
# PhotoLabs

PhotoLabs is a React-based single-page application (SPA) that allows users to view and interact with photos in various contexts. This project is designed to combine the knowledge of React with a more complex application structure, leveraging a pre-existing API to create a seamless user experience.


## Goal

The primary goal of PhotoLabs is to build a client-side application using the React view-layer library. This application will allow users to browse, view, and interact with photos loaded from an API server.
## Functional Requirements

**Client-Side Application**

- **React SPA**: The front end is developed as a single-page application (SPA) using React.
- **API Communication**: The client-side communicates with the backend API server over HTTP using JSON format.

**Server and Persistence Layer**

- **PostgreSQL Database**: The data layer is backed by a PostgreSQL database.
- **Node Express.js Server**: The API server is built with Node.js and Express.js, serving data to the React frontend.
- **Potential Modifications**: The server and persistence layers may be modified to support additional features (stretch goals).
## Behavioural Requirements

- **View Photos**: Users can view a selection of photos on the homepage, which are loaded from the API.
- **Navigate Topics**: Users can navigate through different photo categories, known as topics.
- **View Larger Photos**: By clicking on a photo, users can view a larger version along with relevant or similar photos.
- **Like Photos**: Users can like photos from anywhere in the application where photos are displayed.
- **Notifications**: A heart icon in the navigation bar will display a notification if there are liked photos.
- **Topic and Like Navigation**: The navigation bar will include links to different topics and a heart icon for liked photos.
## Tech Stack

- **React**: The front-end is built with React, using the Create React App (CRA) boilerplate.
- **Webpack**: Webpack is used to bundle the client-side assets.
- **Babel**: Babel is used to transpile JavaScript for browser compatibility.
- **Express**: The API server is built using Node.js and Express.js.


## API Reference

#### Fetches all photos

```http
  GET /api/photos
```



#### Fetches all topics

```http
  GET /api/topics
```


#### Fetches photos related to a specific topic

```http
  GET /api/topics/photos/:topic_id
```
## Development Setup

PhotoLabs is developed using two separate servers:

1. **Client-Side Webpack Development Server**: Serves the React application during development.
2. **API Server**: Provides photo data via the Express.js application.
## Running the Project

1. **Install Dependencies**: Run `npm install` in both the client and server directories.
2. **Start the API Server**: Navigate to the server directory and run `npm start`.
3. **Start the Client-Side Application**: In the client directory, run `npm start`. This will start the Webpack development server.
## Screenshots

#### Landing Page
!["Landing Page"](https://github.com/moastra/photolabs/blob/main/docs/landing-page.png?raw=true)

#### Photo Details
!["Open Modal for Photo Details"](https://github.com/moastra/photolabs/blob/main/docs/modal-open.png?raw=true)

#### Photo Details with "Similar Photos" Recommendations
!["Open Modal for Similar Photos"](https://github.com/moastra/photolabs/blob/main/docs/similar-photos.png?raw=true)

