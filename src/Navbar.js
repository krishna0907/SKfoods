import applelogo from "./apple-logo-white-clip-art-heart-plant-fruit-food-transparent-png-1642505.png";
import baglogo from "./pngwing.png";
// import "./App.css"
import "./Navbar.css"
function Navbar(props) {


    return (
        <div className="navbar">
            <div className="navbarsub">
                <div className="navbarsuub">
                    <div className="logo">
                        <img className="applelogo" src={applelogo} alt="" />
                    </div>
                    <div className="navtabnames">
                        {props.names.map((e) => (

                            <p className="fontcolor">{e}</p>

                        ))}

                    </div>
                    <div className="cart">
                        <div className="llogo">
                            <img className="cartlogo" src={baglogo} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Navbar;