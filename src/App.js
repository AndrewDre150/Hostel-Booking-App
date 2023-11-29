import React, {useState} from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import './App.css';
// import Card1 from './Components/Login';
import ForgotPassword from './Components/ForgotPassword';
import Landing from './Components/Landing';
import BookingComponent from './Components/BookingComponent';
import StudentDashboard from './Components/StudentDashboard';
import HostelDetails from './Components/HostelDetails';
import MainComponent from './Components/MainComponent';
import MainLogin from './Components/MainLogin';
import NewSignup from './Components/NewSignup';
import NewLogin from './Components/NewLogin';
import SignupCustodian from './Components/SignupCustodian';
import LoginCustodian from './Components/LoginCustodian';
import ProfilePage from './Components/Profilepage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  const logIn = () => {
    setIsLoggedIn(true);
  };
  const logOut = () => {
    setIsLoggedIn(false);
  };

  return (
    <Routes>
      <Route path='/' element={<Landing/>}></Route>
      {/* <Route path='/' element={<Card1></Card1>}/> */}
      <Route path='/forgot' element={<ForgotPassword></ForgotPassword>}/>
      <Route path='/dashboard/' element={<StudentDashboard/>}/>
      <Route path='/booking' element={<BookingComponent/>}></Route>
      <Route path="/book/:id" element={<HostelDetails />} />
      <Route path="/signup" element={<MainComponent/>} />
      <Route path="/mainlogin" element={<MainLogin/>} />
      <Route path='/login' element={<NewLogin/>}/>
      <Route path='/register' element={<NewSignup/>}/>
      <Route path='/custodianlogin' element={<LoginCustodian/>}/> 
      <Route path='custodiansignup' element={<SignupCustodian/>}/>
      <Route path='/profile' element={<ProfilePage/>}/>
    </Routes>
  );
}

export default App;



// function App() {
//   return(
//     // <Card1></Card1>
//     // <ForgotPassword></ForgotPassword>
//     // <NewsletterSection></NewsletterSection>
//     // <Footer></Footer>
//     // <Landing/>
//     // <Navbar></Navbar>
//     // <Hostel></Hostel>
//     // <FAQs></FAQs>
//     // <Hero/>
//     // <Bookingform></Bookingform>
//     // <Booking></Booking>
//     // <BookDashboard></BookDashboard>
//     // <BookingComponent></BookingComponent>
//     // <SideMenu></SideMenu>
//     // <DefaultSidebar></DefaultSidebar>
//     // <StudentDashboard></StudentDashboard>
//     // <ContactForm></ContactForm>
//     // <MapContainer></MapContainer>
//     // <PlacesSearchBox/>
//     // <RoomDetails/>
//     // <HostelDetails/>
//   //  <DummyStudent/>
//   //  <SignUp/>
//   // <CustodianSignup/>
//   // <NewSignup/>
//   // <NewLogin/>
//   // <SignupCustodian/>
//   <LoginCustodian/>
//   )
// }

// export default App;


// import React from 'react';
// import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
// import DummyHeader from './Components/DummyHeader';
// import SearchPage from './Components/SearchPage';
// import DummyNavbar from './Components/DummyNavbar';
// import DummySearch from './Components/DummySearch';

// function App() {
//   return (
//       <Routes>
//         <Route path='/' element={<DummyHeader/>}/>
//         <Route path="/navbar" element={<DummyNavbar />} />
//         {/* <Route path="/search" element={<SearchPage />} /> */}
//         <Route path='/hostelsearch' element={<DummySearch/>}/>
//       </Routes>
//   );
// }

// export default App;
