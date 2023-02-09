import "../styles/sidebar.scss"
export default function Sidebar() {
    return (
        <div className="sidebar-container">
            <div className="item">
                <h2>Products</h2>
                <p>Get all products</p>
                <p>Get a single product</p>
                <p>Limit results</p>
                <p>Sort results</p>
                <p>Get all categories</p>
                <p>Get in category</p>
                <p>Add new product</p>
                <p>Update a product</p>
                <p>Delete a product</p>
            </div>

            <div className="item">
            <h2>Cart</h2>
                <p>Get all</p>
                <p>Get a single </p>
                <p>Limit results</p>
                <p>Sort results</p>
                <p>Get in date range</p>
                <p>Get user cart</p>
                <p>Add new cart</p>
                <p>Update a cart</p>
                <p>Delete a cart</p>
            </div>

            <div className="item">
                <h2>Users</h2>
                <p>Get all users</p>
                <p>Get a single user</p> 
                <p>Limit results</p>
                <p>Sort results</p> 
                <p>Add a user</p> 
                <p>Update a user</p>
                <p>Delete a user</p>
            </div>
            
              <div className="item">
                <h2>Login</h2>
                <p>User Login</p>
            </div>




        </div>
    )
}