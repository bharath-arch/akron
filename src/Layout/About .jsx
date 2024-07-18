import React from "react";
import image from "../assets/ceo.png";
import p1 from '../assets/p1.webp';
import p2 from '../assets/p2.webp';
import p3 from '../assets/p3.webp';
import p4 from '../assets/p4.webp';
import p5 from '../assets/p5.jpeg';
import p6 from '../assets/p6.jpeg';
import p7 from '../assets/p7.webp';
import p8 from '../assets/p8.webp';

const teamData = [
  { id: 1, name: "Amal", position: "CEO", image: p1 },
  { id: 2, name: "Deepak", position: "CFO", image: p2 },
  { id: 3, name: "Vishnu", position: "Developer", image: p3 },
  { id: 4, name: "Rahul", position: "Developer", image: p4 },
  { id: 5, name: "Jithusha", position: "Developer", image: p5 },
  { id: 6, name: "Aparna", position: "Investment Advisor", image: p6 },
  { id: 7, name: "Sanijith", position: "Investment Advisor", image: p7 },
  { id: 8, name: "Shafeque", position: "Investment Advisor", image: p8 },
];

function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="mt-10 md:mr-20 ml-3 mr-3">
        <h1 className="text-4xl font-semibold text-center text-gray-600 mb-8">Our Vision</h1>
        <p className="text-lg mb-6 text-center">
          Acorn is a revolutionary platform dedicated to fostering a thriving startup ecosystem. We bridge the gap between ambitious entrepreneurs and the resources they need to flourish. By democratizing startup investment, we empower a diverse pool of investors to shape tomorrow's world. Acorn cultivates a collaborative hub where meaningful connections drive sustainable success. We streamline the funding journey with a user-friendly platform, leveraging technology for seamless investment transactions. Together, we champion innovative startups that drive positive societal change, building a prosperous and equitable future through collective investment.
        </p>
      </section>

      <div className="mt-16 text-2xl text-center">Our Team</div>

      <div className="flex flex-wrap justify-center mt-6">
        {teamData.map((member, index) => (
          <div key={member.id} className={`w-64 mx-4 my-8 bg-${index % 2 === 0 ? "white" : "gray"}-100 rounded-lg shadow-md p-4 flex flex-col items-center transform transition duration-500  hover:scale-110`}>
            <img src={member.image} alt={member.name} className="w-32 h-32 object-cover rounded-full mb-4" />
            <div className="text-center">
              <p className="font-semibold">{member.name}</p>
              <p className="text-sm">{member.position}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
