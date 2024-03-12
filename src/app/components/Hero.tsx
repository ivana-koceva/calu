"use client";

import Button from "./Button";
import { MdArrowOutward } from "react-icons/md";
import Participants from '../resources/participants.png'
import Link from "next/link";

export default function Hero() {
    return (
      <main className="w-full px-5 py-24" style={{
        backgroundImage: `linear-gradient(180deg, #262626 0%, rgba(38, 38, 38, 0.5) 100%), url(${Participants.src})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}>
        <div className="container mx-auto md:px-10 px-5 py-16">
          <h1 className="md:text-5xl text-4xl font-semibold my-3 text-balance text-white">
              Level Up Your <span className="text-eestec font-bold">Coding</span> Skills
          </h1>
          <p className="md:text-base text-sm text-slate-50 my-3 text-balance leading-none">
          Join us for the 6th edition of Code App Level Up workshop and <span className="font-medium">Power Your Future!</span>
          </p>
          <Link href={"https://docs.google.com/forms/d/e/1FAIpQLSea-bdfyCXaZrGXRWW04v8Csa_4lLtKcUfpZLglgHwMYxBnzg/viewform?usp=sf_link"}>
            <Button text="Apply Now!" icon={MdArrowOutward}></Button>
          </Link>
        </div>
      </main>  
    );
}