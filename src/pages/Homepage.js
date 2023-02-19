import Navigation from "../components/Navigation";
import Sidebar from "../components/Sidebar";
import "../styles/homepage.scss";
import { BiCube } from "react-icons/bi";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
export default function Homepage() {
  const [list, setList] = useState([]);

  useEffect(() => {
    handleGetList();
  }, []);

  function handleGetList() {
    axios
      .get("https://reworkacademy.co/app/v2/apis/5vc6wk4wmldr6bzq7/content")
      .then((resp) => {
        setList(resp.data.api);
      });
  }
  console.log(list);
  return (
    <>
      <div className="homepage-container">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="content">
          <Navigation />
          {/* <div className="body">
            <div className="products">
              <h2>
                {" "}
                <BiCube /> Products
              </h2>

              <div className="all">
                <h3>Get all products</h3>
                <div className="input-section"> 
                  <pre className="input">
                    fetch(<span className="link">'https://fakestoreapi.com/products'</span>) <br />
                    .then(res=>res.json()) <br />
                    .then(json=>console.log(json))
                  </pre>
                </div>
                <button className="hide-btn">Hide output</button>
                <div className="output-section">
                  <pre className="output">
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
                                   
                                    {
                                        id:30,
                                    title:'...',
                                    price:'...',
                                    category:'...',
                                    description:'...',
                                    image:'...'
                }
                                    ]`}
                  </pre>
                </div>
              </div>
            </div>
          </div> */}

          {list.length
            ? list.map((api, i) => {
                return (
                  <div className="body" key={i}>
                    <div className="products">
                      <h2>
                        {" "}
                        <BiCube /> {api.name}
                      </h2>

                      {api.routes.map((item, i) => {
                        return (
                          <div className="all" key={i}>
                            <h3>{item.caption}</h3>
                            <div className="input-section">
                              {api.name !== "Login" && item.method === "POST" ||
                              item.method === "PUT"  || item.method === "DELETE"  ? (
                                <pre className="input">
                                  {`fetch(base_url${item.route},{

        method:"${item.method}", 
        body:JSON.stringify({
        title: 'test product',
        price: 13.5,
        description: 'lorem ipsum set',
        image: 'https://i.pravatar.cc',
        category: 'electronic'  })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))`}
                                </pre>
                              ) : item.method === "POST" &&
                                api.name === "Login" ? (
                                <pre className="input">
                                  {` fetch('base_url${item.route}',{
      
        method:"${item.method}",
        body:JSON.stringify({
        username: 'onojavoo',
        password: *************, 
        })
    })
    .then(res=>res.json())
    .then(json=>console.log(json))`}
                                </pre>
                              ) : (
                                <pre className="input">
                                  fetch(
                                  <span className="link">
                                    ` base_url{item.route}`
                                  </span>
                                  ) <br />
                                  .then(res=>res.json()) <br />
                                  .then(json=>console.log(json))
                                </pre>
                              )}
                            </div>
                            <button className="hide-btn">Hide output</button>
                            <div className="output-section">
                              <pre className="output">
                                {
                                  // item.success.data[0]
                                }
                              </pre>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </>
  );
}
