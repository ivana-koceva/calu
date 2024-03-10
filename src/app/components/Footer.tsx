"use client";

import Image from "next/image";
import CALU from "@/app/resources/calu.png"

export default function Footer() {
    return(
        <footer className="bg-zinc-50 flex justify-center items-center p-6">
            <Image src={CALU} alt="CALU Logo" height={150} className="pt-6 pr-8 pb-6 pl-6"></Image>
        </footer>
    );
}