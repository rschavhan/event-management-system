import React from 'react';

const Event = ({ event, onDelete, onEdit }) => {
  return (
    <li>
      <h2>{event.name}</h2>
      <p>Date: {event.date}</p>
      <p>Time: {event.time}</p>
      <p>Location: {event.location}</p>
      <p>Description: {event.description}</p>
      <button onClick={() => onEdit(event)}>Edit</button>
      <button onClick={() => onDelete(event.id)}>Delete</button>
    </li>
  );
};

export default Event;
