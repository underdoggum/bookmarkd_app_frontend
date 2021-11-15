import {Link} from "react-router-dom"

const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/">
                <div className="div-header">Bookmark'd</div>
            </Link>
        </nav>
    )
}

export default Header;