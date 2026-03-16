import React, { useState } from "react";
import { Link } from "react-router";
import { Button } from "~/Components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  return (
    <>
      <section className="container !mt-4 md:!mt-8 px-6 md:px-10 lg:px-0">
        <div className="bg-peach rounded-[0.9375rem] overflow-hidden px-6 py-[4.5rem] md:px-14 md:py-16 lg:px-[95px] lg:py-[55px] bg-[url('/assets/contact/mobile/bg-pattern-hero-contact-mobile.svg')] md:bg-[url('/assets/contact/desktop/bg-pattern-hero-desktop.svg')] bg-no-repeat bg-left-top md:bg-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start w-full">
            <div className="text-center lg:text-left">
              <h1 className="text-white text-[2rem] md:text-5xl font-medium leading-[2.25rem] md:leading-[3rem] mb-6">
                Contact Us
              </h1>
              <p className="text-white text-[0.9375rem] md:text-base font-normal leading-[1.625rem] max-w-[35rem] mx-auto lg:mx-0">
                Ready to take it to the next level? Let&apos;s talk about your project
                or idea and find out how we can help your business grow. If you are
                looking for unique digital experiences that&apos;s relatable to your
                users, drop us a line.
              </p>
            </div>

            <div className="relative z-10">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-[0.9375rem] md:text-base px-3"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-[0.9375rem] md:text-base px-3"
                    required
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-[0.9375rem] md:text-base px-3"
                    required
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full bg-transparent border-0 border-b border-white/50 pb-3 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none text-[0.9375rem] md:text-base px-3"
                    required
                  />
                </div>
                <div className="flex justify-center lg:justify-end pt-4">
                  <Button
                    type="submit"
                    className="uppercase py-4 px-8 cursor-pointer bg-white rounded-lg text-sm font-medium text-dark-gray hover:bg-light-gray transition-colors"
                  >
                    Submit
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="container mt-24 md:mt-32 lg:mt-40 mb-[17rem] px-6 md:px-10 lg:px-0">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 text-center">
          <div className="flex flex-col items-center">
            <div className="bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8">
              <img src="/assets/shared/desktop/illustration-canada.svg" alt="Canada" />
            </div>
            <h3 className="text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase">Canada</h3>
            <Link
              to="/locations"
              className="bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors"
            >
              See Location
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8">
              <img src="/assets/shared/desktop/illustration-australia.svg" alt="Australia" />
            </div>
            <h3 className="text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase">Australia</h3>
            <Link
              to="/locations"
              className="bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors"
            >
              See Location
            </Link>
          </div>

          <div className="flex flex-col items-center">
            <div className="bg-[url('/assets/shared/desktop/bg-pattern-small-circle.svg')] bg-no-repeat bg-center mb-8">
              <img src="/assets/shared/desktop/illustration-united-kingdom.svg" alt="United Kingdom" />
            </div>
            <h3 className="text-dark-gray text-xl font-medium tracking-[5px] mb-8 uppercase">United Kingdom</h3>
            <Link
              to="/locations"
              className="bg-peach hover:bg-light-peach text-white text-[15px] font-medium tracking-[1px] uppercase py-4 px-6 rounded-[8px] transition-colors"
            >
              See Location
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
