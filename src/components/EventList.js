import React, { useState, useEffect } from 'react';
import Event from './Event';
import EventForm from './EventForm';

const EventList = () => {
  const [events, setEvents] = useState([]);
  const [editing, setEditing] = useState(false);
  const [currentEvent, setCurrentEvent] = useState({});

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem('events')) || [];
    setEvents(storedEvents);
  }, []);

  const saveEventsToStorage = (updatedEvents) => {
    localStorage.setItem('events', JSON.stringify(updatedEvents));
    setEvents(updatedEvents);
  };

  const addEvent = (event) => {
    const updatedEvents = [...events, event];
    saveEventsToStorage(updatedEvents);
  };

  const updateEvent = (updatedEvent) => {
    const updatedEvents = events.map((event) => {
      if (event.id === updatedEvent.id) {
        return updatedEvent;
      } else {
        return event;
      }
    });
    saveEventsToStorage(updatedEvents);
    setEditing(false);
  };

  const deleteEvent = (id) => {
    const updatedEvents = events.filter((event) => event.id !== id);
    saveEventsToStorage(updatedEvents);
  };

  const editEvent = (event) => {
    setEditing(true);
    setCurrentEvent(event);
  };

  return (
    <div>
      <h1 style={{color:"white"}}>Event Management System</h1>
      <EventForm
        onSave={editing ? updateEvent : addEvent}
        currentEvent={editing ? currentEvent : null}
        setEditing={setEditing}
      />
      <ul className='listEvent'>
        {events.map((event) => (
          <Event key={event.id} event={event} onDelete={deleteEvent} onEdit={editEvent} />
        ))}
      </ul>
    </div>
  );
};

export default EventList;
