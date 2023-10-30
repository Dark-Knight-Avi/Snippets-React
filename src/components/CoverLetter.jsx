import React, { useEffect, useState } from "react";

const CoverLetter = () => {
  const [copied, setCopied] = useState(false);
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const letterText = `Respected Hiring Team,

I am writing to express my enthusiastic interest in the ${role} position at ${company}, as advertised on LinkedIn. With a strong foundation in software development and a genuine passion for innovation, I am confident that I can make a valuable contribution to your team.

As a highly motivated and efficient full stack developer, I have accumulated over two years of hands-on experience across application layers, presentation layers, and databases. I pride myself on staying abreast of the latest industry trends and continuously enhancing my skills. My qualifications include certifications in both Frontend and Backend technologies, with demonstrated proficiency in JavaScript, TypeScript, React JS, Next JS, Web Performance optimization, and database management systems such as MySQL and Redis.

I firmly believe that my proficiency in these areas will not only bolster the technical capabilities of your team but also drive the development of cutting-edge solutions that align with your company's goals.

My commitment to excellence extends beyond technical expertise. I bring strong critical thinking, communication, and interpersonal skills to the table. This combination of skills enables me to collaborate effectively, adapt to new challenges, and contribute to the success of complex projects.

I am genuinely excited about the prospect of joining ${company} and leveraging my skills to help drive its continued growth and success. Enclosed, please find my resume, which provides a more comprehensive overview of my qualifications.

Thank you for considering my application. I look forward to the possibility of discussing how my background and expertise align with your needs. Please do not hesitate to contact me at aritra.karmakar9749@gmail.com or +919749185898 to schedule an interview at your earliest convenience.

Sincerely,
Aritra Karmakar
  `;
  const [updatedLetterText, setUpdatedLetterText] = useState(letterText)

useEffect(() => {
  setUpdatedLetterText(letterText)
  setCopied(false)
}, [company, role])

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(letterText);
    setCopied(true);
  };
  return (
    <div className="flex justify-center flex-col items-center p-10">
      <h1 className="text-xl font-bold text-center my-2">Cover Letter</h1>
      <div className="flex justify-between flex-1 items-center">
        <input
          type="text"
          placeholder="Company name..."
          className="outline-none px-2 py-1 w-1/2 border border-black mx-5"
          onChange={(e) => setCompany(e.target.value)}
        />
        <input
          type="text"
          placeholder="Role..."
          className="outline-none px-2 py-1 w-1/2 border border-black mx-5"
          onChange={(e) => setRole(e.target.value)}
        />
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

export default CoverLetter;
