import React from "react";
import styles from "../styles/ContactMe.module.css";

const ContactMe = () => {
  return (
    <div id="contact">
      {/* Linea */}
      <div></div>
      <div className={styles.wanna}>
        WANNA SEND <br /> ME A MESSAGE?
      </div>
      <div>
        <div className={styles.ideas}>
          SEND ME <br />
          YOUR <span>IDEAS</span>
          <div> {`>>>>`} </div>
        </div>
        <div>
          <h1 className={styles.contact}>CONTACT</h1>
          <ul>
            <li>EMAIL</li>
            <li>LINKEDIN</li>
            <li>BEHANCE</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
