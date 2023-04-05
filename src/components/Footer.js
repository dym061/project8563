import React from "react";
import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const startYear = 2021;

  return (
    <footer className="footer bgcol3 pt3 mt9 ">
	  <div className="con dflex dflexm jusspaceb mb5 txtcenterm">
	      <div className="px4 w40p w40pm">
		    <h5 className="txtupper txtfont3 txtbold pb2 pb2m txtcol5">About</h5>
			<div className="txtfont3 txtsize10 lheight16">We offer affordable, high-quality imported furniture from India and a wide range of products including clothes, lamps, and cushion covers. Each item is hand-picked for its intricate details and has a unique story to tell.</div><Link className="txtfont3 txtsize10 pointer footer_link" href="/about">Read More...</Link>
		  </div>
		  
		  <div className="">
		    <h5 className="txtupper txtfont3 txtbold pb2 txtcol5">Links</h5>
		    <ul className="txtfont3 txtsize10 ">
			  <li><Link className="pointer footer_link" href="/">Home</Link></li>
			  <li><Link className="pointer footer_link" href="/about">About</Link></li>
			  <li><Link className="pointer footer_link" href="/catalog">Catalog</Link></li>
			  <li><Link className="pointer footer_link" href="/contact">Contact</Link></li>
			</ul>
		  </div>

		  <div className="pb2">
		    <h5 className="txtupper txtfont3 txtbold pb2 txtcol5 ">Opening Hours</h5>
			<ul className="txtfont3 txtsize10 lheight16">
			  <li>Monday - Friday 9h00 - 16h00</li>
			  <li>Saturdays 9h00 - 13h00</li>
			</ul>
		  </div>		  
		  
		  <div className="">
		    <h5 className="txtupper txtfont3 txtbold pb2 txtcol5">Address</h5>
		    <ul className="txtfont3 txtsize10 lheight16">
			  <li>Corner of Nickel and Calcium str</li>
			  <li>Prosperita</li>
			  <li>Windhoek</li>
			  <li>Namibia</li>
			</ul>
		  </div>
	  </div>
	  <div className="p2 txtcenter txtfont3 bgcol2 txtsize13 lheight13 dflex dflexm hcenter1">
	   <div className="pr1">© Copyright Creatift 2023</div> 
	   <div className="txtsize13 pr1">Designed by </div>
	   <a target="_blank" href="https://www.facebook.com/ciestomedia" className="pointer">CiestoMedia</a>
	  </div>
    </footer>
  );
};

export default Footer;