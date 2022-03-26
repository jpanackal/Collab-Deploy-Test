const express = require('express');
const buddyList = require('spotify-buddylist')
const app = express();
const port = 5000;

async function displayCollabActivity(req ,res) {
    const spDcCookie = 'AQCijEo-LRA31LztfGJeyOpRTUhjhwH-wD97XR2feFMvqRI2Fl_VPuXj5h5-sgrxgfXwNeI5ydgFQ3x2P8UTECuAdANJ0I7zH3JzWeh4-8kE8DO7MezwoFjikSYDQLVD5y6M0abup5Q4UDFZAD9wA_JuiUXx2Rsx'
  
    const { accessToken } = await buddyList.getWebAccessToken(spDcCookie)
    const friendActivity = await buddyList.getFriendActivity(accessToken)
  
    console.log(JSON.stringify(friendActivity.friends, null, 2))
    res.send(JSON.stringify(friendActivity.friends, null, 2));
    // return friendActivity
    // for(var i = 0; i < friendActivity.friends.length; i++) {
    // var membersOnlyJson = new Array();
    //   var obj = friendActivity.friends[i];
    //   if(collabSpotifyNames.includes(obj.user.name)) {
    //     console.log("Member: " + obj.user.name)
    //     console.log("Member Image: " + obj.user.imageUrl)
    //     console.log("Song: " + obj.track.name)
    //     console.log("Song Image: " + obj.track.imageUrl)
    //     console.log("Artist: " + obj.track.artist.name)
    //     console.log("Album/Playlist: " + obj.track.context.name)
    //     console.log("--------------------------------------")
    //   }
    // }
  }

  app.get("/api", displayCollabActivity);

// app.get("/api", (req, res) => {
//     // let example = displayCollabActivity();

//     // console.log(example);
//     console.log(req)
//     // res.send("hello")
//     res.json({"users": ["user 1", "users 2", "user 397"] })
//     // res.json(example)
// })

app.listen(5000, () => { console.log("server started on port 5000") })