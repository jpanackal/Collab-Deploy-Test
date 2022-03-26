import React, {useEffect, useState} from 'react';
import "regenerator-runtime/runtime.js";
import "./Users.css";

function Users() {

    const [backendData, setBackendData] = useState([{user: "name"}]);

    const fetchData = async () => {
        try {
            const response = await fetch("/api");
            const data = await response.json();
            return data;
        }
        catch(error) {
            console.log(error.message);
        }
    }


    useEffect(() => {
        const fetchandSetData = async () => {
            const data = await fetchData();
            setBackendData(data)
        };
        fetchandSetData();
    }, [])

    const collabSpotifyNames = [
      "calvinkienast21", 
      "madplankinskills", 
      "Joey Gabor", 
      "kariswongg", 
      "erinmccann", 
      "Jake Dalton", 
      "Jahsias White", 
      "doxmunn", 
      "jacksonlang80",
      "yemstamayo",
      "tbanken",
      "Ryley Willkomm"
    ];

    let membersOnlyJson = backendData.filter( eachObj => collabSpotifyNames.includes(eachObj.user.name)).reverse();

    console.log(membersOnlyJson.map((obj) => obj.user.name))
    console.log(membersOnlyJson.map((obj) => obj.track.name))
    return (
        <div class="wrapper">
        <h1>Member acitivty</h1>
            <div class="cols">
                <div class="col">
                    {membersOnlyJson.map(obj =>
                        <div class="container">
                            <div class="front" style={{ backgroundImage: `url(${obj.user.imageUrl.toString()})` }}>
                                <div class="inner">
                                    <p>{obj.user.name.toString()}</p>
                                    <span>Listening to : </span>
                                </div>
                            </div>
                            <div class="back" style={{ backgroundImage: `url(${obj.track.imageUrl.toString()})` }}>
                                <div class="inner">
                                    <p>{obj.track.name.toString()}</p>
                                    <p>- {obj.track.artist.name.toString()}</p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}


export default Users