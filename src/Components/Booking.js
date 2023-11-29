import React from 'react';

function Booking() {
  const payNow = (e) => {
    e.preventDefault();

    const FlutterwaveCheckout = window.FlutterwaveCheckout;

    FlutterwaveCheckout({
      public_key: "FLWPUBK_TEST-eac7478742d87115a2adc72616193669-X",
      tx_ref: "AK_" + Math.floor((Math.random() * 1000000000) + 1),
      amount: document.getElementById("amount").value,
      currency: "UGX",
      customer: {
        email: document.getElementById("email").value,
        phonenumber: document.getElementById("phoneNumber").value,
        name: document.getElementById("fullName").value,
      },
      callback: (data) => {
        const reference = data.tx_ref;
        alert('Payment complete! Reference: ' + reference);
      },
      customizations: {
        title: "HostelApp",
        description: "Payment Transaction with FlutterWave."
      },
    });
  }

  return (
    <div>
      <div className="flex justify-center mb-[-3rem] mt-4">
        <h2 style={{fontSize: 20, fontWeight: 600}}>Please fill in the Booking Form</h2>
      </div>    
      <div className='booking-container'>
        <section className='booking-section'>
          <form id='paymentform' onSubmit={payNow}>
            <div className='headers'>
              <h4>1. Personal Information</h4>
              <hr></hr>
            </div>
            <div className='grouped1'>
              <input type='text' placeholder='Full Name' id="fullName" required></input>
              <input type='text' placeholder='Enter Amount' id="amount" required></input>
            </div>
            <div className='grouped'>
              <input type='text' placeholder='Phone Number' id="phoneNumber" required></input>
              <input type='email' placeholder='Email' id="email" required></input>
              <select name='gender'>
                <option value='Male'>Male</option>
                <option value='Female'>Female</option>
              </select>
            </div>

            <div className='headers'>
              <h4>2. Academic Details</h4>
              <hr></hr>
            </div>
            <div className='grouped1'>
              <input type='text' placeholder='Course Name' required></input>
              {/* <input type='text' placeholder='College Name' required></input> */}
              <select>
                <option>CEES</option>
                <option>COCIS</option>
                <option>CEDAT</option>
                <option>CHS</option>
                <option>CHUSS</option>
                <option>CONAS</option>
                <option>CAES</option>
                <option>COBAMS</option>
                <option>COVABS</option>
                <option>School of Law</option>
              </select>
            </div>

            <div className='headers'>
              <h4>3. Guardians Details</h4>
              <hr></hr>
            </div>
            <div className='grouped1'>
              <input type='text' placeholder='Guardian Name' required></input>
              <input type='text' placeholder='Phone number' required></input>
            </div>

            <div className='confirm'>
              <input type='checkbox' required></input>
              <label>I confirm that the information provided in this form is valid</label>
            </div>

            <div className="flex justify-center">
              <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 mt-5 w-60">Continue</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}

export default Booking;
