import React, { useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import db from '../../database/firebase';
import { collection, getDocs, onSnapshot} from "firebase/firestore";
import './TinderCards.css';



function TinderCards() {
    const [people, setPeople] = useState([]);
    
    // pice of code that runs based on a condition
    useEffect(() => {
        //this will ruin ONE the component load and never again
        const getData = async() => {
            const dat = await getDocs(collection(db, 'people'));
            setPeople(dat.docs.map((doc) => ({...doc.data(), id: doc.id})))
        }

        getData();
       

    }, []);
    //console.log(people);
    //  every time the variable in the links changes the hook will refile

    return (
        <div className="container">
            {people.map((person) => {
                return<div className= "cardContainer">
                    <TinderCard className="swipe" key={person.name} preventSwipe={('up','down')}>
                        <div style={{ backgroundImage: `url(${person.url})` }} className="card">
                            <h3>{person.name}</h3>
                        </div>
                    </TinderCard>
                </div>
            })}
              
        </div>
    );
}

export default TinderCards;