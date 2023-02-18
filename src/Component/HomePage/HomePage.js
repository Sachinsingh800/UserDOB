import React, { useState, useEffect } from 'react';
import style from './HomePage.module.css'


export default function HomePage() {
 


    const UserBirthday= JSON.parse(localStorage.getItem("useDetail"))
    
    const [user, setUser] = useState(UserBirthday);


  
  const date = new Date();
  let Day = date.getDate();
  let Month = date.getMonth() + 1;
  let Year = date.getFullYear();

  function getData() {
    const newUser = user.filter(
      (item) => item.Day === Day && item.Month === Month && item.Year === Year
    );
    setUser(newUser);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={style.container}>
      <h1>User BirthDay</h1>
      {user.map((item, id) => (
        <>
        <div className={style.card}>
        <h2 key={id}>{item.FirstName} {item.LastName}</h2>
        <h4> Age: {item.Age}</h4>
        <h4> DOB: {item.Day}  {item.Month }  {item.Year}</h4>
        </div>
       
        </>
      ))}
    </div>
  );
}
