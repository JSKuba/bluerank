import React from 'react'

function HomePage() {

  return (
    <section>
      <div className="container">
        <h1>RSS FEED APP</h1>
        <form method="GET" action={window.location.href + "search"}>
          <input name="feedURL" placeholder="Paste your RSS feed URL here" type="text" id="myInput" />
          <input value="Go!" type="submit" />
        </form>
      </div>
    </section>
  )
}

export default HomePage