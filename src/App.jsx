/*Problem statement - Candidate votes
Time Limit (30 - 45 mins)


## Requirements

Create a list of candidates, showing their name, vote count, and buttons to add/subtract votes
 Create a small form which has an input box for candidate names and a SUBMIT button to add candidate names. 
Writing a name in this box and clicking "SUBMIT" should add this candidate name in the list with vote count: 0
Show the list in the order of descending number of <votes></votes>*/

import React, { useState } from 'react'

function App() {

  const [voters, setVoters] = useState([])
  const [input, setInput] = useState('')

  const voter = {id: Date.now() ,name: input, vote: 0}

  const handleInput = (e) => {
    setInput(e.target.value)
  }

  const handleSubmit = () => {
    setVoters([...voters, voter])
  }

  const dec = (id) => {
    setVoters((prevVoters) =>
    prevVoters.map((voter) => 
    voter.id === id ? {...voter, vote: voter.vote-1} : voter
    )
    )
  }

  const inc = (id) => {
    setVoters((prevVoters) =>
    prevVoters.map((voter) => 
    voter.id === id ? {...voter, voter: voter.vote+1} : voter
    )
    )
  }

  return (
    <div>
      <input
      type= 'text'
      placeholder = 'Enter your name'
      value = {input}
      onChange = {handleInput}
      />
      <button onClick = {handleSubmit}>Add</button>
      <div>
        {voters.map((voter) => {
          return (
            <ol key = {voter.id}>
              {voter.name}
              <button disabled = {voter.vote<0} onClick = {() => dec(voter.id)} >-</button>
              {voter.vote}
              <button onClick = {() => inc(voter.id)}>+</button>
            </ol>
          )
        })}
      </div>
    </div>
  )
}

export default App
