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
        "Blue Spark Diamond is a GIA certified company which imports raw diamonds...",
    },
    {
      question: "Is Blue Spark Diamond a certified company?",
      answer:
        "Blue Spark Diamond is a GIA certified company which import the raw diamonds...",
    },
    {
      question: "How good quality diamonds do we export?",
      answer: "Answer for the third question...",
    },
    {
      question: "Is online payment possible?",
      answer: "Answer for the fourth question...",
    },
  ];

  return (
    <section className="flex items-center bg-white lg:h-screen">
      <div className="p-4 mx-auto max-w-7xl">
        <div className="text-center mb-14">
          <h1 className="mb-4 text-3xl font-bold">
            Frequently Asked Questions
          </h1>
          <p className="max-w-xl mx-auto text-gray-500">You Ask - We Answer</p>
        </div>
        <div className="max-w-xl">
          {questions.map((q, index) => (
            <div
              key={index}
              className="flex flex-col justify-between mr-20 w-full px-6 py-4 mb-3 bg-white rounded shadow"
            >
              <div
                className="flex items-center justify-between cursor-pointer"
                onClick={() => toggleQuestion(index)}
              >
                <span
                  className={`font-bold ${expandedIndexes.includes(index)
                      ? "text-blue-500"
                      : ""
                    }`}
                >
                  {q.question}
                </span>
                <div className="p-2 bg-blue-500 rounded-full">
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
                <div className="mt-1 text-sm text-gray-500">
                  {q.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
