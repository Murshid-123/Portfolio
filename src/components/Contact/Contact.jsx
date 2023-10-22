import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Link } from 'react-router-dom';
function Contact() {
  const [state, handleSubmit] = useForm("maygvqvd");
  if (state.succeeded) {
      return (
      <div className="max-w-md mx-auto p-4 rounded-lg h-72 bg-slate-300 my-36 flex flex-col justify-evenly">
        <h1 className="text-3xl font-semibold mb-4">Thanks!</h1>
        <p className="text-gray-700 text-lg mb-4">The form was submitted successfully</p>
        <Link to="/" className="text-blue-500 hover:text-red-500 font-semibold">Go back</Link>
      </div>

      );
  }
  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4 my-24">
    <div className="mb-4">
      <label htmlFor="email" className="text-sm font-semibold">Email Address</label>
      <input
        id="email"
        type="email"
        name="email"
        className="w-full p-2 border border-gray-500 rounded"
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />
    </div>
  
    <div className="mb-4">
      <label htmlFor="message" className="text-sm font-semibold">Message</label>
      <textarea
        id="message"
        name="message"
        className="w-full h-52 p-2 border border-gray-600 rounded"
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />
    </div>
  
    <button
      type="submit"
      disabled={state.submitting}
      className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded transition duration-300"
    >
      Submit
    </button>
  </form>
  
  );
}

export default Contact