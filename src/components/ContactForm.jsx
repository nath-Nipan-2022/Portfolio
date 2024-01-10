import emailjs from "@emailjs/browser";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { Input } from "./Input";

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const sendEmail = async (data) => {
    setIsSubmitting(true);
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    const options = {
      from_name: data.name,
      from_email: data.email,
      to_name: "Nipan Debnath",
      to_email: "debnathnipan719@gmail.com",
      message: data.msg,
    };

    emailjs.send(serviceId, templateId, options, publicKey).then(
      () => {
        reset();
        setIsSubmitting(false);
        alert("Thank you for your message, I will reach out to you shortly.");
      },
      (error) => {
        setIsSubmitting(false);
        console.log(error.text);
        alert(error.text);
      }
    );
  };
  return (
    <form
      onSubmit={handleSubmit(sendEmail)}
      className="flex flex-col gap-3 mt-4"
    >
      <Input
        label="your name"
        type="text"
        name="name"
        register={register("name", {
          required: "Name is required!",
          minLength: 3,
        })}
        aria-invalid={errors.name ? "true" : "false"}
        errorMessage={errors.name && errors.name.message}
      />
      <Input
        label="your email"
        type="email"
        name="email"
        register={register("email", {
          required: "Email is required!",
          minLength: 5,
          pattern: "/^[A-Z0-9. _%+-]+@[A-Z0-9. -]+. [A-Z]{2,}$/i",
        })}
        aria-invalid={errors.email ? "true" : "false"}
        errorMessage={errors.email && errors.email.message}
      />
      <div>
        <label
          htmlFor="msg"
          className="block mb-1 text-sm font-medium text-white capitalize"
        >
          your message
        </label>
        <textarea
          name="msg"
          id="msg"
          rows="7"
          className="input"
          placeholder="Write your message"
          {...register("msg", {
            required: "Message is required!",
            minLength: 10,
          })}
          aria-invalid={errors.msg ? "true" : "false"}
        ></textarea>
        {errors.msg && (
          <p className="py-1 text-sm font-medium text-red-400" role="alert">
            {errors.msg.message || "Message must be at least 10 character(s)"}
          </p>
        )}
      </div>

      <button
        type="submit"
        className="text-white bg-gradient-to-br from-purple-500 to-blue-400 hover:bg-gradient-to-bl focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center w-fit flex items-center gap-2 focus-visible:ring focus-visible:ring-blue-400/50"
        disabled={isSubmitting}
      >
        {isSubmitting && (
          <span className="inline-block w-4 h-4 border rounded-full border-black/60 border-t-white animate-spin"></span>
        )}
        Send Message
      </button>
    </form>
  );
}
