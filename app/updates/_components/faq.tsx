"use client";
import React, { useState } from "react";

const Faq = () => {
  const [expandedIndexes, setExpandedIndexes] = useState<number[]>([]);

  const toggleQuestion = (index: number) => {
    if (expandedIndexes.includes(index)) {
      setExpandedIndexes(expandedIndexes.filter((i) => i !== index));
    } else {
      setExpandedIndexes([...expandedIndexes, index]);
    }
  };

  const questions = [
    {
      question: "What is Blue Spark Diamond?",
      answer:
        "Blue Spark Diamond Company, Nepal's exclusive natural diamond importer, sources rough diamonds from Africa, including Botswana, South Africa, Sierra Leone, Cameroon, Namibia, and Johannesburg. Our vision is to become a leading global integrated group, driven by boundless ambition.",
    },
    {
      question: "Is Blue Spark Diamond a certified company?",
      answer:
        "Yes, Blue Spark Diamond is a certified company. All diamonds sold by Blue Spark, both through direct and in-auction sales, are GIA Certified and undergo the Kimberly Process, ensuring they are ethically sourced and conflict-free. This guarantees that the diamonds have been evaluated and certified by the Gemological Institute of America and adhere to ethical standards in the diamond industry.",
    },
    {
      question: "How good quality diamonds do we export?",
      answer:
        "We export high-quality diamonds that have undergone GIA Certification and Kimberly Process, ensuring they meet stringent industry standards for both quality and ethical sourcing.",
    },
    {
      question: "Is online payment possible?",
      answer:
        "Yes, we do offer online payment options. In addition to accepting direct cash, we also take payments via MasterCard, Debit, and Visa cards. For further details, feel free to reach out to us on WhatsApp.",
    },
    {
      question: "What are the working hours?",
      answer:
        "Our working hours are from 10:00 am to 4:00 pm, except on Saturdays and Nepalese public holidays. Despite this, we maintain a global network, ensuring seamless communication with customers worldwide. We're committed to providing uncompromised service and eagerly await your calls, emails, and faxes.",
    },
    {
      question: "What is the specialty of Blue Spark Diamond Company?",
      answer:
        "Blue Spark Diamond Company is Nepal's exclusive natural diamond importer, focusing on sourcing high-quality diamonds from key African countries.",
    },
    {
      question: "What is the vision of Blue Spark Diamond Company?",
      answer:
        "The team at Blue Spark aims to transform the company into one of the world's leading integrated groups with unbridled ambition.",
    },
    {
      question:
        "What principles guide Blue Spark Diamond International Company?",
      answer:
        "Blue Spark operates under two major principles - Passion for diamonds and earning trust across the diamond trade value chain.",
    },
    {
      question: "How long has Blue Spark Diamond Company been established?",
      answer:
        "Blue Spark Diamond Company has been established over several years, with the founder's exceptional expertise in jewelry and a strong foothold in the luxury business.",
    },
    {
      question:
        "How does Blue Spark Diamond Company ensure quality in its diamonds?",
      answer:
        "Blue Spark insists on impeccable quality, backed by an experienced team with an exceptional eye for selecting high-quality diamonds.",
    },
    {
      question: "What is the core value of Blue Spark Diamond Company's team?",
      answer:
        "The Blue Spark team not only values diamonds but also places high importance on respecting their customers and maintaining strong business relationships.",
    },
    {
      question:
        "How does Blue Spark Diamond Company maintain effective communication with its customers?",
      answer:
        "Blue Spark boasts a very global network and ensures seamless communication with customers worldwide.",
    },
    {
      question:
        "What sacrifices and efforts have gone into establishing Blue Spark Diamond Company?",
      answer:
        "The team at Blue Spark has spent over 5 years and made endless sacrifices towards turning their dream into reality, overcoming major challenges in establishing the company in Nepal.",
    },
    {
      question:
        "What distinguishes Blue Spark Diamond Company's work structure?",
      answer:
        "The work structure at Blue Spark is as clear as an innocent diamond, marked by complete sincerity and a step-by-step approach to providing extraordinary service to our customers.",
    },
  ];

  return (
    <section className="flex bg-white lg:min-h-screen">
      <div className="p-4 flex flex-col items-center  text-gray-700 py-14 w-full @container">
        <div className="text-center mt-5">
          <h1 className="mb-4 text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl text-gray-500 uppercase">
            We Answer Before You Ask
          </p>
        </div>
        <div className="flex flex-col item-center mt-5">
          {questions.map((q, index) => (
            <div
              key={index}
              className="flex flex-col justify-between w-full @[400px]:w-[26em] @[500px]:w-[30em] lg:w-[50em] px-6 py-4 mb-3 rounded shadow"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span
                  className={`font-bold font-sans ${expandedIndexes.includes(index) ? "text-black" : ""
                    }`}
                >
                  {q.question}
                </span>
                <div className="p-2 bg-gray-600 rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="text-white"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d={
                        expandedIndexes.includes(index)
                          ? "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                          : "M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2Z"
                      }
                    />
                  </svg>
                </div>
              </div>
              {expandedIndexes.includes(index) && (
                <div className="mt-1 text-sm text-gray-500">{q.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
