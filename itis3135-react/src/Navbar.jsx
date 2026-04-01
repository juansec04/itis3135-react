import { Link } from 'react-router-dom';
export default function Navbar() {
    return  (
    <>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/contract">Contract</Link>
            <Link to="/survey">Survey</Link>
            <Link to="/cards">Cards</Link>
        </nav>
    </>
    )
}