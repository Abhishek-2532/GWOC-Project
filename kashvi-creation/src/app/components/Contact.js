const Contact = () => {
    return (
      <section className="py-8 px-4">
        <h2 className="text-2xl font-bold text-center mb-4">Contact Us</h2>
        <p className="text-gray-700 text-center">Feel free to reach out to us for inquiries!</p>
        <form className="max-w-lg mx-auto mt-6">
          <input type="text" placeholder="Your Name" className="block w-full p-2 border rounded mb-4" />
          <input type="email" placeholder="Your Email" className="block w-full p-2 border rounded mb-4" />
          <textarea placeholder="Your Message" className="block w-full p-2 border rounded mb-4"></textarea>
          <button className="bg-black text-white px-6 py-2 rounded">Send</button>
        </form>
      </section>
    );
  };
  
  export default Contact;
  