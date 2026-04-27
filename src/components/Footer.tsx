import { Instagram, Linkedin, Facebook } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-[#1A4065] py-12">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-[#F1EDE8] mb-4" style={{ fontSize: '0.875rem', letterSpacing: '0.08em' }}>
          FOLLOW JHAMTSE GATSAL
        </p>
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <a
            href="https://www.instagram.com/jhamtsegatsal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full transition-all"
          >
            <Instagram size={20} />
            <span style={{ fontWeight: '500' }}>@jhamtsegatsal</span>
          </a>
          <a
            href="https://www.linkedin.com/company/jhamtse-gatsal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full transition-all"
          >
            <Linkedin size={20} />
            <span style={{ fontWeight: '500' }}>Jhamtse Gatsal</span>
          </a>
          <a
            href="https://www.facebook.com/JhamtseGatsalChildrensCommunity"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-5 py-3 rounded-full transition-all"
          >
            <Facebook size={20} />
            <span style={{ fontWeight: '500' }}>Jhamtse Gatsal Children's Community</span>
          </a>
        </div>
        <p className="text-sm text-[#F1EDE8]">
          © 2026 Jhamtse Gatsal. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
