import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";
import styles from "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const quotes = [
  {
    quote: 'India is a place where colour is doubly bright. Pinks that scald your eyes, blues you could drown in.',
    author: 'Kiran Millwood Hargrave',
  },
  {
    quote: 'Life is a beautiful collection of temporary experiences. Treasure your unique collection, and enjoy sharing it with others.',
    author: 'Matthew Kahn',
  },
  {
    quote: 'Creativity involves breaking out of established patterns in order to look at things in a different way.',
    author: 'Edward de Bono',
  },
  {
    quote: "It's attention to detail that makes the difference between average and stunning.",
    author: 'Francis Atterbury',
  },
  {  
	quote: "Sophistication and lifestyle is understanding the difference between trinkets and treasures.",
	author: 'Jim Rohn',
  },
  {    
	quote: "The greatest treasures are those invisible to the eye but found by the heart.",
	author: 'Judy Garland', 
  },
  {     
	quote: "An interior is the natural projection of the soul.",
	author: 'Coco Chanel',
  },
];		

function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

const Home = () => {
	
  const data = [
    {info:"Rustic Furniture",  pics: ["slides/01.png","slides/02.png","slides/03.png","slides/04.png"]},
    {info:"Handcrafted Items", pics: ["slides/05.png","slides/06.png","slides/07.png","slides/08.png"]},
    {info:"Indian Decor",  pics: ["slides/09.png","slides/10.png","slides/11.png","slides/12.png"]}  
  ]
  
  const [quote, setQuote] = useState(null);

  useEffect(() => {
    setQuote(getRandomQuote());
  }, []);
  
  return (
  <>
    <Navbar />
    <section className="m2 main">
	
    <div className="txtcenter p2 txtfont2 txtcol4 txtsize13">
      {quote && (
        <div className="quote">
          <p>“{quote.quote}”</p>
          <p>— {quote.author}</p>
        </div>
      )}
    </div>	
      <div className="con">
		  <Carousel
			showArrows={false}
			showIndicators={false}
			showThumbs={false}
			showStatus={false}
			infiniteLoop={true}
			stopOnHover={false}
			swipeable={false}
			transitionTime={2000}
			interval={5000}
			emulateTouch={false}
			autoPlay={true}
		  >
			{
			  data.map(({ info, pics }, index) => (
				<div className="dflex" key={index}>
				  <img className="slidepic" src={pics[0]} />
				  <img className="slidepic" src={pics[1]} />
				  <img className="slidepic" src={pics[2]} />
				  <img className="slidepic" src={pics[3]} />
				  <div className="slidetext h6 txtupper txtcol5">{info}</div>
				</div>
			  ))
			}
		  </Carousel>	  
	  </div>     

    </section>
	<section className="con">
	  <p className="m5 p5 p5m txtcenter txtfont3 lheight24 txtcol4">
		Clothes, 
		Handbags, 
		Shawls, 
		Indigo prints from Jaipur, 
		Furniture, 
		Lamps, 
		Chairs, 
		Cushion covers, 
		Textiles, 
		Old Scarfs, 
		Dresses, 
		Tops, 
		Trousers, 
		Kimonos, 
		Jackets,
		and many more...
	  </p>
	</section>
    <FloatButtons />
    <Footer />
  </>
  );
};

export default Home;