import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

//https://gateway.marvel.com:443/v1/public/characters?apikey=f22d691e3da9c4ebc7d2482e7e78a994

//https://gateway.marvel.com:443/v1/public/comics?apikey=f22d691e3da9c4ebc7d2482e7e78a994

//key privada:677a3c1f56c00540be0aeb86ccd3b5bf0b1d6cce
//key public:f22d691e3da9c4ebc7d2482e7e78a994
//ts:1
//1677a3c1f56c00540be0aeb86ccd3b5bf0b1d6ccef22d691e3da9c4ebc7d2482e7e78a994
//hash:aeffdf45e13571f8b73c5067ce762bc2
function App() {

  const [personajes, setPersonajes]=useState([])

useEffect(()=>{
  axios.get('https://gateway.marvel.com:443/v1/public/comics?ts=1&apikey=f22d691e3da9c4ebc7d2482e7e78a994&hash=aeffdf45e13571f8b73c5067ce762bc2').then(res=>{
    setPersonajes(res.data.data.results)

  }).catch(error=>console.log(error))
},[])



  return (
    <div className="container">
     
    <h1>MARVEL</h1>
    <div className="App">
      <div className="row row-cols-1 row-cols-md-3 g-4">

        { personajes.map(per=>(

      <div className="col" key={per.id}>
      <div className="card" style={{width:"18rem", height:"18rem"}}>
     
      <a href={per.urls[0].url}><img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top"/></a> 
            <div className="card-body">
            <h5 className="card-title">{per.title}</h5>
            </div>
      </div>
      </div>
        ))
        }
    </div>
    </div>
    </div>
  );
}

export default App;
