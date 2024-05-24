import { Link } from "react-router-dom";
import "./assets/css/templatemo-sixteen.css";


const Nav_cat = () => {
    return (
        <><div className="nav-cat">
            <h1>Browse by</h1>
            <span className="bar"></span>
            <div className="Links">
                <Link to="/All Products">
                    <a>All Products</a>
                </Link>
                <Link to="/Wheels & Rims">
                    <a>Wheels & Rims</a>
                </Link>
                <Link to="/Accessories">
                    <a>Accessories</a>
                </Link>
                <Link to="/Engine">
                    <a>Engine</a>
                </Link>
                <Link to="/BodyParts">
                    <a>BodyParts</a>
                </Link>
            </div>

        </div>

        </>
    )
}
export default Nav_cat;