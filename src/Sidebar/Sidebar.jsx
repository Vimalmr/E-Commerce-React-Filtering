import Category from './Category/Category.jsx';
import Price from './Price/Price.jsx';
import Colors from './Colors/Colors.jsx';
import './Sidebar.css';

function Sidebar({handleChange}){
    return(
        <>
        <section className='sidebar'>
            <div className="logo-container">
                <h1>🛒</h1>
            </div>
            <Category handleChange={handleChange}/>
            <Price handleChange={handleChange}/>
            <Colors handleChange={handleChange}/>
        </section>
        </>
    );
}

export default Sidebar;