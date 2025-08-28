import './App.css'
import Navigation from './components/Navigation/Navigation'
import Logo from './components/Logo/Logo'
import ImagelinkForm from './components/ImageLinkForm/ImageLinkForm'
import Rank from './components/Rank/Rank'
import FaceRecognition from './components/FaceRecognition/Facerecognition'
import SignIn from './components/SignIn/SignIn'
import ParticlesBg from 'particles-bg'
import { useState, } from 'react'
import Register from './components/Register/Register'

function App() {
 const API_URL = import.meta.env.VITE_API_URL;

  const [InputUrl, setInputUrl] = useState("");
  // const [url, seturl] = useState("");
  const [route, setroute] = useState("signin");
  const [faceBoxes, setFaceBoxes] = useState([]);
  const [user, setUser] = useState({
    id: "",
    name: "",
    email: "",
    entries: 0,
    joined: ""
  });

  const loadUsers = (data) => {
    setUser({

      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: new Date()
    });

  }
  const onbuttonsubmit = () => {

    fetch(`${API_URL}/face-detect`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageUrl: InputUrl }),
    })
      .then(res => res.json())
      .then(data => {
        setFaceBoxes(data.boxes || []);
        if (data) {
          fetch(`${API_URL}/image`, {
            method: "put",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: user.id }),
          }).then(res => res.json())
          .then(totalEntries => {
            
    setUser(prevUser => ({
      ...prevUser,
      entries: totalEntries.entries   // 🔥 always the exact value from server
    }));
  }).catch(err => console.log(err));
        }
      })
      .catch(err => console.error("error", err));
  };

  return (
    <>
      <ParticlesBg type="cobweb" bg={true} />
      {
        (route === "signin")
          ? <>
            <Navigation setroute={setroute} route={route} />
            <SignIn setroute={setroute} loadUsers={loadUsers} setInputUrl={setInputUrl}/>
          </>
          :
          <>
            {(route === "register")
              ?
              <>
                <Navigation setroute={setroute} route={route} />
                <Register setroute={setroute} loadUsers={loadUsers} setInputUrl={setInputUrl}/>
              </>
              :
              <>
                <Navigation setroute={setroute} route={route} />
                <Logo />
                <Rank name={user.name} entries={user.entries} />
                <ImagelinkForm setUrl={setInputUrl} onbuttonsubmit={onbuttonsubmit} />
                <FaceRecognition url={InputUrl} boxes={faceBoxes} />
              </>
            }
          </>
      }
    </>
  )
}

export default App
