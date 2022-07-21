import { useState } from 'react';
import { useHistory } from 'react-router-dom';

//Styles
import './Searchbar.css';

const Searchbar = () => {

    const [term, setTerm] = useState()
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault()
        history.push(`/search?q=${term}`);
    }

    return (
       <div className="searchbar">
            <form action="" className="" onSubmit={handleSubmit}>
                <label htmlFor="searchbar" className="">Search:</label>
                <input type="text" className="" id = "searchbar" onChange={(e) => setTerm(e.target.value)} />
            </form>
       </div>

      );
}
 
export default Searchbar;