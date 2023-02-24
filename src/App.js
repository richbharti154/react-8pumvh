import React, { useState, useEffect } from 'react';
import './style.css';
import CustomInput from './CustomInput';
import Custombutton from './Custombutton';
export default function App() {
  let data = JSON.parse(localStorage.getItem('myInput')) || '';
  const [fname, setFname] = useState(data.firstname);
  const [lname, setLname] = useState(data.lastname);
  const [email, setEmail] = useState(data.myEmail);
  const [password, setPassword] = useState(data.myPassword);
  const [mark, setMark] = useState('');
  const [mark2, setMark2] = useState('');

  useEffect(() => {
    let newData = {
      firstname: fname,
      lastname: lname,
      myEmail: email,
      myPassword: password,
      mark,
      mark2,
    };
    localStorage.setItem('myInput', JSON.stringify(newData));
  }, [fname, lname, email, password]);

  function handleSubmit(e) {
    e.preventDefault();
    let newData = {
      fname: fname,
      lname: lname,
      email: email,
      password: password,
      mark,
      mark2,
    };
    localStorage.setItem('userList', JSON.stringify(newData));
    setFname('');
    setEmail('');
    setLname('');
    setPassword('');
    setMark('');
    setMark2('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="main">
        <div className="innercontaner">
          <div className="header">Register Form</div>
          <div className="innercontaner2">
            <CustomInput
              onChange={(e) => setFname(e.target.value)}
              placeholder="Firstname"
              value={fname}
              className="input1"
              required
            />
            <CustomInput
              onChange={(e) => setLname(e.target.value)}
              placeholder="Lastname"
              value={lname}
              className="input1"
              required
            />
            <CustomInput
              onChange={(e) => setEmail(e.target.value)}
              placeholder="email"
              value={email}
              className="input1"
              required
            />

            <CustomInput
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              value={password}
              className="input1"
              required
            />
            <span style={{ display: 'flex', gap: '1rem' }}>
              <CustomInput
                onChange={(e) => setMark(e.target.value)}
                value={mark}
                // className="input2"
                type="checkbox"
                required
              />
              <p style={{ fontSize: '9px' }}>
                open Chrome. At the top right, click More . Click More tools
                Clear
              </p>
            </span>
            <span style={{ display: 'flex', gap: '1rem' }}>
              <CustomInput
                onChange={(e) => setMark2(e.target.value)}
                value={mark2}
                // className="input2"
                type="checkbox"
                required
              />
              <p style={{ fontSize: '9px' }}>
                open Chrome. At the top right, click More . Click More tools
                Clear
              </p>
            </span>
            <Custombutton txt="submite" className="btn" />
          </div>
        </div>
      </div>
    </form>
  );
}
