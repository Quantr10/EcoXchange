import React, { useRef } from "react";
import styles from "./Contact.module.css";
import Card from "../../components/card/Card";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        "template_chucin3",
        form.current,
        {
          publicKey: "e_T793IWajAd1D50a",
        }
      )
      .then(
        () => {
          toast.success("Message sent successfully");
        },
        (error) => {
          toast.error(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <section>
      <div className={`containter ${styles.contact}`}>
        <h2>Contact</h2>
        <div className={styles.section}>
          <form ref={form} onSubmit={sendEmail}>
            <Card cardClass={styles.card}>
              <label>Name</label>
              <input
                type="text"
                name="user_name"
                placeholder="Full Name"
                required
              />
              <label>Email</label>
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <label>Subject</label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
              />
              <label>Message</label>
              <textarea name="message" cols="30" rows="10"></textarea>
              <button className="--btn --btn-primary">Send Message</button>
            </Card>
          </form>
          <div className={styles.details}>
            <Card cardClass={styles.card2}>
              <h3>Our Contact Infomation</h3>
              <p>
                Fill in the form or contact us via other channels listed below
              </p>
              <div className={styles.icons}>
                <span>
                  <FaPhoneAlt />
                  <p>7657123295</p>
                </span>
                <span>
                  <FaEnvelope />
                  <p>thequantran2005@gmail.com</p>
                </span>
                <span>
                  <GoLocation />
                  <p>Greencastle, Indiana</p>
                </span>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
