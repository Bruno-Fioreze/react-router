import { Link, useParams } from "react-router-dom"


function Product( ) {

    const { id }  = useParams();

    return (
     <>
        <h1>Meu Produto é {id}</h1>
        <Link to="/about"> Sobre </Link>
     </> 
    );
}
  
export default Product;