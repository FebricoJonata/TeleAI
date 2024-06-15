import React, { useEffect, useState, useRef } from 'react';
import regeneratorRuntime from "regenerator-runtime";
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import CallRoundedIcon from '@mui/icons-material/CallRounded';

export default function BasePhonePopUp({ isVisible, handleSubmit, chatList }) {
    const [isResponding, setIsResponding] = useState(false);
    const [latestResponse, setLatestResponse] = useState('');
    const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();
    const silenceTimeoutRef = useRef(null);

    useEffect(() => {
        if (chatList.length > 0) {
            const latestChat = chatList[chatList.length - 1];
            console.log('Latest chat:', latestChat);
            if (latestChat.senderId === -1) {
                setLatestResponse(latestChat.message);
                setIsResponding(true);
            }
        }
    }, [chatList]);

    useEffect(() => {
        if (isResponding) {
            console.log('Starting TTS for:', latestResponse);
            const utterance = new SpeechSynthesisUtterance(latestResponse);
            utterance.onend = () => {
                console.log('TTS finished');
                setIsResponding(false);
                SpeechRecognition.startListening();
                console.log('STT started');
                resetSilenceTimeout();
            };
            speechSynthesis.speak(utterance);
        }
    }, [isResponding, latestResponse]);

    useEffect(() => {
        if (!isResponding && transcript) {
            handleSubmit(transcript);
            resetTranscript();
            SpeechRecognition.stopListening();
            console.log('STT stopped');
        }
    }, [transcript, isResponding, resetTranscript]);

    useEffect(() => {
        if (listening) {
            resetSilenceTimeout();
        } else {
            clearSilenceTimeout();
        }
    }, [listening]);

    const resetSilenceTimeout = () => {
        clearSilenceTimeout();
        silenceTimeoutRef.current = setTimeout(() => {
            SpeechRecognition.stopListening();
            console.log('Silence detected, STT stopped');
        }, 5000);
    };

    const clearSilenceTimeout = () => {
        if (silenceTimeoutRef.current) {
            clearTimeout(silenceTimeoutRef.current);
            silenceTimeoutRef.current = null;
        }
    };

    if (!browserSupportsSpeechRecognition) {
        return <div>Browser doesn't support speech recognition.</div>;
    }

    if (!isVisible) {
        return null;
    }

    return (
        <div className='w-full h-screen flex items-center justify-center absolute'>
            <div className='bg-brand-semi-inv p-[16px] rounded-[10px] w-[200px] h-[200px] text-white flex flex-col justify-center items-center gap-[16px]'>
                <CallRoundedIcon className='min-w-[100px] min-h-[100px]' />
                <span className='font-semibold text-[18px]'>
                    {isResponding ? "TeleAI is talking..." : "Start talking"}
                </span>
            </div>
        </div>
    );
}
