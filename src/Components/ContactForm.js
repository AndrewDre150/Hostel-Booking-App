import React from 'react';
import bg from '../images/bg-1.jpg'
import bg2 from '../images/bg-2.jpeg'
import bg3 from '../images/backg.jpg'
import bg4 from '../images/bg-3.jpg'
import bg5 from '../images/bg-5.jpg'

function ContactForm() {
    const containerStyle = {
    backgroundImage: `url(${bg5})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    
    };

    return (
        <div className="container my-24 mx-auto md:px-6" style={containerStyle} id='contact'>
            <section className="mb-5 mt-5">
                <div className="flex flex-wrap">
                    <div className="mb-10 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6">
                        <h2 className="mb-6 text-3xl font-bold mt-4" style={{color: 'orange'}}>Contact us</h2>
                        <p className="mb-6 text-neutral-500 dark:text-neutral-300" style={{color: 'black'}}>
                        Have a question, comment, or just want to get in touch? We'd love to hear from you! Use the form below to send us a message and we'll get back to you as soon as possibl
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300" style={{color: 'blue'}}>
                            Makerere Univeristy, Kampala
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300" style={{color: 'blue'}}>
                            + 256 700294565
                        </p>
                        <p className="mb-2 text-neutral-500 dark:text-neutral-300" style={{color: 'blue'}}>
                            codesynergy@gmail.com
                        </p>
                    </div>
                    <div className="mb-12 w-full shrink-0 grow-0 basis-auto md:mb-0 md:w-6/12 md:px-3 lg:px-6 mt-4">
                        <form>
                            
                            <div className='forminputs'>
                                <input type='text' name='name' placeholder='Name'></input>
                            </div>

                            <div className='forminputs'>
                                <input type='email' name='email' placeholder='email'></input>
                            </div>
                            <div className='t-area'>
                                <textarea type='text' placeholder='Message'></textarea>
                            </div>

                           

                            {/* Checkbox */}
                            <div className="mb-6 inline-block min-h-[1.5rem] justify-center pl-[1.5rem] md:flex">
                                <input
                                    className="relative float-left mt-[0.15rem] mr-[6px] -ml-[1.5rem] h-[1.125rem] w-[1.125rem] appearance-none rounded-[0.25rem] border-[0.125rem] border-solid border-neutral-300 outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:ml-[0.25rem] checked:after:-mt-px checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-t-0 checked:after:border-l-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:ml-[0.25rem] checked:focus:after:-mt-px checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-t-0 checked:focus:after:border-l-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                                    type="checkbox"
                                    value=""
                                    id="exampleCheck96"
                                    // defaultChecked
                                />
                                <label className="inline-block pl-[0.15rem] hover:cursor-pointer" htmlFor="exampleCheck96">
                                    Send me a copy of this message
                                </label>
                            </div>

                           <button type="button" class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-4 w-full">Send</button>
                            {/* <button type="button"  className="text-white  bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 w-full">Send</button> */}
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ContactForm;
