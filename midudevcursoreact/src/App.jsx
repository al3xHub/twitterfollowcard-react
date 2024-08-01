import './App.css'
import TwitterFollowCard from './TwitterFollowCard'

function App() {
  const formatUserName = (userName => `@${userName}`)

  return (
    <section className='app'>
    <TwitterFollowCard formatUserName={formatUserName} userName="omidnikrah" name="Omidnikrah Abdul"></TwitterFollowCard>
    <TwitterFollowCard formatUserName={formatUserName}  userName="pheralb" name="Pablo Hernandez"></TwitterFollowCard>
    </section>
  )
}

export default App
