import React, { useState } from 'react';
import { findAllByDisplayValue } from '@testing-library/react';
import classes from './UsersPage.module.css';


const UsersPage = ({users}) => {
  const isUser= false
  const [user1, setUser1] = useState({})
  console.log(user1);
  const getUser = (id) => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response=>response.json())
    .then(data => setUser1(data))
  }

  return (
    <div>
      {users.map(user=>
        <div key={user.id} className={classes.info}>
          <p>{user.name}</p>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <button onClick={()=>getUser(user.id)}>подробнее</button>
          { user1.id === user.id &&
            <>
              <div>{user1?.address?.street}</div>
              <div>{user1?.company?.name}</div>
            </>
          }
        </div>
      )}
    </div>
  );
};

export default UsersPage;