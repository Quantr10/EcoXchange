import React from 'react'
import styles from "./auth.module.css";
import loginImg from "../../assets/login.png";
import { Link } from 'react-router-dom';
import { FaGoogle } from 'react-icons/fa';

const Login = () => {
  return <section className={`containter ${styles.auth}`}>
    <div classname={styles.img}>
        <img src={loginImg} alt="Login" width="400"/>
    </div>
    <div className={styles.form}>
        <h2>Login</h2>
        <form>
            <input type="email" placeholder="Email" required/>
            <input type="password" placeholder="Password" required/>
            <button className="--btn --btn-primary --btn-block">Login</button>
            <div className={styles.links}>
                <Link to="/reset">Reset Password</Link>
            </div>
            <p>-- or --</p>
            <button className="--btn --btn-danger --btn-block"><FaGoogle color="#fff"/> Login With Google</button>
            <span className={styles.register}>
                <p>Don't have an account?</p>
                <Link to="/register">Register</Link>
            </span>

        </form>
    </div>
  </section>
  
}

export default Login