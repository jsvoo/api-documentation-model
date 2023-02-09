import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../styles/homepage.scss"
export default function Homepage() {
    return (
        <> 
            <div className="homepage-container">
                <div className="sidebar">
                    <Sidebar />
                </div>
                <div className="content">
                    <Navigation />
                    <div className="body">
                        Body Here
                    </div>
                </div>
            </div>
        </>
    )
}