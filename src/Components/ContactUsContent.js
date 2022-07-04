import React from "react";

const ContactUsContent = () => {
  return (
    // <div className="cmain container" style={{ marginTop: "100px" }}>
    //     <h1>Contact us</h1>
    //     <div
    //       style={{
    //         display: "flex",
    //         backgroundColor: "hsl(101, 86%, 78%)",
    //         border: "solid black 1px",
    //       }}
    //     >
    //       <div>
    //         <img src="logo192.png" alt="" className="logo1" />
    //       </div>
    //       <div className="container my-3 contac" style={{ padding: "25px" }}>
    //         For other concerns, feel free to visit our Help Center Page here
    //         Can't find the answer you are looking for? Contact us through{" "}
    //         <a
    //           href="https://api.whatsapp.com/send?phone=03355923388"
    //           target="_blank"
    //           rel="noreferrer"
    //         >
    //           LIVE CHAT
    //         </a>{" "}
    //         we will assist you. Enter you contact information along with your
    //         google maps mashup idea, or product you would like to recieve more
    //         informaiton about. We will get back to you as soon as we can.
    //       </div>
    //     </div>
    //     <div
    //       className="container my-3"
    //       style={{ padding: "25px", display: "flex", justifyContent: "center" }}
    //     >
    //       <img className="conimg" src="./contactus.png" alt="loading.."></img>
    //     </div>
    //   </div>
    <div >

    
    <section className="text-grey-400 bg-white-900 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black">
            Contact Us
          </h1>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="name" className="leading-7 text-sm text-black-400">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter Name"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-black-400 focus:bg-gray-300 focus:ring-2 focus:ring-black-700 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-1/2">
              <div className="relative">
                <label for="email" className="leading-7 text-sm text-black-400">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Enter Email"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-black-400 focus:bg-gray-300 focus:ring-2 focus:ring-black-700 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-black-400"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  placeholder="Enter Phone Number"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-black-400 focus:bg-gray-300 focus:ring-2 focus:ring-black-700 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
              </div>
            </div>
            <div className="p-2 w-full">
              <div className="relative">
                <label
                  for="message"
                  className="leading-7 text-sm text-black-400"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Enter Your Message"
                  className="w-full bg-gray-200 bg-opacity-40 rounded border border-gray-700 focus:border-black-400 focus:bg-gray-300 focus:ring-2 focus:ring-black-700 h-32 text-base outline-none text-black-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                ></textarea>
              </div>
            </div>
            <div className="p-2 w-full">
              <button className="flex mx-auto text-white bg-lime-500 border-0 py-2 px-8 focus:outline-none hover:bg-lime-600 rounded text-lg">
                Send
              </button>
            </div>
            <div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
              <a className="text-indigo-400">contact@landzhub.com</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
};

export default ContactUsContent;
