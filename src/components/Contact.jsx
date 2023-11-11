import { useState, useRef } from "react";
import { motion as m } from "framer-motion";
import emailjs from "@emailjs/browser";

import { EarthCanvas } from "./canvas";
import { SectionContainer, SectionHeader } from "./SectionContainer";
import { slideIn } from "../utils";

export const Contact = () => {
  const [isSending, setIsSending] = useState(false);
  const formRef = useRef();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleFormChange = (evt) => {
    const target = evt.target;
    setForm({ ...form, [target.name]: target.value });
  };

  const sendEmail = (evt) => {
    // setIsSending(true);
    evt.preventDefault();
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Nipan Debnath",
          to_email: "debnathnipan719@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then(
        (result) => {
          setIsSending(false);
          setForm({ name: "", email: "", message: "" });
          console.log(result.text);
          alert(
            "Thank you for your message, I will contact you as soon as possible."
          );
        },
        (error) => {
          setIsSending(false);
          console.log(error.text);
          alert("Something went wrong!");
        }
      );
  };

  return (
    <SectionContainer id={"contact"}>
      <div className="flex flex-col gap-20 overflow-hidden lg:gap-10 lg:flex-row-reverse md:items-center">
        {/* 3d planet */}
        <m.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="md:h-[550px] h-[350px] lg:w-1/2"
        >
          <EarthCanvas />
        </m.div>

        {/* Contact form */}
        <m.article
          variants={slideIn("left", "tween", 0.2, 1)}
          className="p-8 rounded-[20px] bg-tertiary md:w-[600px]"
        >
          <SectionHeader subTitle={"Get in touch"} title={"Contact me."} />

          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-8 mt-8"
          >
            <InputField
              title={"your name"}
              type={"text"}
              value={form.name}
              onChange={handleFormChange}
              name={"name"}
              placeholder={"Enter your name"}
            />
            <InputField
              title={"your email"}
              type={"text"}
              value={form.email}
              onChange={handleFormChange}
              name={"email"}
              placeholder={"example@gmail.com"}
            />

            <label className="flex flex-col gap-4">
              <span className="text-sm font-semibold text-white capitalize">
                your message
              </span>
              <textarea
                name="message"
                id="message"
                value={form.message}
                onChange={handleFormChange}
                rows="7"
                required
                className="px-4 py-2 font-medium text-white border rounded-lg outline-none border-secondary/30 bg-secondary/10 placeholder:text-secondary hover:border-secondary/50 focus:border-secondary/50"
              ></textarea>
            </label>

            <button
              className="capitalize transition border rounded-lg outline-none btn w-fit border-secondary/40 hover:bg-[#c5b6ff] focus:bg-[#c5b6ff] hover:text-primary focus:text-primary h-9 disabled:opacity-70 disabled:bg-[#c5b6ff]"
              disabled={isSending}
            >
              <span className="pt-1">
                {isSending ? "Sending..." : "Send Message"}
              </span>
            </button>
          </form>
        </m.article>
      </div>
    </SectionContainer>
  );
};

const InputField = ({
  title,
  type,
  value,
  name,
  onChange,
  placeholder,
  props,
}) => {
  return (
    <label htmlFor={name} className="flex flex-col gap-4">
      <span className="text-sm font-semibold text-white capitalize">
        {title}
      </span>
      <input
        type={type}
        value={value}
        name={name}
        id={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete="on"
        required
        className="px-4 py-2 font-medium text-white border rounded-lg outline-none border-secondary/30 bg-secondary/10 placeholder:text-secondary hover:border-secondary/50 focus:border-secondary/50"
        {...props}
      />
    </label>
  );
};
