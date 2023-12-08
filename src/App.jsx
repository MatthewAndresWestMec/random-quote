import './App.css'; import { useState, useEffect } from "react"; 
import { FiRefreshCw } from "react-icons/fi";

function App() {
  const [quote, setQuote] = useState('Quote')
  const [author, setAuthor] = useState('Author')

  const max = 150
const Quote = () => {
  let url = 'https://api.quotable.io/random'
  fetch(url).then((response) => {
    if (response.status >= 200 && response.status <= 299) { return response.json()} else {
        throw new Error(response.statusText)
    }
}).then((quote) => {
  if(quote.length <= max){
    setQuote(quote.content)
    setAuthor(`- ${quote.author}`)
  }else{
  Quote()
  }
}).catch((error) => { console.log(error) })
}


useEffect(() => {
 Quote()
}, [])

    return (
      <>
        <div>
          
          <div class="container">
          <img class="fog" src="https://64.media.tumblr.com/224f9198d5d88a5e92e43f5ef4f7a592/139ff9bb70edd708-66/s540x810/0edbf6d586b6b4c85c5bd61569992f036c21191b.png" alt="fog1.png"/>
          </div>

          <div className='box'>
              <h1 className='fade-in-text quote-box'>{quote}</h1>
              <br></br>
              <h2 className='fade-in-text'><button onClick={() => {Quote()}}><FiRefreshCw /></button>{author}</h2>
          </div>
        </div>     
      </>
      
    )
}
export default App;