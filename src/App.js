import React, { useState, useEffect } from 'react';
// import axios from 'axios';

import './App.css';
import Header from './components/Header/Header';
import Home from './components/MainContainer/Home';
import Login from './login/Login';

function App() {

  // const [studentList, setStudentList] = useState([]);
  // useEffect(() => {
  //   axios.get('http://127.0.0.1:8000/studentapi/')
  //     .then(response => {
  //       console.log("response==>", response.data);
  //       setStudentList(response.data);
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  //   axios({
  //     method: 'get',
  //     url: 'http://127.0.0.1:8000/studentapi/',
  //     data: {}
  //   }).then(response => {
  //     setStudentList(response.data);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  // }, []);


  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
    // <Login/>
  );
}

export default App;
