import React, { useState }  from 'react'
import './App.css'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'

function App() {
  //this is the adder and subtract  use state practice code

  // <>
  //   const [count,setCount]= React.useState(0)
  //   console.log(count)

  // function add(){

  //   //NOTE!!!
  //   //in react we cannot assign value to variable directly like we used to do in js like count++
  //   //we cannot assign value anywhere so we simply add the value and it does the same thing
  
    //   //but what this prevCOunt will take the prev value of the count and update it 
    //   // so if I had to call this fucntion three times we will have our value 
    //   // updated three times but with the count+1 thing called three times we will not have 
    //   // the value updates three time and the vlaue will be remaining same


  //   setCount(prevCount=>prevCount+1)//we can also use count+1
  // }

  // function minus(){
  //   setCount(prevCount=>prevCount-1)
  // }

  // <h1>Is State important to know?</h1>
  //     <h2 >{count}</h2>
  //     <button onClick={add}>click to increase count</button> 
  //     <button onClick={minus}>click to decrease count</button>
  // </>
  // <>
  // //this is the example practice for adding an array to display 
  // // const [myFavoriteThings,setMyFavoriteThings]= React.useState([])

  // // const allFavoriteThings =["@","#","$","%","^","&"]

  // // const thingsElements = myFavoriteThings.map(thing=><p key={thing}>{thing}</p>)

  // // function addFavoriteThings(){
  //   //   setMyFavoriteThings(
  //     //     prevFavThings=>[...prevFavThings,allFavoriteThings[prevFavThings.length]]
  //     //   )
  //     // }
  //  <button onClick={addFavoriteThings}>Add Items</button>
  //  <div>
  //    {thingsElements}
  //  </div> */}
  //     //</>
      
  return (
    <>
    <div className='wrapper'>
      <Header/>
      <MainContent/>
    </div>
      <Footer/>

    </>
  )
}

export default App
