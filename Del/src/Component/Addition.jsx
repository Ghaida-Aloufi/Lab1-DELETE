import React, { useState } from 'react';

const UserForm = () => {
  const [urlImage, setUrlImage] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); 

    fetch('https://66ef2b583ed5bb4d0bf2f4ac.mockapi.io/login', {
      method: 'POST',
      body: JSON.stringify({
        urlImage,
        name,
        gender,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setUrlImage('');
        setName('');
        setGender('');
      })
      .catch((error) => console.error('Error:', error)); 
  };

  return (
    <div className='flex justify-center items-center h-screen bg-gray-100'>
      <div className="flex flex-col border border-gray-300 shadow-lg p-6 rounded-md w-auto max-w-xs mx-auto bg-white w-[50vh]">
        <h2 className="text-center text-2xl font-semibold text-blue-600 mb-4">User Form</h2>

        <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center w-[100%]'>
          <label htmlFor="urlImage" className="text-gray-700 mb-1">Url Image</label>
          <input 
            type="text" 
            id="urlImage" 
            placeholder="Type here" 
            value={urlImage}
            onChange={(e) => setUrlImage(e.target.value)}
            className="input input-bordered w-full mb-4 border-blue-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 text-center"
          />

          <label htmlFor="name" className="text-gray-700 mb-1">Name</label>
          <input 
            type="text" 
            id="name" 
            placeholder="Type here" 
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="input input-bordered w-full mb-4 border-blue-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 text-center"
          />

          <label htmlFor="gender" className="text-gray-700 mb-1">Gender</label>
          <input 
            type="text" 
            id="gender" 
            placeholder="Type here" 
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className="input input-bordered w-full mb-4 border-blue-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-500 text-center"
          />

          <button 
            type="submit" 
            className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200 p-3"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserForm;
