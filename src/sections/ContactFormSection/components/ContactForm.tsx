import React, { useState } from "react";
import { FormInput } from "@/sections/ContactFormSection/components/FormInput";
import { SubmitButton } from "@/sections/ContactFormSection/components/SubmitButton";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // Здесь должна быть отправка данных на сервер
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      console.log('Form submitted:', formData);
      setSubmitStatus('success');
      setFormData({ name: "", phone: "", email: "", message: "" });
      
      setTimeout(() => {
        setSubmitStatus('idle');
      }, 3000);
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="caret-transparent">
      <div className="caret-transparent max-h-[15000px] max-w-[560px] text-left mx-auto">
        <FormInput
          placeholder="Ваше имя"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Ваш телефон"
          name="phone"
          type="tel"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Ваш Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <FormInput
          placeholder="Расскажите о вашем проекте или задайте вопрос"
          name="message"
          value={formData.message}
          onChange={handleChange}
          variant="h-[150px]"
          isTextarea
        />
        
        <div className="caret-transparent h-full text-center align-middle mt-5 mb-2.5">
          <SubmitButton isSubmitting={isSubmitting} />
        </div>
        
        {submitStatus === 'success' && (
          <div className="text-white text-center mt-4 font-montserrat">
            Спасибо! Ваше сообщение отправлено.
          </div>
        )}
        {submitStatus === 'error' && (
          <div className="text-white text-center mt-4 font-montserrat">
            Произошла ошибка. Попробуйте еще раз.
          </div>
        )}
      </div>
    </form>
  );
};
