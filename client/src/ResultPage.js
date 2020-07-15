import React, { useEffect, useState } from 'react'

import Result from './components/Result'

function ResultPage() {

  const [apiResponse, setApiResponse] = useState(undefined);

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search)
    const url = urlParams.get('feedURL')
    fetch(`http://localhost:3000/fetch/${encodeURIComponent(url)}`)
      .then(res => res.text())
      .then(res => JSON.parse(res))
      .then(res => setApiResponse(res))
  },[])

  return (
    <section>
      <div className="container">
        <h1>Rezulat</h1>
          <Result apiResponse={apiResponse}/>
      </div>
    </section>
  )
}

export default ResultPage