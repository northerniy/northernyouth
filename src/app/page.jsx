"use client";
import React, { useState, useEffect } from "react";

function MainComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState("home");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [showDonateModal, setShowDonateModal] = useState(false);
  const [activeSection, setActiveSection] = useState("volunteer");

  const handlePageChange = (page) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (currentPage === "home") {
      const timer = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % 3);
      }, 5000);
      return () => clearInterval(timer);
    }
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-white">
      <nav className="bg-[#4B0082] fixed w-full z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <img
                src="https://ucarecdn.com/85273099-7f74-4af1-a308-602bf9629e97/-/format/auto/"
                alt="Northern Youth Initiative logo showing two camels under an acacia tree"
                className="h-12 w-12"
                style={{ background: "transparent" }}
              />
              <span className="text-white font-montserrat text-xl font-bold">
                Northern Youth Initiative
              </span>
            </div>

            <div className="hidden md:flex space-x-8">
              <button
                onClick={() => handlePageChange("home")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "home" ? "text-[#DAA520]" : ""
                }`}
              >
                Home
              </button>
              <button
                onClick={() => handlePageChange("about")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "about" ? "text-[#DAA520]" : ""
                }`}
              >
                About
              </button>
              <button
                onClick={() => handlePageChange("team")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "team" ? "text-[#DAA520]" : ""
                }`}
              >
                Team
              </button>
              <button
                onClick={() => handlePageChange("programs")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "programs" ? "text-[#DAA520]" : ""
                }`}
              >
                Programs
              </button>
              <button
                onClick={() => handlePageChange("events")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "events" ? "text-[#DAA520]" : ""
                }`}
              >
                Events
              </button>
              <button
                onClick={() => handlePageChange("get-involved")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "get-involved" ? "text-[#DAA520]" : ""
                }`}
              >
                Get Involved
              </button>
              <button
                onClick={() => handlePageChange("gallery")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "gallery" ? "text-[#DAA520]" : ""
                }`}
              >
                Gallery
              </button>
              <button
                onClick={() => handlePageChange("resources")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "resources" ? "text-[#DAA520]" : ""
                }`}
              >
                Resources
              </button>
              <button
                onClick={() => handlePageChange("contact")}
                className={`text-white hover:text-[#DAA520] font-raleway ${
                  currentPage === "contact" ? "text-[#DAA520]" : ""
                }`}
              >
                Contact
              </button>
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white"
            >
              <i
                className={`fas ${
                  isMenuOpen ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#4B0082] pb-4">
            <button
              onClick={() => handlePageChange("home")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "home" ? "bg-[#3B0062]" : ""
              }`}
            >
              Home
            </button>
            <button
              onClick={() => handlePageChange("about")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "about" ? "bg-[#3B0062]" : ""
              }`}
            >
              About
            </button>
            <button
              onClick={() => handlePageChange("team")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "team" ? "bg-[#3B0062]" : ""
              }`}
            >
              Team
            </button>
            <button
              onClick={() => handlePageChange("programs")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "programs" ? "bg-[#3B0062]" : ""
              }`}
            >
              Programs
            </button>
            <button
              onClick={() => handlePageChange("events")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "events" ? "bg-[#3B0062]" : ""
              }`}
            >
              Events
            </button>
            <button
              onClick={() => handlePageChange("get-involved")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "get-involved" ? "bg-[#3B0062]" : ""
              }`}
            >
              Get Involved
            </button>
            <button
              onClick={() => handlePageChange("gallery")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "gallery" ? "bg-[#3B0062]" : ""
              }`}
            >
              Gallery
            </button>
            <button
              onClick={() => handlePageChange("resources")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "resources" ? "bg-[#3B0062]" : ""
              }`}
            >
              Resources
            </button>
            <button
              onClick={() => handlePageChange("contact")}
              className={`block w-full text-left text-white px-4 py-2 hover:bg-[#3B0062] font-raleway ${
                currentPage === "contact" ? "bg-[#3B0062]" : ""
              }`}
            >
              Contact
            </button>
          </div>
        )}
      </nav>

      {currentPage === "home" && (
        <section
          id="home"
          className="pt-20 pb-16 bg-gradient-to-b from-[#4B0082] to-[#e3f2fd]"
        >
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex flex-col items-center mb-16">
              <div className="relative w-full h-[400px] rounded-lg overflow-hidden shadow-xl mb-16">
                {[
                  {
                    image:
                      "https://ucarecdn.com/4eb70354-2e49-444e-b714-fb976ed33dd5/-/format/auto/",
                    alt: "Youth group participating in martial arts training at Northern Youth Initiative",
                  },
                  {
                    image:
                      "https://ucarecdn.com/d43dc961-c564-4678-8b31-26cbe5453487/-/format/auto/",
                    alt: "Youth sports team gathering at Moyale Sub-County headquarters",
                  },
                  {
                    image:
                      "https://ucarecdn.com/e50a304a-379e-4d78-a050-c9cd1483d7be/-/format/auto/",
                    alt: "Agricultural training and farming initiative in Moyale",
                  },
                ].map((slide, index) => (
                  <div
                    key={index}
                    className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
                      currentSlide === index ? "opacity-100" : "opacity-0"
                    }`}
                  >
                    <img
                      src={slide.image}
                      alt={slide.alt}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
                  {[0, 1, 2].map((index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full ${
                        currentSlide === index ? "bg-[#DAA520]" : "bg-white"
                      }`}
                    />
                  ))}
                </div>
              </div>
              <div className="text-center text-white mb-16">
                <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-6">
                  Forging Our Future
                </h1>
                <p className="text-lg font-raleway mb-8 max-w-3xl mx-auto">
                  The Northern Youth Initiative (NYI) is a dynamic and impactful
                  Community Based Organization (CBO) operating in the
                  challenging yet promising region of Moyale, Kenya, near the
                  border with Ethiopia. NYI is deeply committed to empowering
                  youth, driving positive change, and fostering sustainable
                  development in this often-marginalized area.
                </p>
                <p className="text-lg font-raleway mb-8 max-w-3xl mx-auto">
                  Formerly known as Tubonge Peace Initiative, NYI has a strong
                  track record of promoting peace and dialogue in the region.
                  Notably, the organization played an active role in the Vijana
                  Tubonge Campaign during the 2022 Kenyan General Elections,
                  facilitating Youth to Youth dialogues in Moyale to foster
                  understanding and mitigate conflict. This experience
                  solidified NYI's commitment to youth empowerment and
                  peacebuilding, leading to its evolution and expanded focus as
                  Northern Youth Initiative.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-lg p-8 shadow-xl mb-16">
                <div>
                  <h2 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    About Moyale
                  </h2>
                  <p className="text-gray-700 font-raleway mb-4">
                    Moyale is a vibrant border town straddling Kenya and
                    Ethiopia, rich in cultural diversity and youthful energy.
                    However, our community faces significant challenges:
                  </p>
                  <ul className="list-none space-y-2 text-gray-700 font-raleway">
                    <li className="flex items-start">
                      <i className="fas fa-circle text-[#DAA520] text-xs mt-2 mr-2"></i>
                      <span>
                        Limited access to quality education and vocational
                        training
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-[#DAA520] text-xs mt-2 mr-2"></i>
                      <span>High youth unemployment rates</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-[#DAA520] text-xs mt-2 mr-2"></i>
                      <span>
                        Environmental challenges including deforestation and
                        drought
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-circle text-[#DAA520] text-xs mt-2 mr-2"></i>
                      <span>
                        Cross-border tensions affecting community cohesion
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Our Impact
                  </h2>
                  <p className="text-gray-700 font-raleway mb-4">
                    Northern Youth Initiative (NYI) is addressing these
                    challenges through:
                  </p>
                  <ul className="list-none space-y-2 text-gray-700 font-raleway">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] text-lg mr-2"></i>
                      <span>
                        Skills training and mentorship programs at Moyale
                        Vocational Training Centre
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] text-lg mr-2"></i>
                      <span>
                        Cross-border peace initiatives through sports and
                        cultural exchange
                      </span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] text-lg mr-2"></i>
                      <span>Youth-led environmental conservation projects</span>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] text-lg mr-2"></i>
                      <span>
                        Mental health support and community resilience building
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="w-full bg-white rounded-lg p-8 shadow-xl">
                <h2 className="text-2xl font-bold font-montserrat mb-8 text-[#DAA520] text-center">
                  Our Partners
                </h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                  {[
                    {
                      name: "SND Africa",
                      logo: "https://ucarecdn.com/83a154e2-8713-42fd-8151-2ed499b06428/-/format/auto/",
                    },
                    {
                      name: "VSO",
                      logo: "https://ucarecdn.com/445e02cf-9c14-4ca4-bbce-a92f5b64ff75/-/format/auto/",
                    },
                    {
                      name: "USAID",
                      logo: "https://ucarecdn.com/cb8d8313-83c6-497a-ac1c-9f198e3d3678/-/format/auto/",
                    },
                    {
                      name: "FIFA Foundation",
                      logo: "https://ucarecdn.com/5ecd8880-076f-4ae9-8af8-abad6858f3a4/-/format/auto/",
                    },
                    {
                      name: "Equity Bank",
                      logo: "https://ucarecdn.com/16d2ec0b-a7ab-4f72-9993-37eea0152eb8/-/format/auto/",
                    },
                    {
                      name: "KCB",
                      logo: "https://ucarecdn.com/9f468156-b03c-4387-8646-65a8273471c5/-/format/auto/",
                    },
                    {
                      name: "Government of Kenya",
                      logo: "https://ucarecdn.com/60e4fc23-95a8-4876-8a96-494d249d41b9/-/format/auto/",
                    },
                    {
                      name: "Marsabit County",
                      logo: "https://ucarecdn.com/4bfa9ec0-2a1e-4d64-a391-f9df945bc11a/-/format/auto/",
                    },
                  ].map((partner, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-center p-4"
                    >
                      <img
                        src={partner.logo}
                        alt={`${partner.name} logo`}
                        className="max-h-16 w-auto transition-all duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "programs" && (
        <section id="programs" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Our Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
              {[
                {
                  title: "Youth Empowerment",
                  icon: "fa-users",
                  desc: "Building capacity and creating opportunities for young people",
                },
                {
                  title: "Climate Action",
                  icon: "fa-leaf",
                  desc: "Promoting environmental conservation and sustainable practices",
                },
                {
                  title: "Advocacy",
                  icon: "fa-bullhorn",
                  desc: "Amplifying youth voices in policy-making and governance",
                },
                {
                  title: "Mental Health",
                  icon: "fa-heart",
                  desc: "Supporting mental wellness and psychological well-being",
                },
                {
                  title: "Community Health and Wellness",
                  icon: "fa-medkit",
                  desc: "Improving access to healthcare services and promoting community wellness",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-[#f8f9fa] p-6 rounded-lg text-center hover:shadow-lg transition-shadow"
                >
                  <i
                    className={`fas ${item.icon} text-4xl text-[#DAA520] mb-4`}
                  ></i>
                  <h3 className="text-xl font-bold mb-2 font-montserrat">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 font-raleway">{item.desc}</p>
                </div>
              ))}
            </div>

            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Our Current Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  title: "Youth Mentorship Project",
                  location: "Moyale Vocational Training Centre",
                  desc: "Empowering youth through skills development and career guidance at the vocational training centre.",
                  icon: "fa-graduation-cap",
                },
                {
                  title: "Cross Border Football Tournament",
                  location: "Moyale",
                  desc: "Fostering peace and unity through sports across the Kenya-Ethiopia border.",
                  icon: "fa-futbol",
                },
                {
                  title: "Youth-Led Climate Action",
                  location: "Moyale",
                  desc: "Engaging youth in environmental conservation and sustainable practices.",
                  icon: "fa-seedling",
                },
                {
                  title: "Medical Camps in Moyale",
                  location: "Moyale Community Centers",
                  desc: "Providing essential healthcare services and health education to underserved communities.",
                  icon: "fa-hospital",
                },
              ].map((project, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                >
                  <div className="text-center mb-6">
                    <i
                      className={`fas ${project.icon} text-4xl text-[#DAA520]`}
                    ></i>
                  </div>
                  <h3 className="text-xl font-bold mb-2 font-montserrat text-center">
                    {project.title}
                  </h3>
                  <p className="text-[#DAA520] font-raleway text-center mb-4">
                    {project.location}
                  </p>
                  <p className="text-gray-600 font-raleway text-center">
                    {project.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === "about" && (
        <section id="about" className="pt-24 pb-16 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              About Us
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              <div>
                <img
                  src="https://ucarecdn.com/d4ab2354-688b-4e1e-bf24-a831c4bba076/-/format/auto/"
                  alt="Youth participating in environmental conservation activity in Moyale"
                  className="rounded-lg shadow-xl w-full h-[400px] object-cover"
                />
              </div>
              <div>
                <p className="text-gray-700 font-raleway leading-relaxed mb-6">
                  Northern Youth Initiative is a community-based organization
                  dedicated to transforming lives in Moyale, Kenya. We work at
                  the grassroots level to empower youth, tackle climate
                  challenges, advocate for positive change, and promote mental
                  health awareness.
                </p>
                <p className="text-gray-700 font-raleway leading-relaxed mb-6">
                  NYI's operations are concentrated in Moyale, a strategically
                  important town located on the Kenya-Ethiopia border. The
                  organization also works with communities in the broader border
                  region.
                </p>
                <p className="text-gray-700 font-raleway leading-relaxed">
                  Our approach combines local knowledge with innovative
                  solutions to create sustainable impact in our community.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                  Our Mission
                </h3>
                <p className="text-gray-700 font-raleway leading-relaxed">
                  To empower youth in Northern Kenya through sustainable
                  development initiatives, advocacy, and capacity building,
                  creating positive change in our communities while preserving
                  our cultural heritage.
                </p>
              </div>
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                  Our Vision
                </h3>
                <p className="text-gray-700 font-raleway leading-relaxed">
                  A thriving Northern Kenya where youth are empowered,
                  resilient, and actively participating in sustainable
                  development while maintaining their cultural identity.
                </p>
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold font-montserrat mb-8 text-[#DAA520] text-center">
                Our Core Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  {
                    title: "Integrity",
                    icon: "fa-heart",
                    desc: "Maintaining highest ethical standards in all our operations",
                  },
                  {
                    title: "Innovation",
                    icon: "fa-lightbulb",
                    desc: "Embracing creative solutions to community challenges",
                  },
                  {
                    title: "Inclusivity",
                    icon: "fa-users",
                    desc: "Ensuring equal participation and representation",
                  },
                  {
                    title: "Impact",
                    icon: "fa-star",
                    desc: "Creating measurable positive change in communities",
                  },
                ].map((value, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md text-center"
                  >
                    <i
                      className={`fas ${value.icon} text-3xl text-[#DAA520] mb-4`}
                    ></i>
                    <h4 className="text-xl font-bold mb-2 font-montserrat">
                      {value.title}
                    </h4>
                    <p className="text-gray-600 font-raleway">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold font-montserrat mb-8 text-[#DAA520] text-center">
                Our Guiding Principles
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  "Youth-led development and decision making",
                  "Environmental sustainability in all operations",
                  "Cultural preservation and indigenous knowledge",
                  "Gender equality and women empowerment",
                  "Transparency and accountability",
                  "Community participation and ownership",
                ].map((principle, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-lg shadow-md flex items-center gap-4"
                  >
                    <i className="fas fa-check-circle text-[#DAA520] text-xl"></i>
                    <p className="font-raleway text-gray-700">{principle}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "team" && (
        <section id="team" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Our Team
            </h2>
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center font-montserrat mb-8 text-[#DAA520]">
                Board of Directors
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                {[
                  {
                    name: "Mr Galgalo Boru",
                    role: "Board Chair",
                    image:
                      "https://ucarecdn.com/9a380795-1363-409c-a6c0-9ad4d1c92a9b/-/format/auto/",
                  },
                  {
                    name: "Muhammad Mohammed",
                    role: "Vice-Chairperson",
                    image:
                      "https://ucarecdn.com/bfb29b16-8dc5-4ae6-97da-1f2c4f099bec/-/format/auto/",
                  },
                  {
                    name: "Asha Wario",
                    role: "Secretary",
                  },
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`Board member ${member.name} serving as ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <i className="fas fa-user text-4xl text-gray-400"></i>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-raleway">{member.role}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href="#"
                        className="text-[#4B0082] hover:text-[#DAA520]"
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-[#4B0082] hover:text-[#DAA520]"
                      >
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center font-montserrat mb-8 text-[#DAA520]">
                Executive Leadership
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Safia Saro",
                    role: "Executive Director",
                    image:
                      "https://ucarecdn.com/073c0121-15ad-4175-8e32-18f1fa037b71/-/format/auto/",
                  },
                  {
                    name: "Nasra Edin Aliow",
                    role: "Finance and Administration Director",
                    image:
                      "https://ucarecdn.com/0c777589-f2f1-47e6-9f88-7ea5e783e689/-/format/auto/",
                  },
                  {
                    name: "Abdirahim Suleiman Adan",
                    role: "Programs Director",
                    image:
                      "https://ucarecdn.com/3759ba1f-bd33-4468-98e7-0ac781a0aa4d/-/format/auto/",
                  },
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full">
                      {member.image ? (
                        <img
                          src={member.image}
                          alt={`Team member at Northern Youth Initiative serving as ${member.role}`}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                          <i className="fas fa-user text-4xl text-gray-400"></i>
                        </div>
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-raleway">{member.role}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href="#"
                        className="text-[#4B0082] hover:text-[#DAA520]"
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-[#4B0082] hover:text-[#DAA520]"
                      >
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-center font-montserrat mb-8 text-[#DAA520]">
                Staff
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
                {[
                  {
                    name: "Daki Wario Dida",
                    role: "Project Officer",
                  },
                  {
                    name: "Rahma Edin Dima",
                    role: "Admin Assistant",
                  },
                  {
                    name: "Habiba Bontore",
                    role: "Communication and Outreach",
                  },
                  {
                    name: "Abdiraham Ibrahim",
                    role: "Community Mobilizer",
                  },
                  {
                    name: "Rahma Galma",
                    role: "Partnership and Outreach",
                  },
                ].map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-48 h-48 mx-auto mb-4 overflow-hidden rounded-full bg-gray-200 flex items-center justify-center">
                      <i className="fas fa-user text-4xl text-gray-400"></i>
                    </div>
                    <h3 className="text-xl font-bold mb-2 font-montserrat">
                      {member.name}
                    </h3>
                    <p className="text-gray-600 font-raleway">{member.role}</p>
                    <div className="flex justify-center space-x-4 mt-4">
                      <a
                        href="#"
                        className="text-[#4B0082] hover:text-[#DAA520]"
                      >
                        <i className="fab fa-linkedin text-xl"></i>
                      </a>
                      <a
                        href="#"
                        className="text-[#4B0082] hover:text-[#DAA520]"
                      >
                        <i className="fab fa-twitter text-xl"></i>
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "events" && (
        <section id="events" className="py-16 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Events & Activities
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
              {[
                {
                  title: "16 Days of Activism",
                  date: "November 25 - December 10, 2025",
                  location: "Moyale Community Centers",
                  image:
                    "https://ucarecdn.com/d68129c1-f3c7-423d-94b9-2301d7028981/-/format/auto/",
                  description:
                    "Campaign against gender-based violence featuring workshops, community dialogues, and youth-led advocacy initiatives.",
                },
              ].map((event, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg overflow-hidden max-w-2xl mx-auto"
                >
                  <div className="h-64 overflow-hidden">
                    <img
                      src={event.image}
                      alt={`${event.title} event at Northern Youth Initiative`}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 font-montserrat text-[#DAA520]">
                      {event.title}
                    </h3>
                    <div className="flex items-center mb-2 text-[#DAA520]">
                      <i className="far fa-calendar-alt mr-2"></i>
                      <p className="font-raleway text-sm">{event.date}</p>
                    </div>
                    <div className="flex items-center mb-4 text-[#DAA520]">
                      <i className="fas fa-map-marker-alt mr-2"></i>
                      <p className="font-raleway text-sm">{event.location}</p>
                    </div>
                    <p className="text-gray-600 font-raleway text-sm mb-4">
                      {event.description}
                    </p>
                    <button className="w-full bg-[#DAA520] text-white py-2 rounded font-raleway hover:bg-[#B8860B] transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === "contact" && (
        <section id="contact" className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Get In Touch
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
              <div className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <i className="fas fa-envelope text-2xl text-[#DAA520] mb-2"></i>
                    <p className="font-raleway">info@northernyouth.org</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-phone text-2xl text-[#DAA520] mb-2"></i>
                    <p className="font-raleway">+254110686481</p>
                  </div>
                  <div className="text-center">
                    <i className="fas fa-map-marker-alt text-2xl text-[#DAA520] mb-2"></i>
                    <p className="font-raleway">Moyale, Kenya</p>
                  </div>
                </div>
                <form className="space-y-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg font-raleway"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg font-raleway"
                  />
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="4"
                    className="w-full p-3 border rounded-lg font-raleway"
                  ></textarea>
                  <button
                    type="submit"
                    className="w-full bg-[#DAA520] text-white py-3 rounded-lg font-raleway hover:bg-[#B8860B]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              <div className="w-full h-[500px] rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15906.851750772675!2d39.0472873!3d3.5252759!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x17938f90137a8f59%3A0xf41f4a0bf9688aa1!2sMoyale%2C%20Kenya!5e0!3m2!1sen!2sus!4v1674284512345!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map showing location of Moyale, Kenya"
                  className="rounded-lg"
                ></iframe>
              </div>
            </div>
          </div>
        </section>
      )}

      {currentPage === "resources" && (
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Resources & Blog
            </h2>
            <div className="grid grid-cols-1 gap-8">
              {[
                {
                  title: "Mitigating Conflicts Through Youth Engagement",
                  date: "November 5, 2024",
                  category: "Featured",
                  image:
                    "https://ucarecdn.com/6613c5f2-83bb-4447-88c0-48e2156cd5ce/-/format/auto/",
                  description:
                    "In an inspiring initiative, the Northern Youth Initiative is spearheading efforts to address cross-border conflicts through strategic youth engagement. Under the leadership of Safia Saro, our organization has implemented a comprehensive program that combines peace-building workshops, cultural exchange programs, and collaborative community projects. The program specifically targets youth from both sides of the Kenya-Ethiopia border, fostering understanding and cooperation through shared experiences and dialogue. Key achievements include the establishment of youth-led peace committees, regular cross-border sports tournaments, and joint environmental conservation projects that bring together young people from different communities. This innovative approach not only addresses immediate conflict resolution needs but also builds lasting relationships and networks that contribute to sustainable peace in the region.",
                  author: "Safia Saro",
                  featured: true,
                  contentPreview:
                    "Read about our groundbreaking approach to peace-building through youth engagement, featuring:",
                  highlights: [
                    "Cross-border youth peace committees",
                    "Cultural exchange initiatives",
                    "Joint community development projects",
                    "Sports for peace programs",
                    "Environmental conservation partnerships",
                  ],
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="bg-white rounded-lg shadow-lg overflow-hidden max-w-4xl mx-auto"
                >
                  <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="h-[400px] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-raleway text-[#DAA520]">
                          {item.category}
                        </span>
                        <span className="text-sm font-raleway text-gray-500">
                          {item.date}
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold mb-2 font-montserrat text-[#DAA520]">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 font-raleway text-sm mb-4">
                        {item.description}
                      </p>
                      <div className="mb-4">
                        <p className="text-gray-700 font-raleway text-sm mb-2">
                          {item.contentPreview}
                        </p>
                        <ul className="list-none space-y-2">
                          {item.highlights.map((highlight, i) => (
                            <li
                              key={i}
                              className="flex items-center text-gray-600 font-raleway text-sm"
                            >
                              <i className="fas fa-check-circle text-[#DAA520] mr-2"></i>
                              {highlight}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-raleway text-gray-500">
                          By {item.author}
                        </span>
                        <button className="text-[#DAA520] hover:text-[#B8860B] font-raleway text-sm">
                          Read More →
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === "gallery" && (
        <section id="gallery" className="py-16 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Our Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                {
                  image:
                    "https://ucarecdn.com/e5f997bc-498c-4ff4-b490-924609016d1c/-/format/auto/",
                  title: "Youth Sports Program",
                  description:
                    "Sports engagement program for youth development",
                },
                {
                  image:
                    "https://ucarecdn.com/a6c4eaa2-e40c-4e00-a255-7d2e56c0a34e/-/format/auto/",
                  title: "Environmental Certification",
                  description:
                    "Recognition ceremony for environmental initiatives",
                },
                {
                  image:
                    "https://ucarecdn.com/e22742d7-7897-4820-a23a-1ff56decf5a0/-/format/auto/",
                  title: "Community Health Program",
                  description: "Healthcare outreach and support services",
                },
                {
                  image:
                    "https://ucarecdn.com/57e8520d-6ec0-4466-9710-8b5273bc5ad0/-/format/auto/",
                  title: "Leadership Team",
                  description: "Key stakeholders and community leaders",
                },
                {
                  image:
                    "https://ucarecdn.com/c1cc0d97-020f-4254-9c7a-114ee403d98e/-/format/auto/",
                  title: "Women's Empowerment",
                  description:
                    "Women leaders championing community development",
                },
                {
                  image:
                    "https://ucarecdn.com/fc407b09-a040-4c43-aa8f-bc969b5a1165/-/format/auto/",
                  title: "Healthcare Support",
                  description: "Medical assistance and community care",
                },
                {
                  image:
                    "https://ucarecdn.com/084922c5-e306-4dfd-a233-ede58e106208/-/format/auto/",
                  title: "Medical Camp Registration",
                  description:
                    "Participants registering for medical camp services",
                },
                {
                  image:
                    "https://ucarecdn.com/f95e45cc-79d2-48aa-946c-49cbc6e65a92/-/format/auto/",
                  title: "Medical Camp Services",
                  description:
                    "Medical camp participants receiving healthcare services",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-lg shadow-lg"
                >
                  <div className="aspect-w-4 aspect-h-3">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                    <h3 className="text-white font-montserrat font-bold mb-1">
                      {item.title}
                    </h3>
                    <p className="text-white text-sm font-raleway">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {currentPage === "get-involved" && (
        <section className="py-16 bg-[#f8f9fa]">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center font-montserrat mb-12 text-[#DAA520]">
              Get Involved
            </h2>
            <div className="flex justify-center mb-8">
              <div className="inline-flex rounded-md shadow-sm" role="group">
                <button
                  onClick={() => setActiveSection("volunteer")}
                  className={`px-6 py-2 text-sm font-medium rounded-l-lg ${
                    activeSection === "volunteer"
                      ? "bg-[#DAA520] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Volunteer
                </button>
                <button
                  onClick={() => setActiveSection("donate")}
                  className={`px-6 py-2 text-sm font-medium ${
                    activeSection === "donate"
                      ? "bg-[#DAA520] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Donate
                </button>
                <button
                  onClick={() => setActiveSection("partner")}
                  className={`px-6 py-2 text-sm font-medium rounded-r-lg ${
                    activeSection === "partner"
                      ? "bg-[#DAA520] text-white"
                      : "bg-white text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  Partner With Us
                </button>
              </div>
            </div>

            {activeSection === "volunteer" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Volunteer Opportunities
                  </h3>
                  <p className="text-gray-600 font-raleway mb-6">
                    Join our dedicated team of volunteers and make a lasting
                    impact in the Moyale community. We offer various
                    opportunities for both short-term and long-term engagement.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Youth Mentorship
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Guide and support young people in their personal and
                          professional development
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Event Support
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Help organize and run our community events and
                          workshops
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-check-circle text-[#DAA520] mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Skills Training
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Share your expertise through our vocational training
                          programs
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Apply to Volunteer
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        className="w-full p-3 border rounded-lg font-raleway"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="w-full p-3 border rounded-lg font-raleway"
                      />
                    </div>
                    <div>
                      <select
                        name="area"
                        className="w-full p-3 border rounded-lg font-raleway"
                      >
                        <option value="">Select Area of Interest</option>
                        <option value="mentorship">Youth Mentorship</option>
                        <option value="events">Event Support</option>
                        <option value="training">Skills Training</option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="message"
                        placeholder="Tell us about yourself and why you'd like to volunteer"
                        rows="4"
                        className="w-full p-3 border rounded-lg font-raleway"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#DAA520] text-white py-3 rounded-lg font-raleway hover:bg-[#B8860B]"
                    >
                      Submit Application
                    </button>
                  </form>
                </div>
              </div>
            )}

            {activeSection === "donate" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Support Our Cause
                  </h3>
                  <p className="text-gray-600 font-raleway mb-6">
                    Your donation helps us continue our vital work in the Moyale
                    community. Every contribution, no matter the size, makes a
                    difference.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-hand-holding-heart text-[#DAA520] text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Youth Programs
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Fund educational and vocational training initiatives
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-hand-holding-medical text-[#DAA520] text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Healthcare Support
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Support our community health programs and medical
                          camps
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-hand-holding-seedling text-[#DAA520] text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Environmental Projects
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Contribute to our conservation and sustainability
                          initiatives
                        </p>
                      </div>
                    </li>
                  </ul>
                  <button
                    onClick={() => setShowDonateModal(true)}
                    className="w-full bg-[#DAA520] text-white py-3 rounded-lg font-raleway hover:bg-[#B8860B] mt-6"
                  >
                    Donate Now
                  </button>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Our Impact
                  </h3>
                  <div className="space-y-6">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#4B0082] mb-2">
                        500+
                      </div>
                      <p className="font-raleway">Youth Trained</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#4B0082] mb-2">
                        20+
                      </div>
                      <p className="font-raleway">Community Projects</p>
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-bold text-[#4B0082] mb-2">
                        5,000+
                      </div>
                      <p className="font-raleway">Lives Impacted</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeSection === "partner" && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Partnership Opportunities
                  </h3>
                  <p className="text-gray-600 font-raleway mb-6">
                    Join forces with Northern Youth Initiative to create lasting
                    positive change in Moyale. We welcome partnerships with
                    organizations that share our vision.
                  </p>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <i className="fas fa-handshake text-[#DAA520] text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Corporate Partnerships
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Engage in meaningful CSR initiatives
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-users text-[#DAA520] text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          NGO Collaboration
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Partner on joint programs and initiatives
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <i className="fas fa-building text-[#DAA520] text-xl mt-1 mr-3"></i>
                      <div>
                        <h4 className="font-montserrat font-bold mb-1">
                          Institutional Support
                        </h4>
                        <p className="text-gray-600 font-raleway">
                          Provide resources and technical expertise
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-bold font-montserrat mb-4 text-[#DAA520]">
                    Partner With Us
                  </h3>
                  <form className="space-y-4">
                    <div>
                      <input
                        type="text"
                        name="organization"
                        placeholder="Organization Name"
                        className="w-full p-3 border rounded-lg font-raleway"
                      />
                    </div>
                    <div>
                      <input
                        type="text"
                        name="contact_person"
                        placeholder="Contact Person"
                        className="w-full p-3 border rounded-lg font-raleway"
                      />
                    </div>
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        className="w-full p-3 border rounded-lg font-raleway"
                      />
                    </div>
                    <div>
                      <select
                        name="partnership_type"
                        className="w-full p-3 border rounded-lg font-raleway"
                      >
                        <option value="">Select Partnership Type</option>
                        <option value="corporate">Corporate Partnership</option>
                        <option value="ngo">NGO Collaboration</option>
                        <option value="institutional">
                          Institutional Support
                        </option>
                      </select>
                    </div>
                    <div>
                      <textarea
                        name="proposal"
                        placeholder="Brief description of proposed partnership"
                        rows="4"
                        className="w-full p-3 border rounded-lg font-raleway"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="w-full bg-[#DAA520] text-white py-3 rounded-lg font-raleway hover:bg-[#B8860B]"
                    >
                      Submit Proposal
                    </button>
                  </form>
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <footer className="bg-[#4B0082] text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="text-center md:text-left">
              <div className="flex items-center gap-3 mb-4">
                <img
                  src="https://ucarecdn.com/85273099-7f74-4af1-a308-602bf9629e97/-/format/auto/"
                  alt="Northern Youth Initiative logo showing two camels under an acacia tree"
                  className="h-12 w-12"
                />
                <div>
                  <h3 className="font-montserrat text-xl font-bold">
                    Northern Youth Initiative
                  </h3>
                  <p className="font-raleway text-[#DAA520]">
                    Forging Our Future
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <a
                  href="https://www.facebook.com/profile.php?id=61567142911370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DAA520]"
                >
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a
                  href="https://x.com/NorthernYouthKe?t=iw74xF2YZXwuHKsW5ujIjg&s=09"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DAA520]"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://www.instagram.com/northernyouthke?igsh=MTI2ZDU4bjFwZDVqaw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#DAA520]"
                >
                  <i className="fab fa-instagram text-2xl"></i>
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-montserrat font-bold mb-4 text-[#DAA520]">
                Navigation
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handlePageChange("home")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange("about")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange("team")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    Team
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange("programs")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    Programs
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold mb-4 text-[#DAA520]">
                Resources
              </h4>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handlePageChange("events")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    Events
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange("resources")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    Resources
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handlePageChange("contact")}
                    className="font-raleway hover:text-[#DAA520]"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-montserrat font-bold mb-4 text-[#DAA520]">
                Support Us
              </h4>
              <button
                onClick={() => setShowDonateModal(true)}
                className="bg-[#DAA520] text-white px-6 py-2 rounded-full font-raleway hover:bg-[#B8860B] transition-colors flex items-center gap-2 mb-4"
              >
                <i className="fas fa-heart"></i>
                Donate Now
              </button>
              <p className="font-raleway text-sm">
                Your support helps us create lasting impact in our community.
              </p>
            </div>
          </div>

          <hr className="border-gray-700 mb-8" />

          <div className="text-center">
            <p className="font-raleway text-sm">
              © 2025 Northern Youth Initiative. All rights reserved.
            </p>
          </div>
        </div>

        {showDonateModal && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white text-gray-800 p-8 rounded-lg max-w-md w-full mx-4">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold font-montserrat text-[#1a5f7a]">
                  Donate via M-Pesa
                </h3>
                <button
                  onClick={() => setShowDonateModal(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <i className="fas fa-times text-xl"></i>
                </button>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-raleway text-sm mb-2">Paybill Number:</p>
                  <p className="font-montserrat text-lg font-bold">919700</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-raleway text-sm mb-2">Account Number:</p>
                  <p className="font-montserrat text-lg font-bold">001832801</p>
                </div>
                <div className="mt-6">
                  <p className="font-raleway text-sm text-gray-600">
                    Steps to donate:
                  </p>
                  <ol className="list-decimal list-inside space-y-2 mt-2 font-raleway text-sm text-gray-600">
                    <li>Go to M-Pesa on your phone</li>
                    <li>Select Pay Bill</li>
                    <li>Enter Business Number: 919700</li>
                    <li>Enter Account Number: 001832801</li>
                    <li>Enter Amount</li>
                    <li>Enter your M-Pesa PIN</li>
                    <li>Confirm the transaction</li>
                  </ol>
                </div>
                <p className="text-sm text-gray-500 italic mt-2">
                  For any inquiries about charges, dial *234#
                </p>
                <button
                  onClick={() => setShowDonateModal(false)}
                  className="w-full bg-[#1a5f7a] text-white py-3 rounded-lg font-raleway hover:bg-[#134960] mt-6"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </footer>
    </div>
  );
}

export default MainComponent;