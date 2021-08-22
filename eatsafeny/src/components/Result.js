import React from 'react'
import { Link } from 'react-router-dom'

function Result({restaurant}) {

    const LetterGrade = () => {
        let grade = restaurant.grade
        let img = ""

        switch (grade) {
            case "A":
                img = "https://www.seriouseats.com/thmb/7EkSx1qKenXAntRe0yBBNNLs4po=/735x0/__opt__aboutcom__coeus__resources__content_migration__serious_eats__newyork.seriouseats.com__images__20100728sanitation-a8da5e2c374942af8b5acab819e7b4f8.jpg"
                break;
            case "B":
                img = "https://media.wnyc.org/media/photologue/photos/Grade%20Card_B_v2.jpg"
                break;
            case "C":
                img = "https://media.wnyc.org/media/photologue/photos/Grade%20Card_C_v2.jpg"
                break;
            default:
                img = "https://media.wnyc.org/media/photologue/photos/Grade%20Card_GradePending_v2.jpg"
        }

        return img
    }

    return (

        <div className="result">

            <img src={LetterGrade()} width="50px" alt="letter grade"/>
            <Link to={`/results/${restaurant.camis}`}>{restaurant.dba}</Link>
            <p>Reviewers Average rating: {<p className="slogans"> ✅ Covid-SAFE</p>} </p>
    
        </div>
    )
}

export default Result