import { useState } from 'react'
import { User } from "./types"
import UserDisplay from "./components/UserDisplay"


function App() {
  const users: User[] = [
    {
      name: 'Mitchell Mudd',
      messages: [{
        body: 'Good job learning GraphQL'
      }, {
        body: 'Primsa is pretty cool'
      }]
    }
  ]

  return (
    <div className="bg-zinc-800 flex-col h-screen w-full flex items-center justify-center p-4 gap-y-12 overflow-scroll">
    {
      users.map((user, i) => <UserDisplay user={user} key={i}/>)
    }
  </div>
  )
}

export default App
