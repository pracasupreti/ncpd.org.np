"use client";
import React from "react";
import Image from "next/image";

export default function LogoSection() {
    return (
        <section className="container mx-auto px-4 md:px-12 py-12 flex flex-row flex-nowrap justify-around items-center gap-8 mt-24 overflow-x-auto">
            <a
                href="http://www.mangopost.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="MANG Website"
            >
                <div className="relative w-72 h-32">
                    <Image
                        src="/contact/mangopost.png"
                        alt="MANG Logo"
                        width={384}
                        height={128}
                        quality={100}
                        unoptimized
                        style={{ objectFit: "contain" }}
                        className="w-full h-full"
                    />
                </div>
            </a>
            <a
                href="https://www.apawards.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="APA Awards Website"
            >
                <div className="relative w-48 h-24">
                    <Image
                        src="/contact/APA_logo_90.png"
                        alt="APA Logo"
                        width={256}
                        height={96}
                        quality={100}
                        unoptimized
                        style={{ objectFit: "contain" }}
                        className="w-full h-full"
                    />
                </div>
            </a>
            <a
                href="https://www.cfre.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CFRE Website"
            >
                <div className="relative w-48 h-24">
                    <Image
                        src="/contact/cfre.jpg"
                        alt="CFRE Logo"
                        width={256}
                        height={96}
                        quality={100}
                        unoptimized
                        style={{ objectFit: "contain" }}
                        className="w-full h-full"
                    />
                </div>
            </a>
            <a
                href="https://wingsweb.org/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Wings Website"
            >
                <div className="relative w-80 h-32">
                    <Image
                        src="/contact/blue vertical.png"
                        alt="Wings Logo"
                        width={384}
                        height={128}
                        quality={100}
                        unoptimized
                        style={{ objectFit: "contain" }}
                        className="w-full h-full"
                    />
                </div>
            </a>
        </section>
    );
}