import React from 'react';
import { Wrench, Sparkles, Clock, Mail } from 'lucide-react';

const Maintanance = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#FFF8F0] via-white to-brand-bg-soft relative overflow-hidden px-3 xs:px-4 sm:px-6 py-6 sm:py-10 md:py-16 font-main">
      {/* Background Decorative Radial Gradients */}
      <div 
        className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_80%_70%_at_70%_20%,_rgba(12,112,154,0.1)_0%,_transparent_60%),radial-gradient(ellipse_60%_60%_at_20%_80%,_rgba(255,130,46,0.1)_0%,_transparent_60%)]" 
        aria-hidden="true" 
      />
      
      {/* Subtle Background Grid Pattern */}
      <div 
        className="absolute inset-0 bg-[radial-gradient(#0c709a_1px,transparent_1px)] [background-size:20px_20px] sm:[background-size:24px_24px] opacity-[0.035] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative z-10 w-full max-w-sm sm:max-w-lg md:max-w-xl bg-white/95 backdrop-blur-md border border-brand-border rounded-card sm:rounded-card-md p-5 xs:p-6 sm:p-10 md:p-12 text-center shadow-card hover:shadow-card-hover transition-all duration-300">
        
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 text-[11px] sm:text-xs font-bold py-1 sm:py-1.5 px-3 sm:px-4 rounded-pill mb-6 sm:mb-8">
          <span className="relative flex h-2 w-2 shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-orange"></span>
          </span>
          <span className="truncate">We're Upgrading</span>
        </div>

        {/* Maintenance Image Container */}
        <div className="relative mx-auto w-28 h-28 xs:w-32 xs:h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mb-6 sm:mb-8 flex items-center justify-center">
          {/* Ambient Glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-orange/25 via-brand-yellow/25 to-brand-blue/25 blur-xl sm:blur-2xl opacity-75 animate-pulse" />
          
          {/* Main Image Box */}
          <div className="relative w-full h-full rounded-card bg-gradient-to-b from-white to-brand-bg-soft/60 p-4 sm:p-6 shadow-card border border-brand-border flex items-center justify-center">
            <img 
              src="/images/logo/lamp_logo.png" 
              alt="Site under maintance" 
              className="w-full h-full object-contain drop-shadow-md hover:scale-105 transition-transform duration-300"
            />
          </div>

          {/* Floating Accents */}
          <div className="absolute -bottom-1.5 -right-1.5 sm:-bottom-2 sm:-right-2 bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white p-2 sm:p-2.5 rounded-card-sm shadow-glow-orange border-2 border-white">
            <Wrench className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-[spin_8s_linear_infinite]" />
          </div>

          <div className="absolute -top-1.5 -left-1.5 sm:-top-2 sm:-left-2 bg-gradient-to-br from-brand-blue to-brand-blue-dark text-white p-2 sm:p-2.5 rounded-card-sm shadow-glow-blue border-2 border-white">
            <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="font-display text-2xl xs:text-3xl sm:text-4xl md:text-5xl font-extrabold text-brand-bg-dark tracking-tight leading-[1.15] mb-3 sm:mb-4 break-words">
          Site under maintance
        </h1>

        {/* Text Below */}
        <p className="font-main text-sm xs:text-base sm:text-lg text-brand-text-light max-w-xs sm:max-w-md mx-auto leading-relaxed mb-6 sm:mb-8">
          Bringing some cool things soon.
        </p>

        {/* Progress Indicator */}
        <div className="w-full max-w-[260px] xs:max-w-xs sm:max-w-sm mx-auto mb-6 sm:mb-8">
          <div className="flex justify-between items-center text-[11px] sm:text-xs font-semibold text-brand-text-muted mb-2">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-brand-orange shrink-0" />
              <span>In Progress</span>
            </span>
            <span className="text-brand-orange font-bold">Stay Tuned</span>
          </div>
          <div className="h-1.5 sm:h-2 w-full bg-brand-bg-soft rounded-pill overflow-hidden border border-brand-border/60">
            <div className="h-full bg-gradient-to-r from-brand-blue via-brand-orange to-brand-yellow rounded-pill w-3/4 animate-pulse"></div>
          </div>
        </div>

        {/* Footer Info Row */}
        <div className="pt-4 sm:pt-6 border-t border-brand-border flex flex-col xs:flex-row items-center justify-between gap-2.5 sm:gap-3 text-[11px] sm:text-xs text-brand-text-muted">
          <span className="font-medium">Brain Up Labs</span>
          <a 
            href="mailto:brainuplabs@gmail.com" 
            className="inline-flex items-center gap-1.5 text-brand-blue hover:text-brand-orange transition-colors font-semibold"
          >
            <Mail className="w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0" />
            <span>Contact Support</span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Maintanance;