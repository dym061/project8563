import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";

const About = () => {
  return (
	<>
	  <Navbar />
	  <section className="con m2 py1">
	    <h1 className="h1 txtfont1 txtcenter">Our Story</h1>
		  <div className="txtfont3 txtcol4 txtsize16 lheight24 pt3">

			<div className="dflex dflexm pb5 customborder1">
				<img className="about_img shadow1 mr3 customborder1 mautom" src="/images/store2.png" alt="Store Picture"/>
				<div>
				    <div className="border borderbottom1 bordercol3 mb4"/>	
					<p className="about_p pb3 p2m">Welcome to Creatift, the ultimate destination for those who love unique and exquisite items with a story to tell. For over 17 years, our owner, Elsada Kruger, has been travelling the world to handpick the most beautiful and high-quality pieces of furniture, decor, textiles, and clothing to bring back to Namibia.</p>

					<p className="about_p pb3 p2m">Our store is filled with treasures from India, Indonesia, and Bali, all with a wonderful history and story behind them. Each item is carefully selected, with a focus on intricate details and unique craftsmanship that can transform any space into a luxurious paradise. We don't believe in following trends, we believe in setting them, and that's exactly what we offer with our modern and unique range of furniture and decor.</p>

					<p className="about_p pb3 p2m">At Creatift, we're passionate about reclaimed wood and preserving its beauty and history. Most of our furniture is crafted from recycled wood salvaged from old houses, castles, and churches that are over 200 years old. By choosing Creatift, you're not only investing in a unique and high-quality item, but also in the preservation of history and the environment.</p>
				</div>
			</div>
			
			<div className="dflex pb5 dflexm customborder1">
				<img className="about_img shadow1 mr3 customborder1 mautom" src="/images/owner.png" alt="Owner Picture"/>
				<div>
				    <div className="border borderbottom1 bordercol3 mb4"/>
					<p className="pb p2m">We offer a wide range of products to suit all tastes and styles, including clothes, handbags, shawls, indigo prints from Jaipur, lamps, chairs, cushion covers, textiles, old scarfs, dresses, tops, trousers, kimonos, jackets, and more. You can find stunning original old chests, wall cabinets, console tables made from old Haveli arches, and many other one-of-a-kind pieces that will add character and charm to your home.</p>

					<p className="pb3 p2m">When you visit our 750 sqm warehouse-style showroom in Prosperita, you'll be transported to a foreign world of eastern treasures, where you can appreciate the beauty and history of each item. Our store is not just a place to shop, it's a place to explore, discover, and be inspired.</p>

					<p className="pb3 p2m">Elsada Kruger, the dynamic businesswoman behind Creatift, has a true passion for travel and unique artefacts. Her buying trips take her to remote destinations in search of the perfect or unique piece, and she's always happy to share the story and history behind each item with her customers.</p>
				</div>
			</div>
			
			<div className="dflex dflexm customborder1">
				<img className="about_img shadow1 mr3 customborder1 mautom" src="/images/store.png" alt="Owner Picture"/>
				<div>
				    <div className="border borderbottom1 bordercol3 mb4"/>
					<p className="pb3 p2m">If you're looking for affordable luxury furniture without travelling the world, look no further than Creatift. Our unbeatable prices make us the obvious choice for anyone remodelling their home. Whether you're looking for a luxury leather bag or unique handcrafted fabric bags, Creatift has what you're looking for.</p>

					<p className="p2m">Come visit us today to discover your perfect picks and transform your home into the luxurious paradise you deserve. With Creatift, you can travel the world without the hassle of travelling, and take home unique and exquisite treasures that will become a part of your story.</p>
					
					
				</div>
			</div>
		  </div>
		  <div className="mt9"></div>
	  </section>
	  <FloatButtons />
	  <Footer />
	</>
  );
};

export default About;









