import Image from "next/image";

const categories = [
  {
    category: "Reaction",
    score: 80,
    icon: "/images/icon-reaction.svg",
    bgColor: "bg-light-red/15",
    textColor: "text-light-red",
  },
  {
    category: "Memory",
    score: 92,
    icon: "/images/icon-memory.svg",
    bgColor: "bg-orangey-yellow/15",
    textColor: "text-orangey-yellow",
  },
  {
    category: "Verbal",
    score: 61,
    icon: "/images/icon-verbal.svg",
    bgColor: "bg-green-teal/15",
    textColor: "text-green-teal",
  },
  {
    category: "Visual",
    score: 72,
    icon: "/images/icon-visual.svg",
    bgColor: "bg-cobalt-blue/15",
    textColor: "text-cobalt-blue",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center md:pr-[15rem] items-center md:bg-white">
      <div className="relative flex flex-col md:flex-row w-full mb-[26rem] md:mb-0 md:w-[279px] h-[353px] md:h-[419px] rounded-b-3xl md:rounded-3xl bg-gradient-blue">
        {/* HEADER SECTION AKA BLUE CARD SECTION */}
        <div className="relative flex flex-col w-full justify-center items-center mt-[23px] md:mt-[34px] md:pb-[2.5rem]">
          <h1 className="font-bold text-lg text-light-lavender">Your Result</h1>
          <div className="relative mt-[27px] w-[135px] h-[135px] rounded-full bg-gradient-circle">
            <h2 className="relative flex flex-col items-center ml-[38px] md:ml-[40px] pt-7 font-extrabold text-6xl w-[56px] h-[31px] text-white">
              76
            </h2>
            <p className="relative flex flex-col items-center justify-center w-full pt-16 py-3 mr-3 md:mr-4 text-light-lavender font-bold">
              of 100
            </p>
          </div>
          <div className="relative flex flex-col w-full justify-center items-center pt-2 mr-2 md:pt-5 md:mr-2">
            <span className="text-white font-extrabold text-2xl">Great</span>
            <p className="relative flex flex-col w-[300px] md:w-[265px] text-center justify-center items-center pt-2 md:pt-4 px-5 md:ml-[.5rem] font-bold text-light-lavender text-[16px]">
              You scored higher than 65% of the people who have taken these
              tests.
            </p>
          </div>
        </div>

        {/* HERO SECTION AKA WHITE CARD SECTION */}
        <div className="relative flex flex-col px-8 py-12 md:py-8 md:mb-0 md:w-[300px] md:h-[419px] md:rounded-3xl md:shadow-lg bg-white z-10">
          <h1 className="relative flex flex-col px-1 md:px-2 md:py-2 md:justify-start text-black font-extrabold text-lg">
            Summary
          </h1>

          <div className="flex flex-col gap-5 px-1 md:px-2 pb-10">
            {categories.map((item, index) => (
              <div
                key={index}
                className={`flex items-center justify-between mt-6 md:mt-0 rounded-lg shadow-md py-6 w-full md:w-[228px] h-[48px] hover:scale-105 transition-transform duration-300 ease-in-out ${item.bgColor}`}
              >
                {/* ICON */}
                <Image
                  src={item.icon}
                  alt={`${item.category} icon`}
                  height={20}
                  width={20}
                  className="ml-4"
                />

                {/* CATEGORY */}
                <span
                  className={`font-bold pr-[5.5rem] md:pr-[3.5rem] gap-2 ${item.textColor}`}
                >
                  {item.category}
                </span>

                {/* SCORE */}
                <span className="font-bold text-black mr-[16px]">
                  {item.score}
                  <span className="text-gray-500 ml-2">/100</span>
                </span>
              </div>
            ))}
            <button className="relative flex w-ful rounded-full h-[48px] bg-dark-gray-blue hover:bg-gradient-blue px-[7.25rem] py-[.75rem] md:px-[4.5rem] md:py-[.75rem]">
              <span className="text-white font-extrabold text-normal text-center items-center">
                Continue
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
