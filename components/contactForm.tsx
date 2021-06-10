import { Dispatch, forwardRef, SetStateAction, useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { ImSpinner8 } from "react-icons/im";
import { FiCheck } from "react-icons/fi";

const contactForm = () => {
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const {
    handleSubmit,
    reset,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: { name: "", email: "", phone: "", message: "" },
  });
  const onSubmit = async ({ name, email, phone, message }) => {
    setStatus("loading");
    const res = await axios.post("/api/contact", {
      name,
      email,
      phone,
      message,
    });
    console.log(res.data);
    reset();
    setStatus("success");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {status === "success" && (
        <p className="text-green-500 text-lg">
          <FiCheck className="inline-block text-2xl" /> Thanks! We'll get back
          to you shortly.
        </p>
      )}
      <label htmlFor="name">
        Name <span className="text-red-500">*</span>
      </label>
      <input
        {...register("name", {
          required: "Please enter your name",
        })}
        className={`input ${errors.name && `border-red-500`}`}
        type="text"
        id="name"
        placeholder="John Smith"
      />
      {errors.name && (
        <p className="text-red-500 -mt-2 text-sm mb-4">
          {errors.name?.message}
        </p>
      )}
      <label htmlFor="email">
        Email <span className="text-red-500">*</span>
      </label>
      <input
        {...register("email", {
          required: "Please enter your email address",
          pattern: {
            value: emailRegex,
            message: "That doesn't look like an email address...",
          },
        })}
        className={`input ${errors.email && `border-red-500`}`}
        type="text"
        id="email"
        placeholder="john.smith@example.com"
      />
      {errors.email && (
        <p className="text-red-500 -mt-2 text-sm mb-4">
          {errors.email?.message}
        </p>
      )}
      <label htmlFor="phone">Phone</label>
      <input
        {...register("phone")}
        className={`input`}
        type="tel"
        id="phone"
        placeholder="07123456789"
      />
      <label htmlFor="message">
        Message <span className="text-red-500">*</span>
      </label>
      <textarea
        {...register("message", {
          required: "Please let us know why you're getting in touch",
        })}
        className={`input ${errors.message && `border-red-500`}`}
        rows={5}
        id="message"
        placeholder="John Smith"
      />
      {errors.message && (
        <p className="text-red-500 -mt-2 text-sm mb-4">
          {errors.message?.message}
        </p>
      )}
      <div className="flex justify-end mt-6">
        <button className="button ml-auto" type="submit">
          {status === "loading" ? (
            <>
              Sending <ImSpinner8 className="inline-block animate-spin" />
            </>
          ) : (
            `Submit`
          )}
        </button>
      </div>
    </form>
  );
};

export default contactForm;

const emailRegex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
