'use client'
import React, { useState } from "react";

interface textTruncateProps {
    text: string;
    maxLength: number;
}

function TextTruncate({ text, maxLength }: textTruncateProps) {
    const [showMore, setShowMore] = useState<boolean>(false);
    const truncatedText = showMore ? text : `${text.slice(0, maxLength)}...`;
    return (
        <div className="mt-2 flex text-base leading-7 text-slate-700 flex-col">
            {truncatedText}
            {text.length > maxLength && (
                <button className="text-pink-500 font-medium mt-2 leading-6 hover:text-pink-800 lg:inline-block text-left" onClick={() => setShowMore(!showMore)}>
                    {showMore ? "Show less" : "Show more"}
                </button>
            )}
        </div>
    );
}
export default TextTruncate;
