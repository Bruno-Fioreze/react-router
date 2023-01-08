import { Link } from "react-router-dom"

function Home() {
    return (
     <>
        <h1>Chegou no Home</h1>
        <Link to="/about"> Sobre </Link>
     </> 
    );
}
  
export default Home;