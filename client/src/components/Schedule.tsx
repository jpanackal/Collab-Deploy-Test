import React from 'react'
import './Schedule.css';

function Schedule() {
    return (
        <div className='cards-week'>
            <div className="cards__wrapper-week">
                <h1>Weekly Themes</h1>
                <ul className="cards__items-week">
                    <li>
                        <div className="main-card">
                            Each person gets 6 mins of total music they can add this week. 
                            For example you can add one 6 min song or two 3 min songs
                            <div className="up-card">
                                Week 1
                            </div>
                            <div className="down-card">
                                X Minutes of Music
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            Add a song with x more/less seconds than the previous song
                            <div className="up-card">
                                Week 2
                            </div>
                            <div className="down-card">
                                +/- X secs
                            </div>
                        </div>
                    </li>
                    <li>
                    <div className="main-card">
                        Alternate between fast and slow tempo songs. If the last song added was upbeat, add a slow tempo song.
                        <div className="up-card">
                            Week 3
                        </div>
                        <div className="down-card">
                            Fast / Slow
                        </div>
                    </div>
                    </li>
                    <li>
                        <div className="main-card">
                            First person adds song with artist name that begins with A, next persons adds artist name thats starts with B, and so on
                            <div className="up-card">
                                Week 4
                            </div>
                            <div className="down-card">
                                Alphabet Order Artist
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            Add a song with a name that is a synonym of any word in the previous song title
                            <div className="up-card">
                                Week 5
                            </div>
                            <div className="down-card">
                                Synonyms
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            Add a song by a male artist if the previous song is by a female, and vice versa
                            <div className="up-card">
                                Week 6
                            </div>
                            <div className="down-card">
                                Alternate Male / Female
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            Choose song with album art that contains main color of last songs album art.
                            <div className="up-card">
                                Week 7
                            </div>
                            <div className="down-card">
                                Album Art
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            Add a song with a name that is an antonym of any word in the previous song title
                            <div className="up-card">
                                Week 8
                            </div>
                            <div className="down-card">
                                Antonyms
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            Add song beggining with same letter of beggining of the last word of previous song
                            For example, if the previous song was called "Blue Monday", the next song would need to start with a Y.
                            <div className="up-card">
                                Week 9
                            </div>
                            <div className="down-card">
                                Last Letter = First Letter
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className="main-card">
                            ??? ???? ?????? ???? ???? ?????? ?? ?????? ?? ??? ???? ?????? ?? ??????? ????
                            ???? ??????, ???? ?? ?????? ???? ?? ?????? "?????? ??????", ?? ???? ???? ??? ?????? ?? ?????? ???? ?.
                            <div className="up-card">
                                Week 10
                            </div>
                            <div className="down-card">
                                ?
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
    </div>
      )
}

export default Schedule