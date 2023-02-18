import React, { useState, useEffect,useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { isValidName } from '../Validation/Validation';
import style from './Registration.module.css'
import Image from '../Atom/Image';

export default function Registration() {

  const [image,setImage] = useState('')

  const inputRef = useRef(null)


  function handleOnSelectImage (e) {
    let reader = new FileReader();
    reader.onload = (e) => {
        setImage(e.target.result);
        console.log(image)
    };
    reader.readAsDataURL(e.target.files[0]);
}


    const navigate=useNavigate()

    let initial;
    if (localStorage.getItem('userDetail') === null) {
      initial = [
        {
          Img: '',
          FirstName: 'Sachin',
          LastName: 'Singh',
          Age: 23,
          Day: 17,
          Month: 2,
          Year: 2023,
        },
        {
          Img: '',
          FirstName: 'Kishan',
          LastName: 'Singh',
          Age: 23,
          Day: 17,
          Month: 2,
          Year: 2023,
        },
        {
          Img: '',
          FirstName: 'Vikesh',
          LastName: 'gaitonde',
          Age: 23,
          Day: 18,
          Month: 2,
          Year: 2023,
        },
        {
          Img: '',
          FirstName: 'Gautam',
          LastName: 'tawade',
          Age: 23,
          Day: 18,
          Month: 2,
          Year: 2023,
        },
        {
          Img: '',
          FirstName: 'Pratisha',
          LastName: 'Shalke',
          Age: 30,
          Day: 18,
          Month: 2,
          Year: 2023,
        },
      ];
    } else {
      initial = JSON.parse(localStorage.getItem('userDetail'));
    }

    const [userData, setUserData] = useState(initial);
  
    const [register, setRegister] = useState({
      Image: '',
      FirstName: '',
      LastName: '',
      Age: '',
      Day: '',
      Month: '',
      Year: '',
    });
    localStorage.setItem('useDetail', JSON.stringify(userData));
  
    function handleSubmit(e) {
      e.preventDefault();
      JSON.parse( localStorage.getItem("userDetail"))
      const newDatauser = { ...register, id: new Date().getTime() };
      setUserData([...userData, newDatauser]);
      localStorage.setItem('useDetail', JSON.stringify(userData));
      // navigate("/HomePage")
      console.log(newDatauser);
    }
    function handleInput(e) {
      const name = e.target.name;
      const value = e.target.value;
      setRegister({ ...register, [name]: value });
      // console.log(name, value);
    }

  return (
    <div className={style.container}>
    <form className={style.form}>
   { 
            image &&  
          
                <img src={image} />
    
            }
  
            <input
                type = 'file'
                ref={inputRef}
                onChange = {handleOnSelectImage}
            />
          

      <input
        onChange={handleInput}
        value={register.FirstName}
        name="FirstName"
        placeholder="FirstName"
      />

      <input
        onChange={handleInput}
        value={register.LastName}
        name="LastName"
        placeholder="LastName"
      />

      <input
        onChange={handleInput}
        value={register.Age}
        name="Age"
        type="Number"
        placeholder="Age"
      />

      <input
        onChange={handleInput}
        value={register.Day}
        name="Day"
        type="Number"
        placeholder="Day"
      />

      <input
        onChange={handleInput}
        value={register.Month}
        name="Month"
        type="Number"
        placeholder="Month"
      />

      <input
        onChange={handleInput}
        value={register.Year}
        name="Year"
        type="Number"
        placeholder="Year"
      />
       
       <img src={register.Image} />
      <button onClick={handleSubmit}>Submit</button>
    </form>
    </div>
  );
}
