import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-slate-900 flex mx-auto justify-center items-center p-4"
    >
      <form
        method="POST"
        action="https://getform.io/f/arolrwkb"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8 text-center">
          <p className="text-4xl text-gray-300 inline font-bold border-b-4 border-[#398676]">
            Contact
          </p>
          <p className="text-gray-400 py-4 text-xl">// Send me a message</p>
        </div>
        <input
          type="text"
          className="p-2 bg-[#ccd6f6] outline-none"
          name="name"
          placeholder="Name"
        />
        <input
          type="email"
          className="my-4 p-2 bg-[#ccd6f6] outline-none"
          name="email"
          placeholder="Email"
        />
        <textarea
          name="message"
          className="bg-[#ccd6f6] p-2 outline-none"
          rows="5"
          placeholder="Message"
        ></textarea>
        <button className="text-white border-2 px-4 py-3 my-4 mx-auto hover:bg-[#398676] hover:border-[#398676] cursor-pointer">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
