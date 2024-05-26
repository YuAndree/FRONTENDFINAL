import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../zComponents/images/emsxcit.png';
import './splashScreen.css';

const AdminStudent = () => {
  return (
    <div className='AdminStudent__section'>
      <div className='AdminStudent__container'>
        <div>
          <img className='EMSlogo' src={Logo} alt="CIT-U NSTP Logo" />
          <p className='logo-text'>CIT - U EVENT</p>
          <p className='logo-text1'>MANAGEMENT SYSTEM</p>
        </div>
        <div className='AdminStudent__btn'>
          <Link to="/Student/Login">Login as Student</Link>
          <Link to="/Teacher/Login">Login as Teacher</Link>
        </div>
        <Link className='adminlink' to="/Admin/Login">Switch to Admin</Link>
      </div>
    </div>
  );
};

export default AdminStudent;
