import React, { useState, createContext, useEffect } from 'react';
import axios from 'axios';

export const JokeContext = createContext();

export const JokeProvider = (props) => {
    const [allJokes, setAllJokes] = useState([])

    useEffect(() => {
        axios.get("https://ckhot.herokuapp.com/")
            .then((response) => {
                setAllJokes(response.data)
            })
    }, [])

    return (
        <JokeContext.Provider value={[ allJokes, setAllJokes ]}>
            {props.children}
        </JokeContext.Provider>
    )
} 

