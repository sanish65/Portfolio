import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

const ContactContainer = styled.section`
  padding: 3rem 1rem;
  background-color: ${({ theme }) => theme.background};  // Use theme background
  color: ${({ theme }) => theme.text};  // Use theme text color
  text-align: center;
  min-height: 100vh;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.text};  // Use theme text color
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.formBackground};  // Use theme for form background
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};  // Use theme for border
  border-radius: 5px;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};  // Use theme primary color for focus
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};  // Use theme primary color for focus
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};  // Use theme primary color for hover
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  font-size: 1rem;
  border: 1px solid ${({ theme }) => theme.inputBorder};  // Use theme for border
  border-radius: 5px;
  resize: none;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.primary};  // Use theme primary color for focus
    box-shadow: 0 0 5px ${({ theme }) => theme.primary};  // Use theme primary color for focus
  }

  &:hover {
    border-color: ${({ theme }) => theme.primary};  // Use theme primary color for hover
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.primary};  // Use theme primary color
  color: ${({ theme }) => theme.text};  // Use theme text color
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primaryHover};  // Use theme for hover color
  }

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};  // Use theme for disabled button
    cursor: not-allowed;
  }
`;

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.sendForm(
        "service_4flsndw",  // Your EmailJS Service ID
        "template_gr6b84r", // Your EmailJS Template ID
        e.target as HTMLFormElement,
        "5P8KdXcqrxoaKprPO"      // Your EmailJS User ID
      );
      setStatusMessage("Message sent successfully!");
    } catch (error) {
      setStatusMessage("There was an error sending the message. Please try again.");
    } finally {
      setIsSubmitting(false);
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <ContactContainer>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Title>Contact Me</Title>
        <Form onSubmit={handleSubmit}>
          <Input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <TextArea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            required
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </Form>
        {statusMessage && <p>{statusMessage}</p>}
      </motion.div>
    </ContactContainer>
  );
};

export default ContactForm;
