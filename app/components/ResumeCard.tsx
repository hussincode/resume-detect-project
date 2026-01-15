import { link } from "fs";
import React from "react";
import type { JSX } from "react";
import ScoreCircle from "./ScoreCircle";


const ResumeCard: ({ resume }: { resume: Resume }) => JSX.Element = ({ resume: { companyName, jobTitle, feedback, imagePath } } : { resume: Resume }) => {
    return (
        <div className="resume-card animate-in fade-in duration-1000" >
            <div className="flex flex-col gap-2">
                <h2 className="!text-black font-bold break-words">
                    {companyName}
                    </h2>
                <h3 className="text-lg break-word text-gray-500">
                    {jobTitle}
                    </h3>
         </div>
         <div className="flex-shrink-0">
                <ScoreCircle score={feedback.overallScore} />
            </div>
            <div className="gradiant-border animate-in fade-in duration-1000">
                <div className="w-full h-full">
                    <img
                        src={imagePath}
                        alt={`${companyName} - ${jobTitle}`}
                        className="w-full h-[350px] max-sm:h-[200px] object-cover rounded-md"
                    />
                </div>
            </div>
        </div>
    );
}
export default ResumeCard;
