import React, { useState } from "react";
import Header from "~/Components/Header";
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
      <Header variant="contact">
        <div className="grid grid-cols-2 gap-12 items-start w-full">
          {/* Left Section - Information */}
          <div className="text-left relative">
            <h1 className="text-white text-5xl font-medium mb-6">
              Contact Us
            </h1>
            <p className="text-white text-base font-normal leading-6">
              Ready to take it to the next level? Let's talk about your project
              or idea and find out how we can help your business grow. If you are
              looking for unique digital experiences that's relatable to your
              users, drop us a line.
            </p>
            {/* Subtle curved shape overlay */}
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -z-0"></div>
          </div>

          {/* Right Section - Form */}
          <div className="relative z-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-transparent border-0 border-b border-white pb-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-base"
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
                  className="w-full bg-transparent border-0 border-b border-white pb-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-base"
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
                  className="w-full bg-transparent border-0 border-b border-white pb-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors text-base"
                  required
                />
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-transparent border-0 border-b border-white pb-4 text-white placeholder:text-white/60 focus:outline-none focus:border-white transition-colors resize-none text-base"
                  required
                />
              </div>
              <div className="flex justify-end pt-4">
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
      </Header>
    </>
  );
};

export default Contact;

