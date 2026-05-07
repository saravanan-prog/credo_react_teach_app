
import { Link } from "react-router-dom";


export default function Header(){



    return <div>
        <nav className="nav">
          <div className="nav-item">
               <Link to="/home">home</Link>
          </div>
          <div className="nav-item">
                <Link to="/about">about</Link>
          </div>
          <div className="nav-item">
                <Link to="/blog">blog</Link>
          </div>
          <div className="nav-item">
              <Link to="/contact">contact</Link>
          </div>
        </nav>
    </div>
}