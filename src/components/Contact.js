import React, { useState }  from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatButtons from "./FloatButtons";
import Map from "./Map";

const Contact = () => {

  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Mobile Number: ", mobile);
    console.log("Message: ", message);
  };	
	
  return (
	<>
	  <Navbar />
	  <section className="con m2 py1">
	    <h1 className="h1 txtfont1 txtcenter">Contact Us</h1>
		<div className="py5">
			<div className="txtcol1 txtfont3 txtcol4">
				<p className="pb3 txtcenterm">Please use the form below to get in touch with us.</p>
				<form onSubmit={handleSubmit} className="">
					<div className="pb3 hcenter2m">
						<label className="pr3" htmlFor="name">Your Name:</label>
						<input
						type="text"
						id="name"
						name="name"
						value={name}
						onChange={(e) => setName(e.target.value)}
						/>
					</div>
					<div className="pb3 hcenter2m">
						<label className="pr3" htmlFor="mobile">Your Mobile:</label>
						<input
						type="text"
						id="mobile"
						name="mobile"
						value={mobile}
						onChange={(e) => setMobile(e.target.value)}
						/>
					</div>
					<div className="pb3 txtcenterm">
						<label className="pr3 " htmlFor="message">Message:</label>
						<textarea
						id="message"
						name="message"
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						/>
					</div>
					<div className="dflex">
					 <button className="mxauto border border1 borderround1 bordercol2 bgcol2 p2 pointer zoom" type="submit">Send Message</button>
					</div>
				</form>
			</div>
		</div>
	  </section>
	  <Map />
	  <FloatButtons />
	  <Footer />
	</>
  );
};

export default Contact;