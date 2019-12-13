import React, { useState, useEffect } from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const AddFriend = (props) => {
  const api_uri = 'http://localhost:5000/api';
  const defaultFriend = {
    id: Date.now(),
    name: '',
    age: '',
    email: ''
  };
  const [friendInfo, setFriendInfo] = useState(defaultFriend);
  useEffect(() => {
    console.log(`AddFriend: friendInfo`, friendInfo);
  }, [friendInfo]);

  const addFriend = (e) => {
    e.preventDefault();

    axiosWithAuth()
    .post(api_uri+'/friends', friendInfo)
    .then(req => {
      console.log(`AddFriend: addFriend -> req.data`, req.data);
      props.history.push('/friends');
    })
    .catch(err => {
      console.log(`AddFriend: addFriend -> err`, err);
    });
  }

  const handleChange = (e) => {
    console.log(`AddFriend: handleChange: Target: Name: '${e.target.name}', Value: '${e.target.value}'`);
    setFriendInfo({ ...friendInfo, [e.target.name]: e.target.value });
  }

  return (
    <div className='friend-form'>
      <form onSubmit={addFriend}>
        <h2>Add Friend:</h2>
        <input
          className='inputName'
          type='text'
          name='name'
          placeholder='Name'
          onChange={handleChange}
          value={friendInfo.name}
        />
        <input
          className='inputAge'
          type='number'
          min='0'
          max='130'
          name='age'
          placeholder='Age'
          onChange={handleChange}
          value={friendInfo.age === 0 ? '' : friendInfo.age}
        />
        <input
          className='inputEmail'
          type='email'
          name='email'
          placeholder='Email'
          onChange={handleChange}
          value={friendInfo.email}
        />
        <button onClick={addFriend}>Add Friend</button>
      </form>
    </div>
  );
};

export default AddFriend;