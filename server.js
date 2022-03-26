const express = require('express');
const buddyList = require('spotify-buddylist')
const app = express();
const port = 5000;
const path = require('path');
const cors = require('cors');


async function displayCollabActivity(req ,res) {
    const spDcCookie = 'AQCijEo-LRA31LztfGJeyOpRTUhjhwH-wD97XR2feFMvqRI2Fl_VPuXj5h5-sgrxgfXwNeI5ydgFQ3x2P8UTECuAdANJ0I7zH3JzWeh4-8kE8DO7MezwoFjikSYDQLVD5y6M0abup5Q4UDFZAD9wA_JuiUXx2Rsx'
  
    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
  
    console.log(JSON.stringify(friendActivity.friends, null, 2))
    res.send(JSON.stringify(friendActivity.friends, null, 2));
  }

  app.get("/api", displayCollabActivity);

// ** MIDDLEWARE ** CHANGE THE THIRD ELEMENT IN THE AREA //
const whitelist = ['http://localhost:3000', 'http://localhost:5000', 'https://collab-site.herokuapp.com']
const corsOptions = {
  origin: function (origin, callback) {
    console.log("** Origin of request " + origin)
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      console.log("Origin acceptable")
      callback(null, true)
    } else {
      console.log("Origin rejected")
      callback(new Error('Not allowed by CORS'))
    }
  }
}
app.use(cors(corsOptions))

if (process.env.NODE_ENV === 'production') {
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
// Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(5000, () => { console.log("server started on port 5000") })