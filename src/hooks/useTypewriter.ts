"use client";

import { useEffect, useState } from "react";

interface TypewriterProps {
    words: string[];
    typingSpeed?: number;
    deletingSpeed?: number;
    pauseTime?: number;
    showCursor?: boolean;
}

export function useTypewriter({
    words,
    typingSpeed = 150,
    deletingSpeed = 100,
    pauseTime = 2000,
}: TypewriterProps) {
    const [text, setText] = useState("");
    const [wordIndex, setWordIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const currentWord = words[wordIndex % words.length];

        if (isWaiting) {
            timeout = setTimeout(() => {
                setIsWaiting(false);
                setIsDeleting(true);
            }, pauseTime);
        } else if (isDeleting) {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length - 1));
                if (text.length <= 1) {
                    setIsDeleting(false);
                    setWordIndex((prev) => prev + 1);
                }
            }, deletingSpeed);
        } else {
            timeout = setTimeout(() => {
                setText(currentWord.substring(0, text.length + 1));
                if (text.length >= currentWord.length) {
                    setIsWaiting(true);
                }
            }, typingSpeed);
        }

        return () => clearTimeout(timeout);
    }, [text, isDeleting, isWaiting, wordIndex, words, typingSpeed, deletingSpeed, pauseTime]);

    return text;
}
