import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons'

const Footer = props => {
  
  return (
    <div className="Footer">
        <footer>
          <p>Created by: Jameson <a href="https://github.com/code-weather" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubAlt} pulse/></a> 
              ,   Nathan <a href="https://github.com/underdoggum" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubAlt} pulse/></a> and Lucy <a href="https://github.com/lucyliu94" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithubAlt} pulse /></a> | &copy; 2021</p>
        </footer>   
    </div>
  )
}

export default Footer
