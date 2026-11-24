import './App.css';
import { UserProvider } from './UserContext';
import Users from './Users';
import Users2 from './Users2';

function App() {
  return (
    <>
      <UserProvider>
        <Users />
        <Users2 />
      </UserProvider>
    </>
  );
}

export default App;
