import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Ems from '../zComponents/images/emsxcit.png';
import './LoginSignup.css';

Modal.setAppElement('#root');

function StudentSignup() {
  const [user, setUser] = useState({
    studentID: '',
    firstName: '',
    lastName: '',
    course: '',
    email: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({ ...prevUser, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      const response = await fetch('https:backendfinal-production-2920.up.railway.app/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
  
      if (response.ok) {
        setIsSuccessModalOpen(true);
      } else {
        const errorMessage = await response.text();
        setError(errorMessage);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setError('An error occurred during signup. Please try again later.');
    }
  };

  const closeModal = () => {
    setIsSuccessModalOpen(false);
  };

  return (
    <div>
      <div class="split left">
        <div class="centered">
          <img src={Ems} alt="logo" />
          <p className='logo-text'>CIT - U EVENT</p>
          <p className='logo-text1'>MANAGEMENT SYSTEM</p>
          <button className="btnL transparent2" id="sign-up-btn">
            <Link to="/Student/Login" className='linkas'>Log in</Link>
          </button>
        </div>
      </div>
      <Modal
        isOpen={isSuccessModalOpen}
        onRequestClose={closeModal}
        contentLabel="Signup Success Modal"
        style={{
          overlay: {
            zIndex: 1000,
          },
          content: {
            zIndex: 1001, 
            backgroundColor: "#E1AC00",
            borderRadius: 20,
            height: 200,
            padding: 10,
            color: "#FFFFFF",
          },
        }}
      >
        <h2 style={{ color: 'white', fontSize: '36px', fontWeight: 'bold' }} >Signup Successful!</h2>
        <p>Your account has been created successfully.</p>
        <Link to="/Student/Login">
          <button className='modalbtn' onClick={closeModal}>Close</button>
        </Link>
      </Modal>
      <div class="split right">
        <div class="centered">
          <div className="signup">
            <form action="#" className="sign-up-form" onSubmit={handleSubmit}>
              <h2 className="title">Sign up</h2>
              {error && <div className="error-message">{error}</div>}

              <div className="input-field">
                <i className="fas fa-id-card"></i>
                <input
                  type="text"
                  name="studentID"
                  value={user.studentID}
                  onChange={handleChange}
                  required
                  placeholder="Student ID no."
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="firstName"
                  value={user.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="lastName"
                  value={user.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-user"></i>
                <input
                  type="text"
                  name="course"
                  value={user.course}
                  onChange={handleChange}
                  required
                  placeholder="Course"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-envelope"></i>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                  required
                  placeholder="Email"
                />
              </div>
              <div className="input-field">
                <i className="fas fa-lock"></i>
                <input
                  type="password"
                  name="password"
                  value={user.password}
                  onChange={handleChange}
                  required
                  placeholder="Password"
                />
              </div>
              <button type="submit" className="btnL">Sign up</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default StudentSignup;