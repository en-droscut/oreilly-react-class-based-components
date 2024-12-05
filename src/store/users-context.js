import React from 'react';

const UsersContext = React.createContext({
  users: [
    { id: 'u1', name: 'Max' },
    { id: 'u2', name: 'Manuel' },
    { id: 'u3', name: 'Julie' },
    { id: 'u4', name: 'Dragos' },
    { id: 'u5', name: 'Alexandra' },
    { id: 'u6', name: 'Damian' },
    { id: 'u7', name: 'John' },
  ]
});

export default UsersContext;