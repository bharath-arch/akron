import React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import amazon from "../assets/amazon.webp";
import Clevertap from "../assets/Clevertap.webp";
import Hubspot from "../assets/Hubspot.webp";
import Jet_Brains from "../assets/Jet_Brains.webp";
import Mixpanel from "../assets/Mixpanel.webp";
import Cur8_Logo from "../assets/Cur8_Logo.webp";
import Z1_N from "../assets/Z1_N.webp";
import Exfin from "../assets/Exfin.webp";
import Blaash from "../assets/Blaash_Logo.png";

const companies = [
  {
    id: 1,
    name: "AWS",
    services: "Cloud Services",
    about:
      "Amazon Web Services provides on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered, pay-as-you-go basis.",
    image: amazon,
  },
  {
    id: 2,
    name: "CleverTap",
    services: "CRM",
    about:
      "CleverTap is an omnichannel customer engagement and user retention platform that helps brands create individualized experiences, drive user engagement.",
    image: Clevertap,
  },
  {
    id: 3,
    name: "Mixpanel",
    services: "Analytics",
    about:
      "Mixpanel is a business analytics service company. It tracks user interactions with web and mobile applications and provides tools for targeted communication with them.",
    image: Mixpanel,
  },
  {
    id: 4,
    name: "HubSpot",
    services: "CRM",
    about:
      "HubSpot is a CRM platform with all the software, integrations, and resources you need to connect marketing, sales, content management, and customer service.",
    image: Hubspot,
  },
  {
    id: 5,
    name: "JetBrains",
    services: "Productivity",
    about:
      "JetBrains is a global software company specializing in the creation of intelligent, productivity-enhancing tools for software developers and teams.",
    image: Jet_Brains,
  },
  {
    id: 6,
    name: "CUR8",
    services: "Growth",
    about:
      "CUR8 is India's first revenue-tech firm working exclusively with 120+ leading startups & enterprises to help them maximize revenue by creating the best revenue teams.",
    image: Cur8_Logo,
  },
  {
    id: 7,
    name: "Z1N Capital",
    services: "Treasury",
    about:
      "Z1N helps rapidly growing companies resolve treasury management challenges with a complete, 360°tech-enabled platform.",
    image: Z1_N,
  },
  {
    id: 8,
    name: "Exfin Solutions",
    services: "Accounting",
    about:
      "Exfin is a professional services company that provides Accountancy & Taxation services to it's clients.",
    image: Exfin,
  },
  {
    id: 9,
    name: "Blaash",
    services: "Video Commerce",
    about:
      "Blaash provides solutions to amplify website traffic engagement, conversion and retention via the use of shoppable videos, stories and live commerce.",
    image: Blaash,
  },
];

function Partnership() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* Startups Section */}
      <section className="mt-10 bg-purple-50 p-8 rounded-lg shadow-md">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Benefits for Startups
        </h2>
        <div className="flex justify-center gap-4 mt-4">
          <Stack spacing={2} direction="row">
            <Button variant="outlined" href="#Startups" className="transform transition duration-500  hover:scale-110">
              Startups
            </Button>
            <Button variant="outlined" href="#Investors" className="transform transition duration-500  hover:scale-110">
              Investors
            </Button>
          </Stack>
          {/* <a
            href="#Startups"
            className="btn-primary"
          >
            For Startups
          </a>
          <a
            href="#Investors"
            className="btn-primary"
          >
            For Investors
          </a> */}
        </div>
      </section>

      {/* Startups Content */}
      <section id="Startups" className="mt-10">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Startups Benefits
        </h2>
        <p className="text-lg text-center">
          Exclusive benefits when you raise through Tyke
        </p>
      </section>

      {/* Companies Section */}
      <section className="mt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {companies.map((data) => (
            <div
              key={data.id}
              className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center transform transition duration-500  hover:scale-110"
            >
              <img
                src={data.image}
                alt={data.name}
                className="w-24 h-24 object-contain mb-4"
              />
              <h3 className="text-xl font-bold mb-2">{data.name}</h3>
              <p className="text-gray-700 mb-2">{data.services}</p>
              <p className="text-sm text-center">{data.about}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Investors Section */}
      <section
        id="Investors"
        className="mt-10 bg-purple-50 p-8 rounded-lg shadow-md"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">
          Benefits for Investors
        </h2>
        <p className="text-lg text-center">
          We're working to give you additional benefits, apart from all the
          investment opportunities. Stay tuned!
        </p>
      </section>
    </div>
  );
}

export default Partnership;
