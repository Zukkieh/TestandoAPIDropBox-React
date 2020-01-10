import React, {useEffect, useState} from 'react';

import { Dropbox } from 'dropbox';

import './App.css'

export default function App() {
  const [image, setImage] = useState([]);
  const [imageError, setImageError] = useState('');
  const dbx = new Dropbox({ fetch:fetch, accessToken: '<YOUR KEY IN HERE>' });

  useEffect( () => {
    async function getTst(name){
      await dbx.filesGetTemporaryLink({path: `/${name}.jpg`}).then(res => setImage(res.link)).catch(error => setImageError(error))
    }
    getTst('<IMAGE NAME>')
  }, [])


  return (
    <div>
      {imageError && <p>NOT FOUND</p>}
      {!imageError && <img className="img" src={image} alt='something'/>}
    </div>
  );
}
