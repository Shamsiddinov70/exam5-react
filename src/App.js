import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import LoginForm from './components/LoginForm';
import All from './pages/All';
import Side from './pages/Side';
import Design from './pages/Design';
import Header from './pages/header';
import Typograph from './pages/Typograph';
import Ui from './pages/Ui';
import Ux from './pages/Ux';
import Unfind from './pages/Unfind';

function App() {

  const adminUser = {
    email: "eve.holt@reqres.in",
    password: ""
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
        <div className='container d-flex'>
          <div className='d-flex'>
            <Side />
            <div>
              <Header />
              <Routes>
                <Route path='/' element={<All />} />
                <Route path='/all' element={<All />} />
                <Route path='/design' element={<Design />} />
                <Route path='/ux' element={<Ux />} />
                <Route path='/ui' element={<Ui />} />
                <Route path='/typo' element={<Typograph />} />
                <Route path='*' element={<Unfind />} />
              </Routes>
            </div>
          </div>

          <button title='Logout' className='logout-btn btn btn-outline-danger' onClick={Logout}>out</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
