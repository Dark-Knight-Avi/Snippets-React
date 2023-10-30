import React, { useEffect, useState } from "react";

const Interests = () => {
  const [copied, setCopied] = useState(false);
  const [company, setCompany] = useState("");
  const letterText = `What particularly piques my interest in working for ${company} is the company's unwavering commitment to innovation and the opportunity to contribute to its continued growth. I am genuinely excited about the prospect of joining a company that is at the forefront of technological advancement in the software development industry.

First and foremost, I am drawn to ${company} because of its reputation for embracing and driving the latest technologies. As someone who is passionate about staying current with industry trends and continuously improving my skills, I see ${company} as the perfect environment for me to thrive. The chance to work with cutting-edge technologies like React JS, Next JS, and Web Performance optimization aligns perfectly with my career aspirations.

Moreover, ${company} has a culture of excellence and a strong track record of delivering high-quality solutions. I am confident that my skills in critical thinking and problem-solving, coupled with my efficient full stack development experience, will enable me to contribute to the company's success and help elevate its projects to new heights.

I am excited about the opportunity to be part of a dynamic and forward-thinking team, and I believe my dedication, technical expertise, and interpersonal skills will make a significant impact. Joining ${company} would not only be a career move but a chance to be a part of a thriving ecosystem that values innovation and fosters professional growth.
  `;
  const [updatedLetterText, setUpdatedLetterText] = useState(letterText)

useEffect(() => {
  setUpdatedLetterText(letterText)
}, [company])

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
  };
  return (
    <div className="flex justify-center flex-col items-center py-2 px-10 w-full">
      <h1 className="text-xl font-bold text-center">What interests you about working for this company?</h1>
      <div className="flex justify-center flex-1 items-center my-2 w-full">
        <input
          type="text"
          placeholder="Company name..."
          className="outline-none px-2 py-1 w-1/2 border border-black mx-5"
          onChange={(e) => setCompany(e.target.value)}
        />
        {/* <input
          type="text"
          placeholder="Role..."
          className="outline-none px-2 py-1 w-1/2 border border-black mx-5"
          onChange={(e) => setRole(e.target.value)}
        /> */}
      </div>
      <div className="whitespace-pre-wrap text-justify my-5 border-black border-2 p-10">
        {updatedLetterText}
      </div>
      {copied ? (
        <span className="px-3 py-2 border border-black">
          Copied to clipboard!
        </span>
      ) : (
        <button
          className="px-3 py-2 border border-black"
          onClick={handleCopyToClipboard}
        >
          Copy
        </button>
      )}
    </div>
  );
};

export default Interests;
