import React, { useState } from 'react';

 

function RegistrationForm() {

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

        <h1>Basic Form</h1>
      <form onSubmit={handleSubmit}>

        <div>

          <label>Name:

          <input

            type="text"

            name="name"

            value={formData.name}

            onChange={handleChange}

          />
          </label>

        </div>

        <div>

          <label>Phone:

          <input

            type="text"

            name="phone"

            value={formData.phone}

            onChange={handleChange}

          />
          </label>

        </div>

        <div>

          <label>Email:

          <input

            type="email"

            name="email"

            value={formData.email}

            onChange={handleChange}

          />
          </label>

        </div>

        <div>

          <label>Message:


          <textarea />
          </label>

        </div>

        <button type="submit">Submit</button>

      </form>

    </div>

  );

}

 

export default RegistrationForm;