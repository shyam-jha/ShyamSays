import React from "react";
import { FlipWords } from "./ui/flip-words";
import { TypewriterEffectSmooth } from "./ui/typewriter-effect";

export function FlipWordsDemo() {
    const words = [
        {
            text: "Connect",
        },
        {
            text: "with",
        },
        {
            text: "Me !!!",
            className: "text-blue-500 dark:text-blue-500",
        },
        {
            text: "Share",
        },
        {
            text: "your",
        },
        {
            text: "Thoughts.....",
            className: "text-blue-500 dark:text-blue-500",
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center">
            <TypewriterEffectSmooth words={words} />
        </div>
    );
}
