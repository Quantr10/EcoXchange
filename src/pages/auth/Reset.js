import resetImg from '../../assets/forgot.png';
import styles from './auth.module.scss';
import Card from '../../components/card/Card';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { auth } from '../../firebase/config';
import { sendPasswordResetEmail } from 'firebase/auth';
import Loader from '../../components/loader/Loader';

const Reset = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const resetPassword = (e) => {
    e.preventDefault();
    setIsLoading(true);
    sendPasswordResetEmail(auth, email)
    .then(() => {
      setIsLoading(false);
      toast.success("Password reset email sent!");
    })
    .catch((error) => {
      setIsLoading(false);
      toast.error(error.message);
    });
  }

  return (
    <>
      {isLoading && <Loader />}
      <section className={`containter ${styles.auth}`}>
        <div className={styles.img}>
            <img src={resetImg} alt="Reset" width="400"/>
        </div>
        <Card>
          <div className={styles.form}>
            <h2>Reset Password</h2>
            <form onSubmit={resetPassword}>
                <input 
                  type="text"
                  placeholder="Email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button type="submit" className="--btn --btn-primary --btn-block">Reset Password</button>
                <div className={styles.links}>
                  <Link to="/login">Login</Link>
                  <Link to="/register">Register</Link>
                </div>
            </form>
          </div>
        </Card>
      </section>
    </>
  )
}

export default Reset