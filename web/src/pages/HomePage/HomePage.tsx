import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />

      <h1>Welcome to the demo!</h1>
      <p>
        <Link to={routes.login()}>Login</Link>
        <br />
        <Link to={routes.tasks()}>Tasks</Link>
      </p>
    </>
  )
}

export default HomePage
