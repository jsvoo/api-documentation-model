import "../styles/navigation.scss"
import logo from "../images/logo.jpeg"
export default function Navigation(){
    return(
        <div className="navigation-container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>

            <div className="links">
                <p>Home</p>
                <p>Docs</p>
                <p>GitHub</p>
                <p>Buy me a coffee</p>
            </div>
        </div>
    )
}