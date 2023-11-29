// import React, { useState} from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { Link } from 'react-router-dom';
// import { auth } from '../firebase'

// function SignupCustodian() {
//     const navigate = useNavigate();

//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [hostelname, sethostelname] = useState('');
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);

//     const onSubmit = async (e) => {
//         e.preventDefault();
    
//         // Check if password and confirm password match
//         if (password !== confirmPassword) {
//           console.log("Passwords do not match");
//           return;
//         }
    
//         await createUserWithEmailAndPassword(auth, email, password, confirmPassword)
//           .then((userCredential) => {
//             // Signed in
//             const user = userCredential.user;
//             console.log(user);
//             navigate('/custodianlogin');
//             // ...
//           })
//           .catch((error) => {
//             const errorCode = error.code;
//             const errorMessage = error.message;
//             console.log(errorCode, errorMessage);
//             // ..
//           });
//       };
    
//       const toggleShowPassword = () => {
//         setShowPassword(!showPassword);
//       };
    
//       const toggleShowConfirmPassword = () => {
//         setShowConfirmPassword(!showConfirmPassword);
//       };
//   return (
//     <div>
//         <div>
//       <section className="bg-gray-50 dark:bg-gray-900" >
//       <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
//         <div className="w-full bg-white rounded-lg shadow dark:border md: sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-20">
//           <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            
//             <h1 style={{textAlign: 'center'}} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
//               Create a Hostel account
//             </h1>
           
//             <form className="space-y-4 md:space-y-6 " action="#" >   
            
//             <div>
//                 <label htmlFor="HostelName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hostel Name</label>
//                 <input type="hostelname" name="hostelname" value={hostelname} id="hostelname" placeholder="Hostel Name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//               </div>
//               <div>
//                 <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
//                 <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
//               </div>
              
//               <div>
//                 <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
//                 <div className="relative">
//                 <input  type={showPassword ? "text" : "password"} value={password} name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                 <span
//                   onClick={toggleShowPassword}
//                   className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                 >
//                   {showPassword ? "Hide" : "Show"}
//                 </span>
//                 </div>
//               </div>


//               <div>
//                 <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
//                 <div className="relative">
//                 <input  type={showConfirmPassword ? "text" : "password"} value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
//                 <span
//                   onClick={toggleShowConfirmPassword}
//                   className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                 >
//                   {showConfirmPassword ? "Hide" : "Show"}
//                 </span>
//                 </div>
//               </div>
//               {/* <div>
//                 <h3 style={{marginBottom: 5}}>Upload your Business Licence</h3>
//                 <input
//                 type="file"
//                 accept=".pdf, .doc, .docx"  
//                 />
//               </div> */}
//               <div className="flex items-start">
//                 <div className="flex items-center h-5">
//                   <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
//                 </div>
//                 <div className="ml-3 text-sm">
//                   <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
//                 </div>
//               </div>
              
//               <button type="submit"  onClick={onSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//                 Sign Up
//               </button>
//               <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
//             Already have an account? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to='/custodianlogin'>Login Here</Link></a>
//           </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </section>
//     </div>
//     </div>
//   )
// }

// export default SignupCustodian


import React, { useState }  from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { auth } from '../firebase'

function NewSignup() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [hostelname, sethostelname] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);


    const onSubmit = async (e) => {
        e.preventDefault();
    
        // Check if password and confirm password match
        if (password !== confirmPassword) {
          console.log("Passwords do not match");
          return;
        }
    
        await createUserWithEmailAndPassword(auth, email, password, confirmPassword)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            navigate('/custodianlogin');
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage);
            // ..
          });
      };
    
      const toggleShowPassword = () => {
        setShowPassword(!showPassword);
      };
    
      const toggleShowConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
      };
  return (
    <div>
        <div>
               <section className="bg-gray-50 dark:bg-gray-900">
      {/* <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8"> */}
          <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 ">
        <div className="w-full bg-white rounded-lg shadow dark:border md: sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700 mt-20">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            
            <h1 style={{textAlign: 'center'}} className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              Create an account
            </h1>
           
            <form className="space-y-4 md:space-y-6" action="#" >   {/*onSubmit={handleSubmit}*/}
            <div>
                <label htmlFor="hostelname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hostel Name</label>
                <input type="text" name="hostelname"  onChange={(e) => sethostelname(e.target.value)} value={hostelname} id="hostelname" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Hostel Name" required />
              </div>
              
              <div>
                <label htmlFor="email-address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name="email" id="email" value={email}  onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@gmail.com" required />
              </div>

              <div>
                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                <div className="relative">
                <input  type={showPassword ? "text" : "password"} value={password} name="password" onChange={(e) => setPassword(e.target.value)} id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <span
                  onClick={toggleShowPassword}
                  className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showPassword ? "Hide" : "Show"}
                </span>
                </div>
              </div>


              <div>
                <label htmlFor="confirm-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Confirm password</label>
                <div className="relative">
                <input  type={showConfirmPassword ? "text" : "password"} value={confirmPassword}  onChange={(e) => setConfirmPassword(e.target.value)} name="confirm-password" id="confirm-password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                <span
                  onClick={toggleShowConfirmPassword}
                  className="absolute top-2 right-2 cursor-pointer text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </span>
                </div>
              </div>
               <div>
                 <h3 style={{marginBottom: 5}}>Upload your Business Licence</h3>
                 <input
                type="file"
                accept=".pdf, .doc, .docx"  
                />
              </div>
              
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input id="terms" aria-describedby="terms" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" required />
                </div>
                <div className="ml-3 text-sm">
                  <label htmlFor="terms" className="font-light text-gray-500 dark:text-gray-300">I accept the <a className="font-medium text-primary-600 hover:underline dark:text-primary-500" href="#">Terms and Conditions</a></label>
                </div>
              </div>
             
              <button type="submit" onClick={onSubmit} className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Sign Up
              </button>
       
              <div className="text-sm font-medium text-gray-500 dark:text-gray-300">
            Already have an account? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500"><Link to='/custodianlogin'>Login Here</Link></a>
          </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    </div>
    </div>
  )
}

export default NewSignup