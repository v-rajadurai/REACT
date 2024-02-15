import React, { useState } from 'react';

 

function Form() {

  const [formData, setFormData] = useState({

    name: '',

    phone: '',

    email: '',

    password: '',

  });

 

  const handleChange = (e) => {

    const { name, value } = e.target;

    setFormData({

      ...formData,

      [name]: value,

    });

  };

 

  const handleSubmit = (e) => {

    e.preventDefault();

    console.log('Form Data:', formData);

  };

 

  return (

    <div>

      <form onSubmit={handleSubmit}>

        <div>

          <h1>Name: <input

type="text"

name="name"

value={formData.name}

onChange={handleChange}

/></h1>

          

        </div>

        <div>

          <h1>Phone: <input

type="text"

name="phone"

value={formData.phone}

onChange={handleChange}

/></h1>

          

        </div>

        <div>

          <h1>Email: <input

type="email"

name="email"

value={formData.email}

onChange={handleChange}

/></h1>

          

        </div>

        <div>

          <h1>Password:<input

            type="password"

            name="password"

            value={formData.password}

            onChange={handleChange}

          /></h1>

          

        </div>

        <button type="submit"><h1>Submit</h1></button>

      </form>

    </div>

  );

}

 

export default Form;