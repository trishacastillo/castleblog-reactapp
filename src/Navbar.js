import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Castle Blog</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{ 
          color: 'white', 
          backgroundColor: '#f1356d',
          borderRadius: '8px' 
        }}>New Blog</Link>
      </div>
    </nav>
  ); 
    return (  
        <nav className="navbar">
            <h1>The Castle Blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create" style={{
                    color:"white"
                }}>New Blog</a>
               
            </div>
        </nav>
    );
}
 
export default Navbar;
