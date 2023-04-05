import React from "react";
import { AiFillPhone, AiOutlineMail } from "react-icons/ai";
import { BsFacebook, BsInstagram } from "react-icons/bs";
import styles from "../styles/float.module.css"; 

const FloatButtons = () => {
  const handlePhone = () => {
    window.open("tel:0811274438");
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/creatift");
  };

  const handleInstagramClick = () => {
    window.open("https://www.instagram.com/creatift_namibia");
  };
  
  const handleEmailClick = () => {
    window.open("mailto:elsadacreatif@gmail.com");
  };

  return (
    <div className={styles.float_container}>
      <div className={styles.float_buttons}>
        <button
          className={`${styles.float_button} ${styles.float_phone}`}
          onClick={handlePhone}
		  title="Prosperita"
        >
          <AiFillPhone />
        </button>
        <button
          className={`${styles.float_button} ${styles.float_facebook}`}
          onClick={handleFacebookClick}
        >
          <BsFacebook />
        </button>
        <button
          className={`${styles.float_button} ${styles.float_instagram}`}
          onClick={handleInstagramClick}
        >
          <BsInstagram />
        </button>
        <button
          className={`${styles.float_button} ${styles.float_email}`}
          onClick={handleEmailClick}
        >
          <AiOutlineMail />
        </button>		
      </div>
    </div>
  );
};

export default FloatButtons;
