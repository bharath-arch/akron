import React from "react";
import image from "../assets/ceo.png";

const data = [
  { id: 1, name: "Amal", position: "CEO", image: "../assets/ceo.png" },
  { id: 2, name: "Deepak", position: "CFO", image: "../assets/ceo.png" },
  { id: 3, name: "Vishnu", position: "Developer", image: "../assets/ceo.png" },
  { id: 4, name: "Rahul", position: "Developer", image: "../assets/ceo.png" },
  {
    id: 5,
    name: "Jithusha",
    position: "Developer",
    image: "../assets/ceo.png",
  },
  {
    id: 6,
    name: "Aparna",
    position: "Investment Advisor",
    image: "../assets/ceo.png",
  },
  {
    id: 7,
    name: "Sanijith",
    position: "Investment Advisor",
    image: "../assets/ceo.png",
  },
  {
    id: 8,
    name: "Shafeque",
    position: "Investment Advisor",
    image: "../assets/ceo.png",
  },
];

function About() {
  return (
    <div>
      <section className="mt-16 md:ml-20 md:mr-20 ml-3 mr-3 ">
        <h1 className="flex justify-center text-4xl font-semibold">
          Our Vision
        </h1>
        <h1 className="mt-5 mb-1 text-xl font-semibold">
          Acorn: Empowering Innovation, Together
        </h1>
        <p className="mb-3">
          Acorn is a revolutionary platform dedicated to fostering a thriving
          startup ecosystem. We believe in the transformative power of
          groundbreaking ideas, and our mission is to bridge the gap between
          ambitious entrepreneurs and the resources they need to flourish.
        </p>
        <h1 className="mt-5 mb-1 text-xl font-semibold">
          Democratizing Startup Investment
        </h1>
        <p className="mb-3">
          {" "}
          Traditionally, venture funding has been an exclusive club. Acorn
          shatters these barriers by enabling a diverse pool of investors to
          participate in the future of innovation. We offer accessible
          investment opportunities, empowering individuals to become active
          players in shaping tomorrow's world.{" "}
        </p>
        <h1 className="mt-5 mb-1 text-xl font-semibold">
          Cultivating a Collaborative Hub
        </h1>
        <p className="mb-3">
          Acorn goes beyond simply connecting capital with startups. We envision
          a vibrant community where investors and entrepreneurs can forge
          meaningful connections. Our platform fosters open dialogue, mentorship
          opportunities, and valuable industry insights, propelling startups
          towards sustainable success.
        </p>
        <h1 className="mt-5 mb-1 text-xl font-semibold">
          Streamlining the Funding Journey
        </h1>
        <p className="mb-3 ">
          Acorn streamlines the often-complex fundraising process. Our
          user-friendly platform simplifies investment transactions, allowing
          startups to efficiently secure the resources they need to fuel their
          growth. We leverage technology to create a seamless experience for
          both investors and entrepreneurs.
        </p>
        <h1 className="mt-5 mb-1 text-xl font-semibold">
          {" "}
          Investing in a Brighter Tomorrow
        </h1>
        <p className="mb-3">
          By supporting innovative startups, Acorn contributes to positive
          societal change. We champion businesses that address critical
          challenges and drive sustainable progress. Together, we can build a
          more prosperous and equitable future through the power of collective
          investment.
        </p>
      </section>
      <div className="">
        <p className="text-center mt-[2rem] text-2xl">Our team</p>
      </div>
      <div className="flex w-full flex-wrap justify-center mt-3  ">
        <div
          className={` flex flex-wrap  justify-center  `}
        >
          {data.map((data, index) => (
            <div className=" ">
              <div className="flex justify-center items-center mt-4">
                <img
                  src={image}
                  alt={data.name + "image"}
                  className="w-[70%] "
                />
              </div>

              <span
                key={index}
                className="flex justify-center text-center flex-col"
              >
                {data.name} <br />
                {data.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;
