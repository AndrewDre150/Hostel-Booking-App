import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { removeOneImagesPath } from '../utils/formatUrls';
import hero5 from '../images/hero-5.jpg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWifi, faShieldAlt, faPhone, faBed, faUserFriends, faWhatsapp, faFacebook, faInstagram } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

// const dummyhostels = [
//   { id: 1, name: 'Hostel A', location: 'City Center', price: '$50/night', phone: '+123-456-7890',shuttle: '2', wifi: 'available', security: '24/7', images: ['r1.png', 'r2.png', 'r1.png'] },
//   { id: 2, name: 'Hostel B', location: 'Near Beach', price: '$45/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: '24/7', images: ['r2.png', 'r3.png', 'r2.png'] },
//   { id: 3, name: 'Hostel C', location: 'Downtown', price: '$55/night', phone: '+123-456-7890',shuttle: 'N/A', wifi: 'N/A', security: '24/7', images: ['r3.png', 'r2.png', 'r3.png'] },
//   { id: 4, name: 'Hostel D', location: 'Mountain View', price: '$60/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: 'N/A', images: ['r1.png', 'r2.png', 'r1.png'] },
//   { id: 5, name: 'Hostel E', location: 'Riverside', price: '$48/night', phone: '+123-456-7890',shuttle: '2', wifi: 'available', security: '24/7', images: ['r2.png', 'r3.png', 'r2.png'] },
//   { id: 6, name: 'Hostel F', location: 'Old Town', price: '$52/night', phone: '+123-456-7890',shuttle: '1', wifi: 'N/A', security: '24/7', images: ['r3.png', 'r2.png', 'r3.png'] },
//   { id: 7, name: 'Hostel G', location: 'Lakefront', price: '$58/night', phone: '+123-456-7890',shuttle: '1', wifi: 'available', security: 'N/A', images: ['r2.png', 'r3.png', 'r1.png'] },
//   { id: 8, name: 'Hostel H', location: 'Countryside', price: '$56/night', phone: '+123-456-7890',shuttle: 'N/A', wifi: 'available', security: '24/7', images: ['r2.png', 'r2.png', 'r1.png'] },
//   { id: 9, name: 'Hostel I', location: 'Seaside', price: '$62/night', phone: '+123-456-7890',shuttle: '1', wifi: 'N/A', security: 'N/A', images: ['r3.png', 'r2.png', 'r3.png'] },
// ];

const RoomDetails = ({ location }) => {
  
//   const hostel = location?.state?.hostel || {};
//   console.log(hostel)
const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/hostels/${id}/`);
        setRoom(response.data);
        console.log(response.data);
      } catch (error) {
        console.error('Error fetching room details:', error);
      }
    };

    console.log('Room ID:', id);

    fetchRoomDetails();
  }, [id]);

  if (!room) {
    return <div>Loading...</div>;
  } else {
    const imageUrl = removeOneImagesPath(room.image);

  return (
    <div>
      <div className="room-details">
        <div className="slideshow-container">
          <img src={hero5} alt="Room Image" className="room-image" />
        </div>
        <div className="room-container">
          <h2 style={{color: 'orange', fontWeight: '700'}}>Book for a room at our Hostel Booking App Today</h2>
          <p>
            Experience Fantastic Benefits and Obtain Better Rates When You Make
            a Direct Booking on Our Official Website
          </p>
          <div>
            <h2 style={{color:'darkblue'}}>{room.hostel_name} Room Details</h2>
          </div>
          <table className="student-table">
            <tbody>
              <tr>
                <td>Description: </td>
                <td>{room.description}</td>
              </tr>
              <tr>
                <td>Category: </td>
                <td>{room.category}</td>
              </tr>
              <tr>
                <td>Price:</td>
                <td>{room.price}</td>
              </tr>
              <tr>
                <td>Reading Room:</td>
                <td> {room.reading_room ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <td>Contact <FontAwesomeIcon icon={faPhone} />:</td>
                <td> {room.contact}</td>
              </tr>
              <tr>
                <td>Shuttle:</td>
                <td> {room.shuttle ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <td>Wifi <FontAwesomeIcon icon={faWifi}/>:</td>
                <td> {room.wifi ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <td>Security:</td>
                <td> {room.security ? 'Yes' : 'No'}</td>
              </tr>
              <tr>
                <td>Website:</td>
                <td><a href='#' style={{color:'blue'}}>{room.website}</a></td>
              </tr>
            </tbody>
          </table>
          <div className="emptyDiv"></div>
          <div>
            <Link to="/booking">
              <button className="booknowButton">Book Now!</button>
            </Link>
          </div>
        </div>
      </div>
      <div>
        <h2 style={{ color: 'orange', fontWeight: '700', fontSize: '20', textAlign: 'center' }}>View Hostel Location</h2>
        <iframe
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15958.994002901523!2d32.5711991!3d0.33896155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb14292435e3%3A0xf74918dbc6cfae87!2sKann%20Hostel!5e0!3m2!1sen!2sug!4v1699453420195!5m2!1sen!2sug"
          width={1350}
          height={450}
          style={{ border: 0 }}
          allowFullScreen=""
         loading="lazy"
         referrerPolicy="no-referrer-when-downgrade"
         />
      </div>
    </div>
  );
  }
};

export default RoomDetails;




// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';
// import axios from 'axios';
// import { removeOneImagesPath } from '../utils/formatUrls'; // Import the utility function

// const RoomDetail = () => {
//   const { id } = useParams();
//   const [room, setRoom] = useState(null);

//   useEffect(() => {
//     const fetchRoomDetails = async () => {
//       try {
//         const response = await axios.get(`http://localhost:8000/api/hostels/${id}/`);
//         setRoom(response.data);
//         console.log(response.data);
//       } catch (error) {
//         console.error('Error fetching room details:', error);
//       }
//     };

//     console.log('Room ID:', id);

//     fetchRoomDetails();
//   }, [id]);

//   if (!room) {
//     return <div>Loading...</div>;
//   } else {
//     const imageUrl = removeOneImagesPath(room.image);

//     return (
//       <div>
//         <h1>{room.room_name} Details</h1>
//         <img src={imageUrl} alt={`Room ${room.room_name}`} /> {/* Display the image */}
//         <p>Category: {room.category}</p>
//         <p>Price: {room.price}</p>
//         <p>Description: {room.description}</p>
//         {/* Add more details as needed */}
//         <p>Security: {room.security ? 'Yes' : 'No'}</p>
//         <p>Shuttle: {room.shuttle ? 'Yes' : 'No'}</p>
//         <p>Reading Room: {room.reading_room ? 'Yes' : 'No'}</p>
//         <p>WiFi: {room.wifi ? 'Yes' : 'No'}</p>
//         <p>Contact: {room.contact}</p>
//         <p>Website: {room.website}</p>
//       </div>
//     );
//   }
// };

// export default RoomDetail;
