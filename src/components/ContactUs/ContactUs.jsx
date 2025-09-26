import React from 'react'

const ContactUs = () => {
  return (
    <div className="py-35 px-4 bg-stone-50 text-center">
  <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h2>
  <p className="text-zinc-600 max-w-[800px] text-lg mx-auto mb-10">
    Have questions, feedback, or need support? We're here to help!
    Reach out to us and we’ll get back to you as soon as possible.
  </p>

  <form className="max-w-[600px] mx-auto text-left space-y-6">
    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Your Name"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="your@email.com"
      />
    </div>

    <div>
      <label className="block text-sm font-medium mb-1" htmlFor="message">Message</label>
      <textarea
        id="message"
        rows="5"
        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
        placeholder="Write your message here..."
      />
    </div>

    <button
      type="submit"
      className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-md w-full md:w-auto"
    >
      Send Message
    </button>
  </form>
</div>

  )
}

export default ContactUs
