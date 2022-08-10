import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { LeftMenu } from './Components/LeftMenu'
import { MainMenu } from './Components/MainMenu'
import { RightMenu } from './Components/RightMenu'

function App() {
  const [count, setCount] = useState(0)
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "Elsi",
      title: "Photo with my family",
      likes: 10,
      src: "https://images.ctfassets.net/az3stxsro5h5/PN5eYL4R5zinDWRiWAFOn/cfdea360c0d02e914926b9cda1b6b919/Jun16-This_Is_How_the_Instagram_Algorithm_Works-Horizontal.png?w=920&h=800&q=50&fm=png",
    },
    {
      id: 2,
      user: "Nico",
      title: "Photo with my dog",
      likes: 20,
      src: "https://www.thelabradorsite.com/wp-content/uploads/2018/04/Does-My-Dog-Love-Me-As-Much-As-I-Love-Him_-LS-long.jpg",
    },
  ]);

  return (
    <div className="app">
       <LeftMenu />
       <MainMenu />
       <RightMenu />
      </div>
  )
}

export default App
