import React, { useState, useEffect } from 'react';
import axios from 'axios';

function AssignTeacherToEvent() {
  const [event, setEvent] = useState({
    eventID: '',
    eventTitle: '',
    eventStart: '',
    eventEnd: '',
    image: null,
    description: ''
  });
  const [teacher, setTeacher] = useState({
    userid: '',
    teacherID: '',
    firstName: '',
    lastName: '',
    assignedYear: '',
    email: '',
    password: ''
  });
  const [events, setEvents] = useState([]);
  const [teachers, setTeachers] = useState([]); 
  const [message, setMessage] = useState('');

  useEffect(() => {

    axios.get('https:backendfinal-production-2920.up.railway.app/getEvents')
      .then(response => {
        setEvents(response.data);
      })
      .catch(error => {
        console.error('Error fetching events:', error);
      });


    axios.get('https:backendfinal-production-2920.up.railway.app/getallteachers')
      .then(response => {
        setTeachers(response.data);
      })
      .catch(error => {
        console.error('Error fetching teachers:', error);
      });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https:backendfinal-production-2920.up.railway.app/assignTeacherToEvent', {
        event,
        teacher
      });
      setMessage(response.data);
    } catch (error) {
      setMessage('Failed to assign teacher to event');
      console.error(error);
    }
  };

  return (
    <div>
      <h2>Assign Teacher to Event</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="eventID">Select Event:</label>
          <select
            id="eventID"
            value={event.eventID}
            onChange={(e) => setEvent({ ...event, eventID: e.target.value })}
          >
            <option value="">Select an event</option>
            {events.map(event => (
              <option key={event.eventID} value={event.eventID}>
                {event.eventTitle}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="userid">Select Teacher:</label>
          <select
            id="userid"
            value={teacher.userid}
            onChange={(e) => setTeacher({ ...teacher, userid: e.target.value })}
          >
            <option value="">Select a teacher</option>
            {teachers.map(teacher => (
              <option key={teacher.userid} value={teacher.userid}>
                {teacher.firstName} {teacher.lastName}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Assign Teacher</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default AssignTeacherToEvent;
