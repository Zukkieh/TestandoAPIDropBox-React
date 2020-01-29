import React, {
  useState,
  useCallback,
  useRef,
} from 'react';

import { Dropbox } from 'dropbox';

import './App.css'


export default function App() {

  const [image, setImage] = useState('');
  const [imageError, setImageError] = useState('');
  const [imageName, setImageName] = useState('');
  const dbx = new Dropbox({ fetch:fetch, accessToken: 'CHANGE TO DROPBOX API TOKEN' });
  const didRun = useRef(true)

  async function getInicialState(name){
    if(didRun.current)
        await dbx.filesGetTemporaryLink({path: `/${name}.jpg`}).then(res => setImage(res.link)).catch(error => setImageError(error))
    didRun.current = false
  }

  useCallback(getInicialState('POTATO'))

  async function getTst(){
      await dbx.filesGetTemporaryLink({path: `/${imageName}.jpg`}).then(res => setImage(res.link)).catch(error => setImageError(error.status))
  }

  function handleChange(e){
    setImageName(e.currentTarget.value)
  }

  function clearLast() {
    setImageError('')
    setImage('')
    setImageName('')
  }

  return (
    <div>
      
      {imageError && 
      <>
        <p>NOT FOUND</p>
        <button onClick={clearLast}>BACK</button>
      </>
      }
      {!imageError &&
        <>
          <input type='text' value={imageName} onChange={handleChange}/>
          <button onClick={async () => await getTst()}>SEARCH</button>
          <br/>
          <br/>
          {image && <img className="img" src={image} alt='something'/>}
        </>
      }
    </div>
  );
}

