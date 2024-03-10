"use client";

import Numbers from "./Numbers";

export default function Statistics() {
    return(
        <section className="my-10 md:mx-28 mx-12">
            <div className="lg:flex justify-evenly items-center gap-24">
                <Numbers number={"300"} text={"participants"}></Numbers>
                <Numbers number={"150"} text={"companies"}></Numbers>
                <Numbers number={"50"} text={"seminars"}></Numbers>
            </div>
        </section>
    );
}