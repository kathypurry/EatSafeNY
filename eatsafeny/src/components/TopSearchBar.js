import React from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button'

function TopSearchBar(props) {

    const handleSearchInput = (e) => {
        props.onChange({...props.value, [e.target.id]: e.target.value})
    }

    const SubmitButton = () => {
        if (props.value.borough){
            return (        
                <Link to="/results">
                    <Button size="sm" variant="warning" as="input" type="submit" value="Is it safe?" onClick={props.searchRestaurant} />
                </Link>  
            )
        } else {
            return(
                <Button size="sm" variant="warning" as="input" type="submit" value="Is it safe?" />
            )
        }
    }

    return (
        <div className="topBar">
            <form className="search-form"> 
                <input 
                    type="text" 
                    id="name" 
                    value={props.value.name} 
                    placeholder="Restaurant name" 
                    onChange={handleSearchInput}
                />

                <span> 
                    <label htmlFor="borough" value="required" id="required" ><h4>*</h4></label>
                    <select 
                        required
                        id="borough"
                        value={props.value.borough} 
                        onChange={handleSearchInput}
                    > 
                            <option value="" label="Borough" disabled></option>
                            <option value="Bronx">Bronx</option> 
                            <option value="Brooklyn">Brooklyn</option>
                            <option value="Manhattan">Manhattan</option>
                            <option value="Queens">Queens</option>
                            <option value="Staten Island">Staten Island</option>
                    </select>
                </span>

                <select 
                    id="letterGrade"
                    value={props.value.letterGrade} 
                    onChange={handleSearchInput}
                > 
                    <option value="" disabled >Letter Grade</option>
                    <option value="A">A</option> 
                    <option value="B">B</option>
                    <option value="C">C</option>
                </select>
                <SubmitButton />
            </form>
        </div>
    )
}

export default TopSearchBar
