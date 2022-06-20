import React, { useEffect, useState } from 'react'

const App = () => {
  const [backendData, setBackendData] = useState([{}])
  useEffect(() => {
    fetch("/books/getDataUsers").then(
      response => response.json()
    ).then(
      data => {
        setBackendData(data)
      }
    )
  }, [])
  return (
    <div>
      {(typeof (backendData.map(items => items.name)) === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.map(item => (
          <p key={item.id}>{item.name}</p>
        ))
      )}
    </div>
  )
}

export default App