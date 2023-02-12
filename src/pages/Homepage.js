import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../styles/homepage.scss"
import { BiCube } from "react-icons/bi"
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
                        <div className="products">
                            <h2> <BiCube /> Products</h2>

                            <div className="all">
                                <h3>Get all products</h3>
                                <div className="input-section">
                                    <div className="input">

                                        {`  fetch('https://fakestoreapi.com/products')

`}
                                        {`.then(res=>res.json()) `}
                                        {`.then(json=>console.log(json))`}
                                    </div>
                                </div>
<button className="hide-btn">
    Hide output
</button>
                                <div className="output-section">
                                    <div className="output">
                                        {`     //Output
                                    [
                                    {
                                        id:1,
                                    title:'...',
                                    price:'...',
                                    category:'...',
                                    description:'...',
                                    image:'...'
                },
                                    /*...*/
                                    {
                                        id:30,
                                    title:'...',
                                    price:'...',
                                    category:'...',
                                    description:'...',
                                    image:'...'
                }
                                    ]`}
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}