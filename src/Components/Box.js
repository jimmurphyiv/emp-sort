import React from 'react';



const Box = (props) => {


    const person = props.output[0]
    
    return (
        <div className="emp-box">
            
            <br></br>
            <h1>{person.name.first} {person.name.last}</h1>
            <ul>
                <p>From: {person.city}, {person.country}</p>
                <p>Job Title: {person.title}</p>
                <p>Employer: {person.employer}</p>
            </ul>
            <br></br>
         <h3>Favorite Movies</h3>   
            <ol>
                <li>{person.favoriteMovies[0]}</li>
                <li>{person.favoriteMovies[1]}</li>
                <li>{person.favoriteMovies[2]}</li>
            </ol>
        </div>
    )
}
export default Box;