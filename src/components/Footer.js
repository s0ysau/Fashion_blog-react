import { Link } from "react-router-dom"
import Nav from "./Nav";

export default function Footer (props) {
  return (
    <div>
      <Link to="/">
        <div>Home</div>
      </Link>
      <Nav />
      <Link to="/">
        <div>Tips</div>
      </Link>
      <p className="copyright">2013 Valet Industries, Inc</p>
    </div>
  )
}