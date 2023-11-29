import React, { useState } from 'react';

const ProfilePage = () => {
  const [profileImage, setProfileImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setProfileImage(URL.createObjectURL(file));
  };

  return (
    <div className="container rounded bg-white mt-5 mb-5">
      <div className="flex mt-8">
        <div className="w-1/4 border-r">
          <div className="flex flex-col items-center text-center p-3 py-5">
            <label htmlFor="profile-image">
              <img
                className="rounded-circle mt-5 cursor-pointer"
                width="150px"
                src={profileImage || 'https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg'}
                alt="Profile"
              />
            </label>
            <input
              type="file"
              id="profile-image"
              accept="image/*"
              className="hidden"
              onChange={handleImageChange}
            />
            <span style={{color: 'orange'}} className="font-weight-bold">Click on image to upload profile photo</span>
            <span className="font-weight-bold">Edogaru</span>
            <span className="text-black-50">edogaru@mail.com.my</span>
          </div>
        </div>
                {/* <div className="w-1/4 border-r">
                    <div className="flex flex-col items-center text-center p-3 py-5">
                        <img className="rounded-circle mt-5" width="150px" src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg" alt="Profile" />
                        <span className="font-weight-bold">Edogaru</span>
                        <span className="text-black-50">edogaru@mail.com.my</span>
                    </div>
                </div> */}
                <div className="w-3/5 border-r">
                    <div className="p-3 py-5">
                        <div className="flex justify-between items-center mb-3">
                            <h4 className="text-right">Profile Settings</h4>
                        </div>
                        <div className="flex mb-5">
                            <div className="w-1/2 mr-2">
                                <label className="block text-sm font-medium text-gray-600">Name</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="First name" value="" />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label className="block text-sm font-medium text-gray-600">Surname</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="Surname" value="" />
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <div className="w-1/2 mr-2">
                                <label className="block text-sm font-medium text-gray-600">Phone Number</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="Phone Number" value="" />
                            </div>
                            <div className="w-1/2 ml-2">
                            <label className="block text-sm font-medium text-gray-600">Gender</label>
                            <select name='gender' className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500">
                                <option value='Male'>Male</option>
                                <option value='Female'>Female</option>
                            </select>
                            </div>
                        </div>
                        <div className="flex mb-5">
                            <div className="w-1/2 mr-2">
                                <label className="block text-sm font-medium text-gray-600">College</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="College" value="" />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label className="block text-sm font-medium text-gray-600">Course</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="Course" value="" />
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-1/2 mr-2">
                                <label className="block text-sm font-medium text-gray-600">Student Number</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="First name" value="" />
                            </div>
                            <div className="w-1/2 ml-2">
                                <label className="block text-sm font-medium text-gray-600">Registration Number</label>
                                <input type="text" className="mt-1 p-2 border rounded-md w-full focus:outline-none focus:border-purple-500" placeholder="Surname" value="" />
                            </div>
                        </div>
                        
                        
                        <div className="mt-5 text-center">
                        <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Save Profile</button>
                        </div>
                    </div>
                </div>
               
            </div>
        </div>


    );
};

export default ProfilePage;
