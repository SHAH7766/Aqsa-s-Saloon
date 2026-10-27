import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import { Check, Calendar, Clock, User, Phone, MessageCircle, ArrowRight, ArrowLeft } from 'lucide-react';
import { siteData } from '../data/siteData';

export const BookingWizard = ({ selectedServiceProp }) => {
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState(selectedServiceProp || siteData.services[0]);
  const [date, setDate] = useState("");
  const [timeSlot, setTimeSlot] = useState("12:00 PM");
  const [formData, setFormData] = useState({ name: "", phone: "", notes: "" });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const timeSlots = ["11:00 AM", "12:30 PM", "02:00 PM", "03:30 PM", "05:00 PM", "06:30 PM"];

  const handleNext = () => {
    setError("");
    if (step === 2 && !date) {
      setError("Please select an appointment date.");
      return;
    }
    if (step === 3) {
      if (!formData.name || !formData.phone) {
        setError("Please enter your name and phone number.");
        return;
      }
    }
    setStep((prev) => prev + 1);
  };

  const handlePrev = () => {
    setError("");
    setStep((prev) => Math.max(1, prev - 1));
  };

  const handleConfirm = () => {
    setSuccess(true);
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#C9A24B', '#5A1226', '#F4C6CF', '#FFF9F3']
    });

    // Build WhatsApp Message
    const message = `Hello Arfa's Salon Branch II,%0A%0AI would like to book an appointment:%0A- *Service:* ${selectedService.name}%0A- *Price:* Rs. ${selectedService.price}%0A- *Date:* ${date}%0A- *Time:* ${timeSlot}%0A- *Name:* ${formData.name}%0A- *Phone:* ${formData.phone}%0A- *Notes:* ${formData.notes || 'None'}%0A%0APlease confirm my slot!`;

    setTimeout(() => {
      window.open(`https://wa.me/${siteData.whatsappNumber}?text=${message}`, '_blank');
    }, 1500);
  };

  return (
    <section id="booking" className="py-24 bg-[#F5EBE1]/40 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-12">
          <span className="font-serif text-sm uppercase tracking-[0.3em] text-[#C9A24B] font-semibold block mb-3">
            Instant Slot Reservation
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#5A1226] mb-4">
            Book Your Appointment
          </h2>
          <p className="font-poppins text-base text-[#2B2B2B]/70">
            Secure your preferred time at Arfa's Salon Branch II in just 4 simple steps.
          </p>
        </div>

        <div className="glass-card rounded-3xl p-6 sm:p-10 shadow-2xl border border-[#C9A24B]/30 relative">
          {/* Progress Indicator */}
          <div className="flex items-center justify-between mb-8 pb-6 border-b border-[#C9A24B]/20">
            {[1, 2, 3, 4].map((s) => (
              <div key={s} className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs transition-colors ${
                  step >= s ? "bg-[#5A1226] text-[#C9A24B]" : "bg-[#F5EBE1] text-[#2B2B2B]/50"
                }`}>
                  {step > s ? <Check size={14} /> : s}
                </div>
                <span className="hidden sm:inline text-xs font-semibold text-[#2B2B2B]/70 uppercase tracking-wider">
                  {s === 1 ? "Service" : s === 2 ? "Date & Time" : s === 3 ? "Details" : "Confirm"}
                </span>
              </div>
            ))}
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-red-500/10 border border-red-500/30 text-red-700 text-xs font-semibold p-3 rounded-xl mb-6 text-center"
            >
              {error}
            </motion.div>
          )}

          <AnimatePresence mode="wait">
            {/* Step 1: Choose Service */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-6">Select a Service</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-96 overflow-y-auto pr-2">
                  {siteData.services.map((srv) => {
                    const isSelected = selectedService.id === srv.id;
                    return (
                      <div
                        key={srv.id}
                        onClick={() => setSelectedService(srv)}
                        className={`p-4 rounded-2xl cursor-pointer border transition-all flex items-center justify-between ${
                          isSelected
                            ? "bg-[#5A1226] text-[#FFF9F3] border-[#C9A24B] shadow-lg"
                            : "bg-[#FFF9F3] text-[#2B2B2B] border-[#C9A24B]/30 hover:border-[#C9A24B]"
                        }`}
                      >
                        <div>
                          <h4 className="font-serif font-bold text-base">{srv.name}</h4>
                          <span className={`text-xs ${isSelected ? "text-[#C9A24B]" : "text-[#2B2B2B]/60"}`}>
                            Rs. {srv.price} · {srv.duration}
                          </span>
                        </div>
                        {isSelected && <Check size={18} className="text-[#C9A24B]" />}
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-6">Choose Date & Time Slot</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">
                      Appointment Date
                    </label>
                    <input
                      type="date"
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F3] border border-[#C9A24B]/40 text-[#2B2B2B] font-poppins text-sm focus:outline-none focus:border-[#5A1226]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">
                      Time Slot
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot}
                          type="button"
                          onClick={() => setTimeSlot(slot)}
                          className={`py-2 px-3 rounded-xl text-xs font-semibold border transition-all ${
                            timeSlot === slot
                              ? "bg-[#5A1226] text-[#C9A24B] border-[#C9A24B]"
                              : "bg-[#FFF9F3] text-[#2B2B2B] border-[#C9A24B]/30 hover:border-[#C9A24B]"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Contact Details */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-6">Your Contact Information</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Ayesha Khan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F3] border border-[#C9A24B]/40 text-[#2B2B2B] font-poppins text-sm focus:outline-none focus:border-[#5A1226]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">
                      WhatsApp Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. 0300 1234567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F3] border border-[#C9A24B]/40 text-[#2B2B2B] font-poppins text-sm focus:outline-none focus:border-[#5A1226]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs uppercase tracking-wider text-[#2B2B2B]/70 font-semibold mb-2">
                      Special Notes (Optional)
                    </label>
                    <textarea
                      rows="3"
                      placeholder="Any specific requests or instructions..."
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-3 rounded-2xl bg-[#FFF9F3] border border-[#C9A24B]/40 text-[#2B2B2B] font-poppins text-sm focus:outline-none focus:border-[#5A1226]"
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 4: Summary & Confirm */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="text-center"
              >
                {!success ? (
                  <div>
                    <h3 className="font-serif text-2xl font-bold text-[#5A1226] mb-6">Review Your Booking</h3>
                    <div className="bg-[#FFF9F3] rounded-2xl p-6 border border-[#C9A24B]/30 text-left max-w-md mx-auto mb-8 space-y-3 font-poppins text-sm">
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-[#2B2B2B]/60">Service:</span>
                        <span className="font-bold text-[#5A1226]">{selectedService.name}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-[#2B2B2B]/60">Price:</span>
                        <span className="font-bold text-[#5A1226]">Rs. {selectedService.price}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-[#2B2B2B]/60">Date & Time:</span>
                        <span className="font-bold text-[#5A1226]">{date || 'Today'} at {timeSlot}</span>
                      </div>
                      <div className="flex justify-between border-b pb-2">
                        <span className="text-[#2B2B2B]/60">Name:</span>
                        <span className="font-bold text-[#5A1226]">{formData.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[#2B2B2B]/60">Phone:</span>
                        <span className="font-bold text-[#5A1226]">{formData.phone}</span>
                      </div>
                    </div>

                    <button
                      type="button"
                      onClick={handleConfirm}
                      data-cursor="Confirm"
                      className="px-8 py-4 rounded-full bg-[#25D366] text-white font-poppins font-bold text-base shadow-xl hover:bg-[#20ba5a] transition-all duration-300 hover:scale-105 inline-flex items-center gap-3"
                    >
                      <MessageCircle size={22} fill="white" />
                      <span>Confirm & Send on WhatsApp</span>
                    </button>
                  </div>
                ) : (
                  <div className="py-8">
                    <div className="w-20 h-20 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center mx-auto mb-6 text-3xl font-bold animate-bounce">
                      ✓
                    </div>
                    <h3 className="font-serif text-3xl font-bold text-[#5A1226] mb-3">Booking Initiated!</h3>
                    <p className="font-poppins text-sm text-[#2B2B2B]/70 max-w-md mx-auto mb-6">
                      WhatsApp is opening with your complete booking details. Send the message to instantly secure your slot with Arfa's Salon Branch II!
                    </p>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Wizard Navigation Buttons */}
          {step < 4 && !success && (
            <div className="flex justify-between mt-8 pt-6 border-t border-[#C9A24B]/20">
              {step > 1 ? (
                <button
                  type="button"
                  onClick={handlePrev}
                  className="px-6 py-2.5 rounded-full border border-[#5A1226]/30 text-[#5A1226] font-semibold text-xs flex items-center gap-2 hover:bg-[#5A1226]/10 transition-colors"
                >
                  <ArrowLeft size={16} />
                  <span>Back</span>
                </button>
              ) : <div />}

              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 rounded-full bg-[#5A1226] text-[#FFF9F3] font-semibold text-xs flex items-center gap-2 hover:bg-[#C9A24B] hover:text-[#5A1226] transition-colors shadow-md ml-auto"
              >
                <span>Continue</span>
                <ArrowRight size={16} />
              </button>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
