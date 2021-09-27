import React, { useState } from "react";
import { AppBar } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
function Navbar() {
  const [ShowMenu, setShowMenu] = useState(false);
  return (
    <div>
      {ShowMenu && (
        <div>
          <AppBar
            className="AnimationHoverNavbar"
            style={{ height: "100vh", backgroundColor: "white" }}
          >
            <p style={{ color: "red" }}>adz</p>
            <MenuIcon
              style={{ backgroundColor: "black" }}
              onClick={() => setShowMenu(!ShowMenu)}
            />
          </AppBar>
        </div>
      )}

      <AppBar  style={{color:"black" , backgroundColor:"white" , boxShadow:"none" }} >
        <div style={{width:"100%"}} className="pt-4 pb-4 flex mx-widht1400 ">
          <div className="flex ml-10 widht-10pr widhtReposive ">
            <img className="widht-50pr widhtImageReposive" src="logo.svg" />
          </div>
          <div className="flex widht90pr displanoneReposiveNavbar widhtReposive NotoSans justify-end	pt-8 pt-8Reposive  mr-10">
            <p className="pr-8 text-sm	">Home</p>
            <p className="pr-8 text-sm	">Product</p>
            <p className="pr-8 text-sm	">Services</p>
            <p className="pr-8 text-sm	">Register</p>
            <p className="text-sm	">Login</p>
          </div>
          <div className="widht-50pr displaynoneRepsoive1600 flex justify-end m-6">
            <MenuIcon onClick={() => setShowMenu(!ShowMenu)} />
          </div>
        </div>
      </AppBar>
    </div>
  );
}

export default Navbar;
