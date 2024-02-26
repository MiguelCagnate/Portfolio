const Contact = () => {
  return (
    <div id="contact" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="py-4 text-4xl font-bold text-center text-[#001b5e]">
        Contact
      </h1>
      <form
        action="https://getform.io/f/93f54817-2c94-46a5-9796-e67f4e9e1cfb"
        method="POST"
        encType="multipart/form-data"
      >
        <div className="grid md:grid-cols-2 gap-4 w-full py-2">
          <div className="flex flex-col py-2">
            <label htmlFor="name" className="uppercase text-sm py-2">
              Name
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="name"
              id="name"
              autoComplete="name"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="phone" className="uppercase text-sm py-2">
              Phone Number
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="phone"
              id="phone"
              autoComplete="phone"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="email" className="uppercase text-sm py-2">
              Email
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="email"
              name="email"
              id="email"
              autoComplete="email"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="subject" className="uppercase text-sm py-2">
              Subject
            </label>
            <input
              className="border-2 rounded-lg p-3 flex border-gray-300"
              type="text"
              name="subject"
              id="subject"
              autoComplete="subject"
            ></input>
          </div>
          <div className="flex flex-col py-2">
            <label htmlFor="message" className="uppercase text-sm py-2">
              Message
            </label>
            <textarea
              className="border-2 rounded-lg p-3 border-gray-300"
              rows="7"
              width="10"
              name="message"
              id="message"
              autoComplete="message"
            ></textarea>
          </div>
        </div>
        <button className="bg-[#001b5e] text-gray-100 mt-4 w-full p-4 rounded-lg">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
