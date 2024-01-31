import './Products.css';
import Card from '../Components/Card.jsx';


function Products({result}){
    return(
        <>
        <section className='card-container'>
            {result}
        </section>
        </>
    );
}

export default Products;