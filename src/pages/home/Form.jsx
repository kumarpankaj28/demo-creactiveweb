 //eslint-disable-next-line
import React from 'react';
import { FaHandsHelping } from "react-icons/fa";


export const Form = () => {
    return (
        <div className='w-full py-32 '>
            <div className="max-w-3xl mx-auto bg-black p-6  shadow-md  ">

                    <div className='w-20  mx-auto text-[#f15e31] m-[3rem] bg-black rounded-full border-radius justify-center text-center'>
                    <FaHandsHelping size="5rem "  />
                    </div>

                <h1 className="text-3xl font-semibold text-center text-white mb-4"><span className='text-[#f15e31]'>/ {' '}</span> Book an Appointment</h1>
                <form >
                    <div className="mb-6">
                        <input class=" shadow appearance-none w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-black " required id='name' name="name" type="text" placeholder="Full Name" />
                        <hr />
                    </div>
                    <div className="mb-6">
                        <input class="shadow appearance-none  w-full py-2 px-3 text-white leading-tight bg-black focus:outline-none focus:shadow-outline" required  name="email"  type="email" placeholder="Email" />
                        <hr />
                    </div>
                    <div className="mb-6">
                        <input class="shadow appearance-none w-full py-2 px-3 text-white leading-tight bg-black focus:outline-none focus:shadow-outline"required  name="phone"  type="phone" placeholder="Phone number" ></input>
                        <hr />
                    </div>
                    <div className="mb-6">
                        <textarea class="shadow appearance-none w-full py-2 px-3 text-white leading-tight bg-black focus:outline-none focus:shadow-outline" required  name="message"  type="text" placeholder="Message" ></textarea>
                        <hr />
                    </div>
                    <div className="mb-6">
                        <input class="shadow appearance-none w-full py-2 px-3 text-white leading-tight bg-black focus:outline-none focus:shadow-outline" required  name="captcha"  type="text" placeholder="Captcha" ></input>
                        <hr />
                    </div>
                    <div className="flex items-center justify-between py-6">
                        <button className="bg-[#f15e31] text-white font-bold py-2 px-10 mx-auto focus:outline-none focus:shadow-outline" type="submit" >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
