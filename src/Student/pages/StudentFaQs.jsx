import React, { useState, useEffect } from 'react'
import './StudentFaQs.css';
import axios from 'axios';

function StudentFaQs() {
  const [teachers, setTeachers] = useState([]);


  useEffect(() => {
    axios.get('https:backendfinal-production-2920.up.railway.app/getallteachers')
      .then(response => {
        setTeachers(response.data.reverse());
      })
      .catch(error => {
        console.error('Error fetching teachers:', error);
      });
  }, []);






  return (
    <div class="FAQS-container">
    <div class="faqstitle">
        <h1><strong>Welcome to CIT-U Event Management!</strong></h1>
        <div className="aboutus-container">
    <p>At CIT-U Event Management, we are dedicated to fostering a vibrant and engaging campus life for all students at Cebu Institute of Technology - University. Our platform is designed to streamline event participation, making it easy for students to stay connected, informed, and involved.</p>
    </div>
    <div className="aboutus-container1">
    <h1>Our Mission</h1>
    <p>Our mission is to enhance the university experience by providing a centralized hub for event registration, news, and announcements. We aim to support the growth of a dynamic student community through seamless access to all campus activities.</p>
    </div>
    <div className="aboutus-container2">
    <h1>What We Offer</h1>
    <p>Event Registration: Easily register for a variety of campus events ranging from academic seminars and workshops to cultural festivals and sports competitions.
Article Tabs: Stay informed with the latest articles covering event highlights, student achievements, and university news. Our articles are curated to keep you up-to-date with everything happening around campus.
Announcements: Never miss an important update with our announcements section. Whether it’s a change in event schedules, new opportunities, or important notices, you’ll find all critical information here.</p>
</div>

<div className="aboutus-container3">
    <h1>Why Choose Us?</h1>
    <p>User-Friendly Interface: Our platform is designed with students in mind, ensuring a smooth and intuitive experience.
Comprehensive Information: Get all the details you need in one place, making it easier to manage your time and commitments.
Community Engagement: By connecting students with events and news, we foster a stronger sense of community and participation within the university.</p>
    </div>
    <div className="aboutus-container4">
    <p>Join us at CIT-U Event Management and be a part of the action! Discover events, read insightful articles, and stay updated with the latest announcements. Let’s make your university life more engaging and memorable.</p>
    </div>

    
    
    </div>
   


  
    <div class="faqsteachertitle">
        <h1><strong>FACULTY TEACHERS</strong></h1>
    </div>
           

    <div className="teacher-card-container-faqs">
  {teachers.map(teacher => (
    <div className="teacher-card-faqs" key={teacher.userid}> 
      <div className="teacher-image-faqs">
        <img src={`data:image/png;base64,${teacher.profile}`} alt={teacher.firstName} />
      </div>
      <p>{teacher.firstName} {teacher.lastName}</p>
      <p>{teacher.email} </p>
    </div>
  ))}
</div>


</div>
  )
}

export default StudentFaQs