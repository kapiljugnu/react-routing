import { Link } from "react-router-dom";

export default function HomePage() {
  return <>
    <h1>Home page</h1>
    Goto <Link to="/products">list of products</Link>
  </>
}
