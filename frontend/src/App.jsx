
import ArabicGrid from './cities'
import './App.css'
import ElectionCircleSelection from './listtype'
import VotingCandidatesGrid from './local_voting.jsx'
function App() {

  return (
    <>
     <VotingCandidatesGrid/>
    <ElectionCircleSelection/>
    <ArabicGrid/>
    </>
  )
}

export default App
