import { Link } from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark } from '@fortawesome/free-solid-svg-icons'


const Header = (props) => {
    return (
        <nav className="nav">
            <Link to="/" style={{ textDecoration: 'none' }}>
                <div className="header-title">Bookmark'd   <FontAwesomeIcon className="bookmark-icon" icon={faBookmark}/></div>
            </Link>
        </nav>
    )
}


export default Header;