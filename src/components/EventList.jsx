import React, { useEffect, useState } from 'react';
import api from '../services/api';

function EventList() {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    api.get('/event')
      .then((res) => setEvents(res.data))
      .catch((err) => console.error('API Error:', err.response?.data || err));
  }, []);

  console.log("data", events)

  return (
    <div>

      {events.map((event) => (
        <div key={event.id}>
          <h2>{event.title.rendered}</h2>
          <p>{event.acf.location}</p>
          <p>{event.acf.event_date}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
