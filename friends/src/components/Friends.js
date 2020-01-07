import React, {useState, useEffect} from 'react';

import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friends = () => {
  const api_uri = 'http://localhost:5000/api';
  const [friends, setFriends] = useState([]);

  useEffect(() => {
    const fetchData = () => {
      axiosWithAuth()
      .get(api_uri+'/friends')
      .then(res => {
        console.log(`Friends: fetchData -> res.data`, res.data);
        setFriends(res.data);
      })
      .catch(err => {
        console.log(`Friends: fetchData -> err`, err);
      });
    };

    fetchData();
  }, []);

  return (
    <div className='friends'>
      <h2>Your Friends:</h2>
      <div className='friends-list'>
        {friends.map(friend => (
          <div className='friend' key={friend.id}>
            <p className='name'><span className='label'>Name:</span> {friend.name}</p>
            <p className='age'><span className='label'>Age:</span> {friend.age}</p>
            <p className='email'><span className='label'>Email:</span> <a className="link" href={"mailto:"+friend.email} target="_blank" rel="noopener noreferrer">{friend.email}</a></p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Friends;