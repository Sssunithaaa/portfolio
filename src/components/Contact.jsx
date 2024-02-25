import React from "react";
import { motion } from "framer-motion";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { styles } from "../style";
//template_qkgy0x5
//service_qsi9w3k
//z9IEM528w9QTSxSb-
const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [loading, setIsLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const formRef = useRef();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .send(
        "service_qsi9w3k",
        "template_qkgy0x5",
        {
          from_name: form.name,
          to_name: "Sunitha",
          from_email: form.email,
          to_email: "sunithab188@gmail.com",
          message: form.message,
        },
        "z9IEM528w9QTSxSb-"
      )
      .then(
        () => {
          setIsLoading(false);
          alert("Thank you. I'll get to back to you as soon as possible");
          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setIsLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex mx-auto gap-10">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.5] lg:flex-[0.5] mx-auto  p-8 rounded-2xl bg-tertiary"
      >
        <p className={styles.sectionSubText}>Lets</p>
        <h3 className={styles.sectionHeadText}>Connect.</h3>
        <form
          action=""
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              className="bg-primary py-4 px-6 focus:bg-primary/80 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="text"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email"
              className="bg-primary py-4 px-6 focus:bg-primary/80 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="What's your message"
              className="bg-primary py-4 px-6 placeholder:text-secondary rounded-lg outline-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-primary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
      {/*<motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="flex h-screen w-screen justify-center items-center bg-transparent "
      >
        <EarthCanvas />
  </motion.div>*/}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
