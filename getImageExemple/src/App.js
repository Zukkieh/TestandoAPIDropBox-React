import React, {
  useState,
  // useCallback,
  // useRef,
  // useEffect,
  useMemo,
  //useEffect
} from 'react';

// import { Dropbox } from 'dropbox';

import './App.css'

//USEMEMO EXEMPLE

// const fruits = ['BANANA', 'PERA', 'SALAME', 'ABACAXI'];

// function findNotFruit(arr){
//   console.log('a')
//   return arr.filter(f => f.includes('S'));
// }

export default function App() {

// USECALLBACK AND USEREF EXAMPLE
  // const [image, setImage] = useState('');
  // const [imageError, setImageError] = useState('');
  // const [imageName, setImageName] = useState('');
  // const dbx = new Dropbox({ fetch:fetch, accessToken: 'CHANGE TO DROPBOX API TOKEN' });
  // const didRun = useRef(true)

  // async function getInicialState(name){
  //   if(didRun.current)
  //       await dbx.filesGetTemporaryLink({path: `/${name}.jpg`}).then(res => setImage(res.link)).catch(error => setImageError(error))
  //   didRun.current = false
  // }

  // useCallback(getInicialState('POTATO'))

  // async function getTst(){
  //     await dbx.filesGetTemporaryLink({path: `/${imageName}.jpg`}).then(res => setImage(res.link)).catch(error => setImageError(error.status))
  // }

  // function handleChange(e){
  //   setImageName(e.currentTarget.value)
  // }

  // function clearLast() {
  //   setImageError('')
  //   setImage('')
  //   setImageName('')
  // }

// USEEFFECT CHANGE STATE
  // const [count, setCount] = useState(40)
  // useEffect(() => {
  //   // setCount(count + 20) DONT
  //   setCount(c => c + 20) // DO
  // }, [])

// USEMEMO EXEMPLE -> use the last exemple to test
  // const notFruit = useMemo(() => {
  //   return findNotFruit(fruits)
  // }, [])

  return (
    <div>
      {/* USECALLBACK AND USEREF EXAMPLE
      
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
      } */}


      {/* USEEFFECT CHANGE STATE
      
      <button onClick={() => setCount(count+1)}>+++++</button>
      */}

      {/* USEMEMO EXEMPLE
      
      <div>{count}</div>
      <div>{notFruit}</div> */}
    </div>
  );
}

