import React from 'react'
import { JokeContext } from '../contexts/JokeContext'
import './comp.css'
import axios from 'axios'

function Box(props) {

  let [allJokes, setAllJokes] = React.useContext(JokeContext)

  function likePost(e) {
    let id = e.target.classList[e.target.classList.length - 1]
    let likeCount = e.target.textContent

    axios.post("https://ckhot.herokuapp.com/", {
      id: id,
      likes: likeCount
    })
  }

  return (
    <div className='box'>
      <div className='box-title'>
        {props.text}
      </div>

    <div className={'likes ' + props.id}>

      <div onClick={likePost} className={'box-likes like-btn ' + props.id}>
          {props.likes}
      </div>

    </div>
    </div>
  )
}

export default Box