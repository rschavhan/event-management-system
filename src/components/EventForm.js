import React, { useState, useEffect } from 'react';

const EventForm = ({ onSave, currentEvent, setEditing }) => {
  const [event, setEvent] = useState({
    id: null,
    name: '',
    date: '',
    time: '',
    location: '',
    description: ''
  });

  useEffect(() => {
    if (currentEvent) {
      setEvent(currentEvent);
    } else {
      setEvent({
        id: null,
        name: '',
        date: '',
        time: '',
        location: '',
        description: ''
      });
    }
  }, [currentEvent]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEvent({ ...event, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!event.id) {
      event.id = Date.now();
    }
    onSave(event);
    setEvent({
      id: null,
      name: '',
      date: '',
      time: '',
      location: '',
      description: ''
    });
    setEditing(false);
  };

  return (
    <form onSubmit={handleSubmit} className='formSubmit'>
      <input type="text" name="name" value={event.name} onChange={handleChange} placeholder="Event Name" required />
      <input type="date" name="date" value={event.date} onChange={handleChange} required />
      <input type="time" name="time" value={event.time} onChange={handleChange} required />
      <input type="text" name="location" value={event.location} onChange={handleChange} placeholder="Location" required />
      <textarea name="description" value={event.description} onChange={handleChange} placeholder="Description" required />
      <button type="submit">{event.id ? 'Update' : 'Add'} Event</button>
    </form>
  );
};

export default EventForm;
