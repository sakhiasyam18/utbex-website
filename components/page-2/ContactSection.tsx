"use client";

import { motion } from "framer-motion";
import { AnimatedSection } from "../ui/AnimatedSection";
import { GradientText } from "../ui/GradientText";
import { GlassCard } from "../ui/GlassCard";
import { Mail, MessageCircle, MapPin, AtSign } from "lucide-react";

export function ContactSection() {
  return (
    <AnimatedSection className="px-6 sm:px-12 lg:px-24 mb-32">
      <div className="w-full max-w-5xl mx-auto">
        
        <GlassCard dark className="p-8 sm:p-16 text-center border-t-p2-primary/40 relative overflow-hidden">
          {/* Background Glow inside card */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-32 bg-p2-primary/20 blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-4xl sm:text-6xl font-black tracking-tight mb-6">
              Mari Bangun <br />
              <GradientText>Dampak Bersama</GradientText>
            </h2>
            <p className="text-xl text-white/60 font-light max-w-2xl mx-auto mb-12">
              Setiap inovasi besar dimulai dari satu obrolan sederhana. Kami terbuka untuk diskusi, kolaborasi, dan kemitraan strategis.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white text-black font-semibold hover:bg-gray-100 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-8 py-4 rounded-full bg-white/5 border border-white/20 text-white font-semibold hover:bg-white/10 transition-colors"
              >
                <Mail className="w-5 h-5" />
                Email Kami
              </motion.button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pt-12 border-t border-white/10">
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <MapPin className="w-5 h-5 text-white/60" />
                </div>
                <p className="text-white/60 text-sm">Indonesia</p>
              </div>
              <div className="flex flex-col items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <AtSign className="w-5 h-5 text-white/60" />
                </div>
                <p className="text-white/60 text-sm">@arikdwiasmara</p>
              </div>
              <div className="flex flex-col items-center gap-3 sm:col-span-2 md:col-span-1">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-white/60" />
                </div>
                <p className="text-white/60 text-sm">hello@utbex.id</p>
              </div>
            </div>
          </div>
        </GlassCard>

      </div>
    </AnimatedSection>
  );
}
