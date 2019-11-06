import React, { useState } from 'react'
import Quote from './components/Quote'


const App = () => {
  const [entry, setEntry] = useState([
    {
      content: 'Where are my duckin bitches',
      id: 1
    }
  ])
  const [newQuote, setNewQuote] = useState('')


  const rows = () => entry.map(e =>
    <Quote
      key={e.id}
      quote={e}
    />
  )


  const addQuote = (event) => {
    event.preventDefault()
    const quoteObject = {
      content: newQuote,
      id: entry.length + 1
    }

    setEntry(entry.concat(quoteObject))
    setNewQuote('')
  }



  const handleQuoteChange = (event) => {
    setNewQuote(event.target.value)
  }
  return (
    <div>
      <h1>Bagijnhof 8 Virtual Wall</h1>
      <h2>Add a quote</h2>
      <form onSubmit={addQuote}>
        <div>
          Quote:
           <input value={newQuote}
            onChange={handleQuoteChange} />
        </div>
        <div>
          name: <input />
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Quotes</h2>
      <u1>
        {rows()}
      </u1>
    </div>
  )
}

export default App