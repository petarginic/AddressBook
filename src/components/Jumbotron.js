import React from 'react'

const Jumbotron = ({getRandomQuote,quote}) => {

  const handleGetQuote = () => {
    return () => {
      getRandomQuote()
    }
  }

  return (
    <div className="jumbotron mb-3 mt-3 shadow w-75">
        <h1 className="display-4">Hello there</h1>
        <p className="lead">Welcome to my address book. I fetched API from jsonplaceholder for users and quotes and displayed right below.</p>
        <hr className="my-4" />
        <p>I made this jumbotron just to look nicer and put button where you can get random quote. Learn something new every day!</p>
        <p className="lead">
            <button className="btn btn-success btn-md" onClick={handleGetQuote()} >Get random quote</button>
        </p>
        <p> {quote ? <> <span className="font-weight-bold"> {quote.text} </span> <br/> <span className="font-italic">{quote.author}</span> </> : null }</p>
       
    </div>
  )
}

export default Jumbotron