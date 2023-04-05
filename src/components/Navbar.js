import React, { useState }  from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";

const Navbar = () => {
	
  const router = useRouter();
  
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bgcol3">
      <div className="dflex dflexm txtcenterm jusspaceb con">
        <div className=" vcenter2">
          <div className="txtfont1 t5 t5m txtcenter pl2">Creatift</div>
        </div>
          <div className="myauto txtfont2 txtupper mr2 noborderm border bordercol2 bordertop1">
            we offer only the unique
          </div>		
        <nav className="dflex ">

		     <div className="normal">
             <ul className="dflex vcenter2 ">
              <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 m2 navbar_link ${
					router.pathname === "/" ? "active" : ""
					}`}
                  href="/"
                >
                  Home
                </Link>
              </li>

              <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 m2 navbar_link ${
					router.pathname === "/about" ? "active" : ""
					}`}
                  href="/about"
                >
                  Our Story
                </Link>
              </li>

              <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 m2 navbar_link ${
					router.pathname === "/catalog" ? "active" : ""
					}`}
                  href="/catalog"
                >
                  Our Catalog
                </Link>
              </li>

              <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 m2 navbar_link ${
					router.pathname === "/contact" ? "active" : ""
					}`}
                  href="/contact"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>			

          <GiHamburgerMenu className="hamburger-icon h5 m2 mxauto" onClick={toggleMobileMenu} />
          {isMobileMenuOpen && (
		    <div>
			
            <ul className="mobile-nav zindex1">
			  <li>
			  <ImCross className="txtcol1 txtsize24 posrel" onClick={toggleMobileMenu} />
			  </li>
              <li>
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 navbar_link ${router.pathname === "/" ? "active" : ""}`}
                  href="/"
                  onClick={toggleMobileMenu}
                >
                  Home
                </Link>
              </li>

              <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 navbar_link ${
                    router.pathname === "/about" ? "active" : ""
                  }`}
                  href="/about"
                  onClick={toggleMobileMenu}
                >
                  Our Story
                </Link>
              </li>

              <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 navbar_link ${
                    router.pathname === "/catalog" ? "active" : ""
                  }`}
                  href="/catalog"
                  onClick={toggleMobileMenu}
                >
                  Our Catalog
                </Link>
              </li>
			  
             <li className="">
                <Link
                  className={`txtfont2 txtupper border bordercol2 border1 borderround1 p2 navbar_link ${
                    router.pathname === "/contact" ? "active" : ""
                  }`}
                  href="/contact"
                  onClick={toggleMobileMenu}
                >
                  Contact Us
                </Link>
              </li>			  
            </ul>
			</div>
          )}
			
        </nav>
      </div>
    </div>
  );
};

export default Navbar;