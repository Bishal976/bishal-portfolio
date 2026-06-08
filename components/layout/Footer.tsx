import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/ui/Icons";
import { SOCIAL_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)] py-8 mt-0">
      <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[#888898] text-sm">
          Designed &amp; Built by Bishal Kumar · 2026
        </p>
        <div className="flex items-center gap-5">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <GitHubIcon className="w-[18px] h-[18px] text-[#6B6B7B] hover:text-[#6C63FF] transition-colors" />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <LinkedInIcon className="w-[18px] h-[18px] text-[#6B6B7B] hover:text-[#6C63FF] transition-colors" />
          </a>
          <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter/X">
            <XIcon className="w-[18px] h-[18px] text-[#6B6B7B] hover:text-[#6C63FF] transition-colors" />
          </a>
        </div>
      </div>
    </footer>
  );
}
