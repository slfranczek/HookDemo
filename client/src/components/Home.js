import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <ul>
                <li><Link to="/usestate">useState</Link></li>
                <li><Link to="/useeffect">useEffect</Link></li>
                <li><Link to="/usecontext">useContext</Link></li>
            </ul>
        </div>
    );
}

export default Home;
