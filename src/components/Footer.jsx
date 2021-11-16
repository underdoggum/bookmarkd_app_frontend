import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
  
  return (
    <div className="Footer">
        <footer>
          <p>Created by: Jameson 
            <a href="https://github.com/code-weather"><FontAwesomeIcon icon={faGithubAlt} pulse/></a> 
             , Lucy <FontAwesomeIcon icon={faGithubAlt} pulse /> and Nathan <FontAwesomeIcon icon={faGithubAlt} pulse /> | &copy; 2021</p>
        </footer>   
    </div>
  )
}

export default Footer
