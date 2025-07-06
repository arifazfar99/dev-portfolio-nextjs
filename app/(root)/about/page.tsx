import React from "react";
import Image from "next/image";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";

const AboutPage = async () => {
  return (
    <MaxWidthWrapper className="py-10 md:py-20">
      <div className="w-full space-y-6 sm:space-y-16">
        <section className="space-y-6 text-center">
          <div className="flex justify-center">
            <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-4 border-gray-300 shadow-lg">
              <Image
                src={"/profile.png"}
                alt="rfzfr"
                className="object-cover"
                priority
                width={400}
                height={400}
              />
            </div>
          </div>
          <h2 className="text-4xl font-bold">Hi, I'm Arif Azfar 👋</h2>
          <p>
            A frontend developer passionate about crafting intuitive,
            responsive, and modern web experiences. I thrive on turning ideas
            into clean, accessible, and scalable code.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">My Journey</h2>
          <p>
            I began my journey as a frontend developer in 2022 and have since
            been continuously learning and growing with modern tools like
            React.js, Next.js, and Tailwind CSS. I am passionate about design
            systems, performance optimization, and crafting exceptional user
            experiences.
          </p>
          <p>
            Recently, I have started exploring backend technologies such as
            Node.js and Express, along with integrating AI capabilities. I am
            currently deepening my understanding of databases, APIs,
            authentication, authorization, and server-side logic.
          </p>
          <p>
            My end goal is to become a well-rounded fullstack developer. I am
            driven by the vision of building complete, scalable applications
            from the ground up, bridging the gap between beautiful frontends and
            powerful backends.
          </p>
        </section>

        {/* Fun Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">Beyond Code</h2>
          <p>
            Outside of coding, I enjoy watching anime, TV series and playing
            both mobile and PC games with my friends.
          </p>
        </section>
      </div>
    </MaxWidthWrapper>
  );
};

export default AboutPage;
