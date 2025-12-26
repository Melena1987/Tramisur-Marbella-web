
import React from 'react';

interface ContactItemProps {
  label: string;
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  href: string;
  titleColor?: string;
  hoverColor?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ 
  label, 
  title, 
  subtitle, 
  icon, 
  href, 
  titleColor = "text-white",
  hoverColor = "hover:bg-white/10" 
}) => {
  return (
    <a 
      href={href} 
      target={href.startsWith('http') ? "_blank" : "_self"} 
      rel={href.startsWith('http') ? "noopener noreferrer" : ""}
      className={`flex items-start gap-6 group p-4 -m-4 rounded-3xl transition-all duration-300 ${hoverColor}`}
    >
      <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-500 border border-white/10 shadow-lg">
        {icon}
      </div>
      <div className="flex flex-col">
        <h4 className="font-bold text-[10px] uppercase tracking-[0.2em] text-slate-400 mb-1">
          {label}
        </h4>
        <p className={`text-lg font-bold leading-tight ${titleColor}`}>
          {title}
        </p>
        {subtitle && (
          <p className="text-slate-400 text-sm font-medium mt-1">
            {subtitle}
          </p>
        )}
      </div>
    </a>
  );
};

export default ContactItem;
