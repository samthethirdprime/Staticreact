
import logo from '../react-logo.png'
export default function NavBar() {
    return(
        <header className="header">
            <nav>
                <img src={logo} alt="reactlogo"  className="logo"></img>
            <span>React Facts</span>
            </nav>

        </header>
    )
}
