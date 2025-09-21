import './App.css'
import { PlaylistManager } from './components/PlaylistManager/PlaylistManager'
import SubscriptionManager from './components/SubscriptionManager/SubscriptionManager'
import Header from './components/header/header'
import Footer from './components/footer/footer'

function App() {
 
  return (
    <>
      <div>
        <Header/>
        <SubscriptionManager/>
        <PlaylistManager/>
        <Footer/>
      </div>
    </>
  )
}
 
export default App