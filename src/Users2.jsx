import { useContext } from 'react';
import { UserContext } from './UserContext';

const Users2 = () => {
  const { users } = useContext(UserContext);
  return (
    <div>
      <h2 className='mainHeading'>Second user list</h2>
      <div className='mainContainer'>
        {users
          .filter((item) => item.age > 40)
          .map((item) => (
            <div key={item.id} className='container'>
              <div className='dummyImg'>
                <img
                  src='https://dummyjson.com/icon/emilys/128'
                  alt='dummyJson'
                />
              </div>

              <h3>
                Name: {item.firstName}
                {item.lastName}
              </h3>
              <p>Age:{item.age}</p>
              <p>Email:{item.email}</p>
              <p>Age:{item.age}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Users2;
