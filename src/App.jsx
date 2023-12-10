import {useState} from 'react'
import { puppyList } from './data.js'
import './App.css'

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);
  const featuredPup = puppies.find((pup) => pup.id === featPupId)
  console.log(featuredPup)
  console.log("puppyList: ", puppyList);
  return (
      <div className="App">
        <h1>Puppy Pals</h1>
        <img alt = "puppy" src="https://ih1.redbubble.net/image.4820283200.6502/bg,f8f8f8-flat,750x,075,f-pad,750x1000,f8f8f8.u1.jpg"/>
        {
          puppies.map((puppy) => {
            return (<p onClick={() => {setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>);
          })
        }
        { featPupId && (
        <div>
          <h2>{featuredPup.name}</h2>
          <ul>
            <li>Age: {featuredPup.age}</li>
            <li>Email: {featuredPup.email}</li>
          </ul>
        </div>        
        )}
      </div>
  );
}

export default App
