import React, { useState } from 'react';
import TinderCard from 'react-tinder-card';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: 'steve jobs',
            url:
                "https://www.pioneeringminds.com/wp-content/uploads/2018/10/Steve-Jobs-1440x960.jpg",
        },
        {
            name: 'mark zuckerberg',
            url:
                "https://api.time.com/wp-content/uploads/2020/07/Mark-Zuckerberg-Surfing.jpg?quality=85&w=1024&h=628&crop=1",
        },

    ]);

// BAD
// const people = [];
// people.push('name', 'last name')

// GOOD
// setPeople([...people, 'name', 'last name'])

    return (
        <div>
            <h1>Tinder cards</h1>

            {people.map((person) => (
                <TinderCard
                    className="swipe"
                    key={person.name}
                    preventSwipe={["up", "down"]}
                >
                    <div
                        style={{ backgroundImage: `url(${person.url})` }}
                        className="card"
                    >
                        <h3>{person.name}</h3>
                    </div>
                </TinderCard>
            ))}
        </div>
    );    
}

export default TinderCards;
