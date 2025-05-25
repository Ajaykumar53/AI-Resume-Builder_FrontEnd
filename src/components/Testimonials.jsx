const testimonials = [
  {
    name: "John Doe",
    feedback:
      "This resume builder helped me land my dream job. Highly recommended!",
  },
  {
    name: "Jane Smith",
    feedback:
      "Incredible experience! The AI suggestions were spot-on and professional.",
  },
  {
    name: "Emily Johnson",
    feedback:
      "Super easy to use and the results were outstanding. My resume looks amazing!",
  },
];

const Testimonials = () => {
  return (
    <div className="mt-16 bg-black text-white py-16 rounded-xl">
      <h3 className="text-center text-4xl font-bold mb-10">
        What Our Users Say
      </h3>
      <div className="flex overflow-x-scroll no-scrollbar space-x-6 px-6">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="p-6 bg-black/40 backdrop-blur-lg rounded-xl min-w-[320px] shadow-lg"
          >
            <p className="italic text-gray-300">"{testimonial.feedback}"</p>
            <p className="mt-4 font-bold">{testimonial.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
