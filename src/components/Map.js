import React from "react";
import styles from "../styles/map.module.css";

const Map = () => {
  return ( 
    <>
		<section className="con">
			<h1 className="h1 txtfont1 txtcenter pb3">Come visit us!</h1>
			<div className="pb5">
				<iframe 
				  className='map shadow1'
				  src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2142.920311956151!2d17.0809204857721!3d-22.621548516587072!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1c0b1bbdb8567813%3A0x312484888d757cca!2sCreatift!5e0!3m2!1sen!2sna!4v1680685684383!5m2!1sen!2sna' 
				>
				</iframe>				
			</div>
		</section>
	</>
  );
};

export default Map;
