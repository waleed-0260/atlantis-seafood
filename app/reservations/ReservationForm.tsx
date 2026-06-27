"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { GlowPulse } from "@/components/shared/GlowPulse";
import { FadeReveal } from "@/components/shared/FadeReveal";

interface FormData {
  name: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  partySize: string;
  roomPreference: string;
  occasion: string;
  requests: string;
}

const inputClass =
  "w-full rounded-xl px-4 h-12 text-sm outline-none transition-all duration-200 border";

const inputStyle = {
  backgroundColor: "rgba(7, 61, 92, 0.35)",
  borderColor: "rgba(14, 124, 134, 0.3)",
  color: "var(--atlantis-pearl)",
};

const inputFocusStyle = `focus:ring-2 focus:ring-[var(--atlantis-teal)]`;

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    setSubmitted(true);
  };

  return (
    <AnimatePresence mode="wait">
      {submitted ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
          className="flex flex-col items-center text-center gap-8 py-16"
        >
          <GlowPulse color="teal">
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
            >
              <CheckCircle
                className="w-20 h-20"
                style={{ color: "var(--atlantis-teal)" }}
              />
            </motion.div>
          </GlowPulse>

          <div>
            <h2
              className="font-display font-bold text-3xl md:text-4xl mb-3"
              style={{ color: "var(--atlantis-pearl)" }}
            >
              Reservation Received!
            </h2>
            <p
              className="text-base leading-relaxed max-w-lg"
              style={{ color: "rgba(242, 237, 227, 0.7)" }}
            >
              Thank you — your table request has been received. Our team will
              reach out within 24 hours to confirm your reservation. We look
              forward to welcoming you to Atlantis.
            </p>
          </div>

          <div
            className="flex flex-col gap-3 items-center text-sm"
            style={{ color: "rgba(242, 237, 227, 0.55)" }}
          >
            <p>
              For immediate enquiries, call us at{" "}
              <a
                href="tel:+60321100888"
                className="underline"
                style={{ color: "var(--atlantis-teal)" }}
              >
                +60 3-2110 0888
              </a>
            </p>
          </div>

          <div
            className="w-full max-w-sm p-5 rounded-2xl border text-left"
            style={{
              backgroundColor: "rgba(14, 124, 134, 0.08)",
              borderColor: "rgba(14, 124, 134, 0.25)",
            }}
          >
            <p
              className="text-xs font-semibold tracking-widest uppercase mb-1"
              style={{ color: "var(--atlantis-teal)" }}
            >
              A reminder
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(242, 237, 227, 0.65)" }}
            >
              Atlantis Seafood Restaurant & Bar is open daily 11:30AM – 3AM.
              Ground Floor, Life Centre, 20 Jalan Sultan Ismail, Kuala Lumpur.
            </p>
          </div>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-6"
          noValidate
        >
          {/* Personal details */}
          <div className="flex flex-col gap-4">
            <FieldLabel>Your Details</FieldLabel>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <input
                  {...register("name", { required: "Name is required" })}
                  placeholder="Full Name *"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  aria-label="Full Name"
                />
                {errors.name && <FieldError>{errors.name.message}</FieldError>}
              </div>
              <div>
                <input
                  {...register("phone", { required: "Phone is required" })}
                  type="tel"
                  placeholder="Phone Number *"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  aria-label="Phone Number"
                />
                {errors.phone && <FieldError>{errors.phone.message}</FieldError>}
              </div>
            </div>
            <input
              {...register("email", {
                required: "Email is required",
                pattern: { value: /^\S+@\S+\.\S+$/, message: "Invalid email" },
              })}
              type="email"
              placeholder="Email Address *"
              className={`${inputClass} ${inputFocusStyle}`}
              style={inputStyle}
              aria-label="Email Address"
            />
            {errors.email && <FieldError>{errors.email.message}</FieldError>}
          </div>

          {/* Booking details */}
          <div className="flex flex-col gap-4">
            <FieldLabel>Booking Details</FieldLabel>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <input
                  {...register("date", { required: "Date is required" })}
                  type="date"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  aria-label="Date"
                  min={new Date().toISOString().split("T")[0]}
                />
                {errors.date && <FieldError>{errors.date.message}</FieldError>}
              </div>
              <div>
                <input
                  {...register("time", { required: "Time is required" })}
                  type="time"
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  aria-label="Time"
                />
                {errors.time && <FieldError>{errors.time.message}</FieldError>}
              </div>
              <div>
                <select
                  {...register("partySize", { required: "Party size is required" })}
                  className={`${inputClass} ${inputFocusStyle}`}
                  style={inputStyle}
                  aria-label="Party Size"
                  defaultValue=""
                >
                  <option value="" disabled>Party Size *</option>
                  {[1,2,3,4,5,6,7,8,9,10].map((n) => (
                    <option key={n} value={n} style={{ backgroundColor: "var(--atlantis-deep)" }}>{n} {n === 1 ? "Guest" : "Guests"}</option>
                  ))}
                  <option value="11-15" style={{ backgroundColor: "var(--atlantis-deep)" }}>11–15 Guests</option>
                  <option value="16-25" style={{ backgroundColor: "var(--atlantis-deep)" }}>16–25 Guests</option>
                  <option value="26-35" style={{ backgroundColor: "var(--atlantis-deep)" }}>26–35 Guests</option>
                  <option value="36-50" style={{ backgroundColor: "var(--atlantis-deep)" }}>36–50 Guests</option>
                  <option value="50+" style={{ backgroundColor: "var(--atlantis-deep)" }}>50+ Guests</option>
                </select>
                {errors.partySize && <FieldError>{errors.partySize.message}</FieldError>}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <select
                {...register("roomPreference")}
                className={`${inputClass} ${inputFocusStyle}`}
                style={inputStyle}
                aria-label="Room Preference"
                defaultValue=""
              >
                <option value="" disabled>Room Preference</option>
                <option value="main-hall" style={{ backgroundColor: "var(--atlantis-deep)" }}>Main Dining Hall</option>
                <option value="private-small" style={{ backgroundColor: "var(--atlantis-deep)" }}>Private Room — Small (up to 25)</option>
                <option value="private-medium" style={{ backgroundColor: "var(--atlantis-deep)" }}>Private Room — Medium (up to 35)</option>
                <option value="private-large" style={{ backgroundColor: "var(--atlantis-deep)" }}>Private Room — Large (up to 50)</option>
              </select>

              <select
                {...register("occasion")}
                className={`${inputClass} ${inputFocusStyle}`}
                style={inputStyle}
                aria-label="Occasion"
                defaultValue=""
              >
                <option value="" disabled>Occasion (optional)</option>
                <option value="birthday" style={{ backgroundColor: "var(--atlantis-deep)" }}>Birthday Celebration</option>
                <option value="anniversary" style={{ backgroundColor: "var(--atlantis-deep)" }}>Anniversary</option>
                <option value="corporate" style={{ backgroundColor: "var(--atlantis-deep)" }}>Corporate Event</option>
                <option value="karaoke" style={{ backgroundColor: "var(--atlantis-deep)" }}>Karaoke Night</option>
                <option value="family" style={{ backgroundColor: "var(--atlantis-deep)" }}>Family Celebration</option>
                <option value="other" style={{ backgroundColor: "var(--atlantis-deep)" }}>Other</option>
              </select>
            </div>
          </div>

          {/* Special requests */}
          <div>
            <textarea
              {...register("requests")}
              placeholder="Special requests, dietary requirements, or notes for our team (optional)"
              rows={4}
              className={`w-full rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 border resize-none ${inputFocusStyle}`}
              style={inputStyle}
              aria-label="Special Requests"
            />
          </div>

          {/* Submit */}
          <GlowPulse color="gold">
            <Button
              type="submit"
              disabled={isSubmitting}
              size="lg"
              className="w-full font-semibold h-12 rounded-full text-base transition-all"
              style={{
                backgroundColor: "var(--atlantis-gold)",
                color: "var(--atlantis-ink)",
                opacity: isSubmitting ? 0.8 : 1,
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center gap-2">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
                  />
                  Submitting…
                </span>
              ) : (
                "Request Reservation"
              )}
            </Button>
          </GlowPulse>

          <p
            className="text-xs text-center"
            style={{ color: "rgba(242, 237, 227, 0.38)" }}
          >
            This sends a reservation request. Our team will confirm within 24 hours.
            For same-day bookings, please call{" "}
            <a
              href="tel:+60321100888"
              className="underline"
              style={{ color: "var(--atlantis-teal)" }}
            >
              +60 3-2110 0888
            </a>
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  );
}

function FieldLabel({ children }: { children: React.ReactNode }) {
  return (
    <h3
      className="text-xs font-semibold tracking-widest uppercase"
      style={{ color: "var(--atlantis-teal)" }}
    >
      {children}
    </h3>
  );
}

function FieldError({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-xs mt-1" style={{ color: "var(--atlantis-coral)" }}>
      {children}
    </p>
  );
}
