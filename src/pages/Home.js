import React from 'react'
import Box from '../components/Box'
import { JokeContext } from '../contexts/JokeContext'
import Navbar from '../components/Navbar'
import Spinner from '../components/Spinner'
import Pusher from 'pusher-js';

function Home() {

  let [allJokes, setAllJokes] = React.useContext(JokeContext)
  console.log(allJokes)

  // allJokes.sort(() => Math.random() - 0.5)

  React.useEffect(() => {
    var pusher = new Pusher('23d131fade147e982772', {
      cluster: 'eu'
    });

    var channel = pusher.subscribe('jokes');
    channel.bind('updated', function(data) {
      allJokes.find((o, i) => {
        if (o._id === data.id) {
          setAllJokes(prevState => [
            ...prevState, 
            allJokes[i].likes = data.likes
          ])        
        }
      })
    });
  })

  let mappedJokes = allJokes.map(element => (
      <Box id={element._id} text={`"${element.text}"`} likes={element.likes}/>
  ))

  

  return (
    <div>
      <Navbar home='active' />
      <section className='boxes'>
        { allJokes.length ? mappedJokes : <Spinner />}
      </section>
    </div>
  )
}

export default Home