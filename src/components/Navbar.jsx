import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  return (
    <div className="nav-bar">
      {!navbar ? (
        <div
          className="nav-bar-icon"
          onClick={() => {
            setNavbar(!navbar);
          }}
        >
          <div className="nav-bar-icon-line"></div>
          <div className="nav-bar-icon-line"></div>
          <div className="nav-bar-icon-line"></div>
        </div>
      ) : (
        <div className="full-navbar">
          <div className="section" onClick={() => {setNavbar(!navbar); navigate("./")}}>
            &nbsp;Home&nbsp;
          </div>
          <div className="section" onClick={() => {setNavbar(!navbar);navigate("./encrypt")}}>
            &nbsp;Encryption&nbsp;
          </div>
          <div className="section" onClick={() => {setNavbar(!navbar);navigate("./decrypt")}}>
            &nbsp;Decryption&nbsp;
          </div>
          <div className="section" onClick={() => {setNavbar(!navbar);navigate("./")}}>
            &nbsp;Crypt Analysis&nbsp;
          </div>
          <div
            className="close"
            onClick={() => {
              setNavbar(!navbar);
            }}
          >
            X
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
