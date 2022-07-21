import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';

function App() {

  const adminUser = {
    email: "engineer@gmail.com",
    password: "abbos7"
  }

  const [user, setUser] = useState({ name: "", email: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);

    if (details.email === adminUser.email && details.password === adminUser.password) {
      console.log('logged in');
      setUser({
        name: details.name,
        email: details.email
      })
    }
    else {
      setError("Details do not match");
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" })
  };

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className='mt-5'>
          <h2 className='mb-5'>Welcome, <span>{user.name}</span></h2>
          <button className='btn btn-danger' onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
