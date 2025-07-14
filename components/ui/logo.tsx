"use client";
import React from "react";
import Image from "next/image";

const logos = [
  {
    href: "http://www.mangopost.org/",
    img: "/contact/mangopost.png",
    alt: "MANG Logo",
    className: "w-72 h-32",
  },
  {
    href: "https://www.apawards.org/",
    img: "/contact/APA_logo_90.png",
    alt: "APA Logo",
    className: "w-48 h-24",
  },
  {
    href: "https://www.cfre.org/",
    img: "/contact/cfre.jpg",
    alt: "CFRE Logo",
    className: "w-48 h-24",
  },
  {
    href: "https://wingsweb.org/",
    img: "/contact/blue vertical.png",
    alt: "Wings Logo",
    className: "w-80 h-32",
  },
  // {
  //   href: "#",
  //   img: "/sponsers/Youth-vision1.jpg",
  //   alt: "Youth Vision",
  //   className: "w-80 h-32",
  // },
  // {
  //   href: "#",
  //   img: "/sponsers/suvadin1.jpg",
  //   alt: "Suvadin",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/kings-college.png",
  //   alt: "King's College",
  //  className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Ipas-Nepal.jpg",
  //   alt: "IPAS Nepal",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Goal-busters.jpg",
  //   alt: "Goalbusters",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Accountability-Lab.jpg",
  //   alt: "Accountability Lab Nepal",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/motif.jpg",
  //   alt: "Motif",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/debenara.jpg",
  //   alt: "Gorkha Welfare Trust",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Voice of Children.jpg",
  //   alt: "Voice of Children",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/sosec.jpg",
  //   alt: "SOSEC Nepal Dailekh",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/NRDSC.jpg",
  //   alt: "Nepal Bank Limited",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/csdc-150.jpg",
  //   alt: "Nepal Tourism Board",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Save%20the%20earth.jpg",
  //   alt: "National Cooperative Bank",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/csrc.jpg",
  //   alt: "CSTC",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/mahila-shakti-bikas-center.jpg",
  //   alt: "Women Empowerment",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/NRDSC.jpg",
  //   alt: "Social Awareness",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/aasaman-nepal.jpg",
  //   alt: "Aasman Nepal",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/ananta-nepal.png",
  //   alt: "Ananta Nepal",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Antarprerana.png",
  //   alt: "Antar Rerana",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/kavach.jpg",
  //   alt: "Kavach",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/diyalo-international.png",
  //   alt: "Diyaalo International",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/JWAS.jpg",
  //   alt: "NHA",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/Project-sarangi.png",
  //   alt: "Project Sarang",
  //   className: "w-80 h-32",
  // },
  // {
  //   img: "/sponsers/bikalpaanalternative.jpg",
  //   alt: "Bikalpa",
  //   className: "w-80 h-32",
  // },
];


export default function LogoSection() {
  const fullLogos = [...logos, ...logos];

  return (
    <section className="py-12 overflow-hidden bg-white">
      <div className="relative w-full group">
        <div className="max-w-7xl mx-auto">
        <div className="flex w-max whitespace-nowrap animate-scroll pause-scroll">
          {fullLogos.map((logo, index) => (
            <a
              key={index}
              href={logo.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={logo.alt}
              className="shrink-0 mx-4"
            >
              <div className={`relative ${logo.className}`}>
                <Image
                  src={logo.img}
                  alt={logo.alt}
                  fill
                  unoptimized
                  className="object-contain"
                />
              </div>
            </a>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
