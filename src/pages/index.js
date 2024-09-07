import * as React from "react"
import { Link } from 'gatsby';


// TODO: Implement random pages here and on 404 via https://github.com/gatsbyjs/gatsby/issues/13869
const IndexPage = () => {
  return (
    <main>
      <div>Welcome. Click below to demo the MDX functionality.</div>
      <Link to="/Spaghetti">Spaghetti</Link>
    </main>
  )
}

export default IndexPage
