import './App.css'
import { PlaylistManager } from './components/PlaylistManager/PlaylistManager'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {

  return (
    <>
      <div>
        <Header/>
        <PlaylistManager/>
        <Footer/>
      </div>
    </>
  )
}

export default App
