import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h2 className="text-3xl text-center font-semibold mb-8 text-gray-800">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Get in Touch</h3>
          <p className="mb-4 text-gray-600">
            Have questions or need assistance? Feel free to reach out to us. We're here to help!
          </p>
          <ul className="text-gray-600">
            <li className="mb-2">
              <strong>Address:</strong> 123 Vapor Street, Vape City, VC 45678
            </li>
            <li className="mb-2">
              <strong>Phone:</strong> (123) 456-7890
            </li>
            <li className="mb-2">
              <strong>Email:</strong> contact@vaporworld.com
            </li>
            <li>
              <strong>Hours:</strong> Mon - Fri: 9am - 9pm | Sat - Sun: 10am - 6pm
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div className="bg-white text-gray-800 p-6 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">Send Us a Message</h3>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-600">
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="mt-1 block w-full rounded-md bg-gray-100 text-gray-800 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
