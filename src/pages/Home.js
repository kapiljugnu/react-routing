import { Link, useNavigate } from "react-router-dom";

export default function HomePage() {
  const navigate = useNavigate();
  const navigateHandler = () => {
    navigate('/products')
  }
  return <>
    <h1>Home page</h1>
    <p>Goto <Link to="/products">list of products</Link></p>
    <p><button onClick={navigateHandler}>Products navigation</button></p>
  </>
}
