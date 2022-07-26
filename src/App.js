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
import Footer from './pages/Footer';
import Comment from './pages/Comment';

function App() {

  const adminUser = {
    email: "a@gmail.com",
    password: "1"
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

  return (
    <div className="App">
      {(user.email !== "") ? (
        <div>
          <div className='container'>
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

                  {/* <Routes> */}
                  <Route path={`/post/:postId`} element={<Comment />} />
                  {/* </Routes> */}
                </Routes>

              </div>
              {/* <button title='Logout' className='logout-btn btn btn-danger me-1' onClick={Logout}>out</button> */}
            </div>
          </div>
          <Footer />
        </div>
      ) : (
        <LoginForm Login={Login} error={error} />
      )}
    </div>
  );
}

export default App;
