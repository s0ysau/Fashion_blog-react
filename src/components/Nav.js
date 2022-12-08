import { Link } from "react-router-dom"

export default function Nav (props) {
  return (
    <h4>
      <Link to="/">
        <div>Women's</div>
      </Link>
      <Link to="/">
        <div>Men's</div>
      </Link>
      <Link to="/">
        <div>On The Street</div>
      </Link>
      <Link to="/">
        <div>The Catwalk</div>
      </Link>
      <Link to="/">
        <div>Adwatch</div>
      </Link>
      <Link to="/">
        <div>About</div>
      </Link>
    </h4>
  )
}