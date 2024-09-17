import React from "react";
import SocialLink from "./social-link";
import WorkLink from "./work-link";

export default function Links() {
  const socialLinks = [
    {
      href: "https://www.youtube.com/your-channel",
      icon: "youtube",
      label: "@abdukasim",
    },
    {
      href: "https://www.linkedin.com/in/abdukasim",
      icon: "linkedin",
      label: "@abdukasim",
    },
    {
      href: "https://x.com/theabdukasim",
      icon: "x",
      label: "@theabdukasim",
    },
  ];

  const workLinks = [
    {
      title: "Blog",
      description: "My thoughts and ideas on business and personal development",
      logo: "/images/blog-logo.png",
    },
    {
      title: "Portfolio",
      description: "Showcase of my projects and work",
      logo: "/images/portfolio-logo.png",
    },
    {
      title: "Resume",
      description: "My professional experience and skills",
      logo: "/images/resume-logo.png",
    },
  ];

  return (
    <section className="space-y-8" id="links">
      <div className="flex justify-center space-x-4 py-4">
        {socialLinks.map((link, index) => (
          <SocialLink
            key={index}
            href={link.href}
            icon={link.icon as "youtube" | "linkedin" | "x"}
            label={link.label}
          />
        ))}
      </div>

      <div className="space-y-4">
        {workLinks.map((link, index) => (
          <WorkLink
            key={index}
            title={link.title}
            description={link.description}
            logo
          />
        ))}
      </div>
    </section>
  );
}
