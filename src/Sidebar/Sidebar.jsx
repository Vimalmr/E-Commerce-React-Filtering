import Category from './Category/Category.jsx';
import Price from './Price/Price.jsx';
import Colors from './Colors/Colors.jsx';
import './Sidebar.css';

function Sidebar(){
    return(
        <>
        <section className='sidebar'>
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category/>
            <Price/>
            <Colors/>
        </section>
        </>
    );
}

export default Sidebar;