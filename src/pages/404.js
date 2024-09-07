import * as React from "react"
import { Link } from 'gatsby';

const IndexPage = () => {
  return (
    <main>
      <h1>404</h1>
      <div>Either this page doesn't exist, or I've opted to not publish it.</div>
      <div>If you suspect it exists, ask me about it! I typically refrain from publishing due to web scrapers making my ephemeral thoughts permanent, not because I dislike sharing ideas with friends.</div>
      <br/>
      <div>While you're here, why not visit a random article?</div>
      <Link to="/Cocktails">(WIP, not random yet)</Link>
      <br/>
      <br/>
      <div>Or, just return to the main page.</div>
      <Link to="/Stuff you the reader might like">Stuff you the reader might like</Link>
    </main>
  )
}

export default IndexPage
