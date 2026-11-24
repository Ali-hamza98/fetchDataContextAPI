import { useContext } from 'react';
import { UserContext } from './UserContext';
import './css/user.css';
const Users = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      <h2 className='mainHeading'>User list</h2>
      <div className='mainContainer'>
        {users.map((user) => (
          <div key={user.id} className='container'>
            <div className='dummyImg'>
              <img
                src='https://dummyjson.com/icon/emilys/128'
                alt='dummyJson'
              />
            </div>
            <h3>
              Name: {user.firstName}
              {user.lastName}
            </h3>
            <p>Email:{user.email}</p>
            <p>Age:{user.age}</p>
            <p>Phone:{user.phone}</p>
            <p>Address:{user.address.address}</p>
            <p>City:{user.address.city}</p>
            <p>State:{user.address.state}</p>
            <p>Dapartment:{user.company.department}</p>
            <p>Name:{user.company.name}</p>
            <p>Title:{user.company.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
