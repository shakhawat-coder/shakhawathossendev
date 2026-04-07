"use client";

import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { HiOutlineMail } from "react-icons/hi";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { BsGithub, BsLinkedin, BsWhatsapp } from "react-icons/bs";

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  phone: Yup.string()
    .matches(
      /^(?:\+880|01)[0-9]{9}$/,
      "Phone number must start with +880 or 01 followed by 9 digits",
    )
    .required("Phone number is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      phone: "",
      email: "",
      subject: "",
      message: "",
    },
    validationSchema: contactSchema,
    onSubmit: async (values, { resetForm }) => {
      try {
        await emailjs.send(
          "service_vxwcpkc", // your EmailJS service ID
          "template_5bng5x9", // your EmailJS template ID
          {
            user_name: values.name,
            user_phone: values.phone,
            user_email: values.email,
            user_subject: values.subject,
            user_message: values.message,
            time: new Date().toLocaleString(),
          },
          "vAhjwd6HzSa-grOa6", // your public key
        );
        alert("Message sent successfully!");
        resetForm();
      } catch (error) {
        console.error("EmailJS Error:", error);
        alert("Failed to send message. Try again later.");
      }
    },
  });

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <section
      id="contact"
      className="relative min-h-screen py-16 md:py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-500 bg-gray-50 dark:bg-[#0D1117] overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 uppercase tracking-tighter drop-shadow-2xl">
            Get In <span className="text-blue-600">Touch</span>
          </h2>
          <div className="h-1.5 w-24 bg-blue-600 mx-auto rounded-full mb-8 shadow-[0_0_15px_rgba(37,99,235,0.5)]"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-medium">
            Have a project in mind or just want to chat? I'm always open to new opportunities and collaborations.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {[
              { icon: <MdOutlinePhoneInTalk />, color: "bg-green-500", label: "Phone", value: "+8801780551403", href: "tel:+8801780551403" },
              { icon: <HiOutlineMail />, color: "bg-blue-500", label: "Email", value: "shakhawathossen188@gmail.com", href: "mailto:shakhawathossen188@gmail.com" },
              { icon: <BsWhatsapp />, color: "bg-green-600", label: "WhatsApp", value: "+8801780551403", href: "https://wa.me/8801780551403" },
              { icon: <BsLinkedin />, color: "bg-blue-600", label: "LinkedIn", value: "Md Shakhawat Hossen", href: "https://www.linkedin.com/in/md-shakhawat-hossen-209992180/" },
              { icon: <BsGithub />, color: "bg-gray-900", label: "GitHub", value: "shakhawat-coder", href: "https://github.com/shakhawat-coder" }
            ].map((item, index) => (
              <motion.a
                key={index}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                whileHover={{ x: 10 }}
                className="flex items-center p-4 bg-white dark:bg-[#161B22] rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-md transition-all group"
              >
                <div className={`w-12 h-12 ${item.color} rounded-xl flex items-center justify-center text-white text-xl shadow-lg shadow-${item.color.split('-')[1]}-500/20`}>
                  {item.icon}
                </div>
                <div className="ml-4 overflow-hidden">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest">{item.label}</p>
                  <p className="text-gray-900 dark:text-gray-200 font-medium truncate">{item.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2 bg-white dark:bg-[#161B22] p-8 sm:p-10 rounded-[2rem] border border-gray-100 dark:border-gray-800 shadow-xl"
          >
            <form onSubmit={formik.handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    {...formik.getFieldProps('name')}
                    placeholder="John Doe"
                    className={`w-full px-5 py-4 bg-gray-50 dark:bg-[#0D1117] border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                  />
                  {formik.touched.name && formik.errors.name && <p className="text-red-500 text-xs ml-1">{formik.errors.name}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    {...formik.getFieldProps('phone')}
                    placeholder="+8801..."
                    className={`w-full px-5 py-4 bg-gray-50 dark:bg-[#0D1117] border ${formik.touched.phone && formik.errors.phone ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                  />
                  {formik.touched.phone && formik.errors.phone && <p className="text-red-500 text-xs ml-1">{formik.errors.phone}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    {...formik.getFieldProps('email')}
                    placeholder="john@example.com"
                    className={`w-full px-5 py-4 bg-gray-50 dark:bg-[#0D1117] border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                  />
                  {formik.touched.email && formik.errors.email && <p className="text-red-500 text-xs ml-1">{formik.errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    {...formik.getFieldProps('subject')}
                    placeholder="Project Inquiry"
                    className={`w-full px-5 py-4 bg-gray-50 dark:bg-[#0D1117] border ${formik.touched.subject && formik.errors.subject ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all`}
                  />
                  {formik.touched.subject && formik.errors.subject && <p className="text-red-500 text-xs ml-1">{formik.errors.subject}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700 dark:text-gray-300 ml-1">Message</label>
                <textarea
                  id="message"
                  {...formik.getFieldProps('message')}
                  rows="5"
                  placeholder="Tell me about your project..."
                  className={`w-full px-5 py-4 bg-gray-50 dark:bg-[#0D1117] border ${formik.touched.message && formik.errors.message ? 'border-red-500' : 'border-gray-100 dark:border-gray-800'} rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-600/20 focus:border-blue-600 transition-all resize-none`}
                />
                {formik.touched.message && formik.errors.message && <p className="text-red-500 text-xs ml-1">{formik.errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={formik.isSubmitting}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-2xl shadow-xl shadow-blue-500/20 transition-all disabled:opacity-50"
              >
                {formik.isSubmitting ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

