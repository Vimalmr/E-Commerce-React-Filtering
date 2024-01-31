import './Colors.css';
import Input from '../../Components/Input.jsx';

function Colors({handleChange}){
    return(
        <>
        <div>
            <h2 className="sidebar-title color-title">Colors</h2>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test1" value="" />
                <span className="checkmark all"></span>All
            </label>

            <Input handleChange={handleChange} value="black" color="black" title="Black" name="test1"/>
            <Input handleChange={handleChange} value="blue" color="blue" title="Blue" name="test1"/>
            <Input handleChange={handleChange} value="red" color="red" title="Red" name="test1"/>
            <Input handleChange={handleChange} value="green" color="green" title="Green" name="test1"/>

            <label className="sidebar-label-container">
                <input onChange={handleChange} type="radio" name="test1" value="white" />
                <span className="checkmark" style={{backgroundColor:"white", border:"2px solid black"}}></span>White
            </label>
        </div>
        </>
    );
}

export default Colors;