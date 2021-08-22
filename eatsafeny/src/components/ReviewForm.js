import React, { useState} from 'react';
// import {useHistory, withRouter} from 'react-router-dom';
// import axios from 'axios';
// import {apiURL} from '../util/apiURL.js';
// const API = apiURL();

function ReviewForm () {
// let history = useHistory();

// const addReview = (newReview) => {
//     axios.post(`${API}/reviews`, newReview).then(() => {
//         history.push(`/reviews`);
//     }, (error) => console.log(error)
//     ).catch((c) => console.warn("catch", c));
// }

const [review, setReview] = useState({
    date: '',
    img: '',
    review: '',
    rating: 1,
})

const handleTextChange = (event) => {
    setReview({...review, [event.target.id] : event.target.value})
}

// const handleCheckBox = () => {
//     setReview({...review, is_covidfriendly: !review.is_covidfriendly})
// }

const handleSubmit = (event) => {
    event.preventDefault();
    // addReview(review)
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <label htmlFor="date">Date:</label>
            <input type="text"
            id="date"
            // value={review.date}
            onChange={handleTextChange}
            required
            />
    
            <label htmlFor="img">Image:</label>
            <input type="text" 
            id="img"
            value={review.img}
            //pattern="http[s]*://.+"
            placeholder="http://"
            onChange={handleTextChange}
            />
            <label htmlFor="review">Review:</label>
            <input type="text"
            id="review"
            value={review.review}
            onChange={handleTextChange}
             />
             <label htmlFor="rating">Covid Safety</label>
             <input type="number" 
             id="rating"
             value={review.rating}
             placeholder="1"
             min="1" 
             max="5"
            //  onChange={}
             />
             <input type="submit" />
        </form>

    </div>

 )
}

export default ReviewForm;