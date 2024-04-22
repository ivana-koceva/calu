"use client";

import Image from "next/image";
import CrazyLabs from "@/app/resources/crazy-labs.png";
import HTec from "@/app/resources/vectorhtec-logo.svg";
import Heading from "./Heading";

export default function Sponsors() {
    return(
        <section className="md:mx-6 mx-auto lg:px-36 md:px-16 px-8 mt-12 mb-20">
            <div className="lg:px-36 md:px-16 px-4 grid justify-center items-center">
                <Heading heading={"Sponsors"}></Heading>
                <Image src={CrazyLabs} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image>
                <Image src={HTec} alt="Sponsor Logo" height={250} className="mt-8 mb-8"></Image>
            </div>
        </section>
    );
}