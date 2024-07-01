import React from "react";
import image from "../assets/ceo.png";

const teamData = [
  { id: 1, name: "Amal", position: "CEO", image: image },
  { id: 2, name: "Deepak", position: "CFO", image: image },
  { id: 3, name: "Vishnu", position: "Developer", image: image },
  { id: 4, name: "Rahul", position: "Developer", image: image },
  { id: 5, name: "Jithusha", position: "Developer", image: image },
  { id: 6, name: "Aparna", position: "Investment Advisor", image: image },
  { id: 7, name: "Sanijith", position: "Investment Advisor", image: image },
  { id: 8, name: "Shafeque", position: "Investment Advisor", image: image },
];

function About() {
  return (
    <div className="max-w-7xl mx-auto">
      <section className="mt-10 md:mr-20 ml-3 mr-3">
        <h1 className="text-4xl font-semibold text-gray-600 mb-8">Our Vision</h1>
        <p className="text-lg mb-6">
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
