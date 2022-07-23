import { useState } from 'react';
import './App.css';
import LoginForm from './components/LoginForm';
import Posts from './components/posts';

function App() {

  const adminUser = {
    email: "eve.holt@reqres.in",
    password: "7"
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

      localStorage.setItem('token', JSON.stringify(details));
    }
    else {
      setError(`Xato ma'lumot😒`);
    }
  };

  const Logout = () => {
    setUser({ name: "", email: "" })
  };

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div className='mt-5'>
          <Posts />
          <button className='btn btn-danger' onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
