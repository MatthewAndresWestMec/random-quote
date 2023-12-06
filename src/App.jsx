import './App.css'; import { useState, useEffect } from "react"; 
import { FiRefreshCw } from "react-icons/fi";

function App() {
  const [quote, setQuote] = useState('Quote')
  const [author, setAuthor] = useState('Author')

const Quote = () => {
  let url = 'https://api.quotable.io/random'
  fetch(url).then((response) => {
    if (response.status >= 200 && response.status <= 299) { return response.json()} else {
        throw new Error(response.statusText)
    }
}).then((quote) => {
  setQuote(quote.content)
  setAuthor(`- ${quote.author}`)
}).catch((error) => { console.log(error) })
}


useEffect(() => {
 Quote()
}, [])

    return (
      <div>
        <div className='box'>
            <h1>{quote}</h1>
            <br></br>
            <h2><button onClick={() => {Quote()}}><FiRefreshCw /></button>{author}</h2>
        </div>
      </div>
    )
}
export default App;