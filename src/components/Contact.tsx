import Link from "next/link";

const Contact = () => {
  return (
    <div
      id="contact"
      className="bg-gray-300  flex justify-center items-center py-20"
    >
      <div className="w-[98%] max-w-4xl mx-auto px-3">
        <h1 className="text-[25px] font-bold section-heading relative inline-block mb-3">
          Contact
        </h1>
        <p className="text-[20px] font-medium my-6">Ready to join forces or bring me on board?</p>
        <Link type="email" href="mailto:shabimoshood07@gmail.com" className="text-[25px] font-bold hover:text-red-500 duration-300">
          Let&apos;s connect via email! 🚀📩
        </Link>
      </div>
    </div>
  );
};

export default Contact;
