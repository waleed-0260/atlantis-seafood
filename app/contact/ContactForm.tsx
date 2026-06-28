"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowPulse } from "@/components/shared/GlowPulse";

interface FormData {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

const inputClass =
  "w-full rounded-xl px-4 h-12 text-sm outline-none transition-all duration-200 border focus:ring-2 focus:ring-[var(--atlantis-teal)]";

const inputStyle = {
  backgroundColor: "rgba(7, 61, 92, 0.35)",
  borderColor: "rgba(14, 124, 134, 0.3)",
  color: "var(--atlantis-pearl)",
};

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, ease: [0.45, 0, 0.55, 1] }}
          className="flex flex-col items-center text-center gap-6 py-12"
        >
          <GlowPulse color="teal">
            <CheckCircle className="w-16 h-16" style={{ color: "var(--atlantis-teal)" }} />
          </GlowPulse>
          <div>
            <h3 className="font-display font-bold text-2xl mb-2" style={{ color: "var(--atlantis-pearl)" }}>
              Message Sent!
            </h3>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(242, 237, 227, 0.65)" }}>
              Thank you for reaching out. Our team will get back to you within 24 hours.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-5"
          noValidate
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <input
                {...register("name", { required: "Name is required" })}
                placeholder="Full Name *"
                className={inputClass}
                style={inputStyle}
                aria-label="Full Name"
              />
              {errors.name && <p className="text-xs mt-1" style={{ color: "var(--atlantis-coral)" }}>{errors.name.message}</p>}
            </div>
            <div>
              <input
                {...register("email", { required: "Email is required", pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" } })}
                type="email"
                placeholder="Email Address *"
                className={inputClass}
                style={inputStyle}
                aria-label="Email"
              />
              {errors.email && <p className="text-xs mt-1" style={{ color: "var(--atlantis-coral)" }}>{errors.email.message}</p>}
            </div>
          </div>

          <input
            {...register("phone")}
            type="tel"
            placeholder="Phone Number (optional)"
            className={inputClass}
            style={inputStyle}
            aria-label="Phone"
          />

          <select
            {...register("subject", { required: "Please select a subject" })}
            className={inputClass}
            style={inputStyle}
            aria-label="Subject"
            defaultValue=""
          >
            <option value="" disabled>Subject *</option>
            <option value="reservation" style={{ backgroundColor: "var(--atlantis-deep)" }}>Reservation Enquiry</option>
            <option value="private-room" style={{ backgroundColor: "var(--atlantis-deep)" }}>Private Room / Event</option>
            <option value="feedback" style={{ backgroundColor: "var(--atlantis-deep)" }}>Feedback</option>
            <option value="media" style={{ backgroundColor: "var(--atlantis-deep)" }}>Media / Press</option>
            <option value="partnership" style={{ backgroundColor: "var(--atlantis-deep)" }}>Partnership</option>
            <option value="other" style={{ backgroundColor: "var(--atlantis-deep)" }}>Other</option>
          </select>
          {errors.subject && <p className="text-xs -mt-3" style={{ color: "var(--atlantis-coral)" }}>{errors.subject.message}</p>}

          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Your message *"
            rows={5}
            className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border resize-none focus:ring-2 focus:ring-[var(--atlantis-teal)]"
            style={inputStyle}
            aria-label="Message"
          />
          {errors.message && <p className="text-xs -mt-3" style={{ color: "var(--atlantis-coral)" }}>{errors.message.message}</p>}

          <GlowPulse color="teal">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full font-semibold h-12 rounded-full"
              style={{
                backgroundColor: "var(--atlantis-teal)",
                color: "white",
                opacity: isSubmitting ? 0.8 : 1,
              }}
            >
              {isSubmitting ? "Sending…" : "Send Message"}
            </Button>
          </GlowPulse>
        </motion.form>
      )}
    </AnimatePresence>
  );
}
