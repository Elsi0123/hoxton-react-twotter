import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LeftMenu } from './Components/LeftMenu'
import { MainMenu } from './Components/MainMenu'
import { RightMenu } from './Components/RightMenu'
import { Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  // const [posts, setPosts] = useState([
  //   {
  //     id: 1,
  //     user: "Elsi",
  //     title: "Photo with my family",
  //     likes: 10,
  //     src: "https://images.ctfassets.net/az3stxsro5h5/PN5eYL4R5zinDWRiWAFOn/cfdea360c0d02e914926b9cda1b6b919/Jun16-This_Is_How_the_Instagram_Algorithm_Works-Horizontal.png?w=920&h=800&q=50&fm=png",
  //   },
  //   {
  //     id: 2,
  //     user: "Nico",
  //     title: "Photo with my dog",
  //     likes: 20,
  //     src: "https://www.thelabradorsite.com/wp-content/uploads/2018/04/Does-My-Dog-Love-Me-As-Much-As-I-Love-Him_-LS-long.jpg",
  //   },
  // ]);

  return (
    <>
       <LeftMenu />
       <MainMenu />
       <RightMenu />
      
      <main className='mainapp'>
    <Routes>
    <Route path='/home' element= { <h1>home</h1> } />
     <Route path='/explore' element= { <h1>explore the nature</h1> } />
     <Route path='/notification' element= { <h1>notification</h1>} />
     <Route path='/messages' element= { <h1>messages</h1>} />
     <Route path='/bookmarks' element= { <h1>bookmarks</h1>} />
     <Route path='/lists' element= { <h1>lists</h1>} />
     <Route path='/profile' element= { <h1>profile</h1>} />
     <Route path='/more' element= { <h1>more</h1>} />
     <Route path='/tweet' element= { <h1>tweet</h1>} />

    </Routes>
    </main>
   
     
    </>
 
  )
}

export default App
