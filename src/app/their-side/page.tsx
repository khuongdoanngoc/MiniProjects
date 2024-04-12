"use client";

import EpisodeItem from "./components/EpisodeItem";
import TheirSideLayout from "./components/layout";
import PauseIcon from "./assets/pause.png";
import PlayIcon from "./assets/play-button.png";
import Image from "next/image";
import { useState, ChangeEvent, useRef, useEffect } from "react";
import SpeedIcon from "./components/SpeedIcon";
import VolumeIcon from "./components/VolumeIcon";

interface EpisodeItem {
    date: string;
    name: string;
    description: string;
}

const episodeData: EpisodeItem[] = [
    {
        date: "January 27, 2022",
        name: "Skeletor",
        description:
            "You know him as an evil supervillain, but his closest friends call him Jeff, and he's just doing his best to find his way in a world that doesn't know what to do with a talking skeleton.",
    },
    {
        date: "February 3, 2022",
        name: "Hank Scorpio",
        description:
            "What looks to outsiders like a malicious plan to conquer the east coast, was actually a story of liberation and freedom if you get it straight from the source.",
    },
    {
        date: "February 10, 2022",
        name: "The Wet Bandits",
        description:
            "The Christmas of 1989 wasn't the first time Harry and Marv crossed paths with the McCallisters. The real story starts in 1973, when Peter tripped Marv in the highschool locker room.",
    },
    {
        date: "January 27, 2022",
        name: "Skeletor",
        description:
            "You know him as an evil supervillain, but his closest friends call him Jeff, and he's just doing his best to find his way in a world that doesn't know what to do with a talking skeleton.",
    },
    {
        date: "February 17, 2022",
        name: "Shooter McGavin",
        description:
            "When golf-obsessed terrorists kidnapped his family and held them hostage in exchange for a Golden Jacket, Shooter had no choice but to win the tour at any cost.",
    },
    {
        date: "February 24, 2022",
        name: "Bill Lumbergh",
        description:
            "He's going to need you to go ahead and come in on Saturday, but there's a lot more to the story than you think.",
    },
];

function TheirSide() {
    const [isPlay, setIsPlay] = useState<boolean>(false);
    const [duration, setDuration] = useState<number>(0);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const audioRef = useRef<HTMLAudioElement>(null);
    const [speed, setSpeed] = useState<number>(1);
    const [isVolume, setIsVolume] = useState<boolean>(true);

    const [currentPodcast, setCurrentPodcast] = useState<EpisodeItem>({
        date: "January 27, 2022",
        name: "Skeletor",
        description:
            "You know him as an evil supervillain, but his closest friends call him Jeff, and he's just doing his best to find his way in a world that doesn't know what to do with a talking skeleton.",
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurrentTime(Number(event.target.value));
        if (audioRef.current) {
            audioRef.current.currentTime = Number(event.target.value);
        }
    };

    useEffect(() => {
        if (audioRef.current) {
            setDuration(Number(audioRef.current.duration.toFixed(0)));
        }
    }, []);

    useEffect(() => {
        if (isPlay) {
            if (audioRef.current) {
                audioRef.current.play();
            }
        } else {
            if (audioRef.current) {
                audioRef.current.pause();
            }
        }
    }, [isPlay]);

    const minute = (time: number) => {
        return Number((time % 60).toFixed(0));
    };

    const hour = (time: number) => {
        return Number(Math.floor(time / 60));
    };

    const handleNext10Seconds = () => {
        if (audioRef.current) {
            audioRef.current.currentTime += 10;
        }
    };

    const handleBack10Seconds = () => {
        if (audioRef.current) {
            audioRef.current.currentTime -= 10;
        }
    };

    const handleLoadedData = () => {
        setDuration(Number(audioRef.current?.duration));
        if (isPlay) audioRef.current?.play();
    };

    const handleTimeUpdate = (e: any) => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime);
        }
    };

    const handleChangeSpeed = () => {
        if (audioRef.current) {
            if (speed === 1) {
                audioRef.current.playbackRate = 1.5;
                setSpeed(1.5);
            } else if (speed === 1.5) {
                audioRef.current.playbackRate = 2;
                setSpeed(2);
            } else {
                audioRef.current.playbackRate = 1;
                setSpeed(1);
            }
        }
    };

    const handleSwitchVolume = () => {
        if (audioRef.current) {
            setIsVolume(!isVolume);
        }
    };
    useEffect(() => {
        if (audioRef.current) {
            if (isVolume) {
                audioRef.current.volume = 1;
            } else {
                audioRef.current.volume = 0;
            }
        }
    }, [isVolume]);

    const handlePodcastChange = (podcast: any) => {
        setCurrentPodcast(podcast);
        if (audioRef.current) {
            audioRef.current.currentTime = 0;
            audioRef.current.play();
            setIsPlay(true);
        }
    };

    return (
        <TheirSideLayout>
            <main className="flex lg:overflow-y-auto bg-white flex-col lg:h-screen py-12 text-left lg:relative lg:w-[65%] md:w-full">
                <div className="px-[8rem]">
                    <h1 className="text-2xl font-medium text-slate-900 leading-7">
                        Episodes
                    </h1>
                </div>
                <div className="mt-12 flex flex-col">
                    {episodeData.map((episode, index) => (
                        <EpisodeItem
                            date={episode.date}
                            name={episode.name}
                            description={episode.description}
                            index={index + 1}
                            key={index}
                            onPodcastClick={handlePodcastChange}
                        />
                    ))}
                    <div className="fixed bottom-0 lg:left-112 lg:w-[65%] min-h-[104px] backdrop-blur shadow-sm shadow-slate-700 h-6">
                        <audio
                            ref={audioRef}
                            onLoadedData={handleLoadedData}
                            onTimeUpdate={handleTimeUpdate}
                            src="https://their-side-feed.vercel.app/episode-001.mp3"></audio>
                        <div className="flex items-center h-full gap-6 px-4 py-4">
                            <button
                                className=""
                                onClick={() => setIsPlay(!isPlay)}>
                                {isPlay ? (
                                    <Image
                                        className="w-12 h-12"
                                        src={PauseIcon}
                                        alt="pause-button"
                                    />
                                ) : (
                                    <Image
                                        className="w-12 h-12"
                                        src={PlayIcon}
                                        alt="play-button"
                                    />
                                )}
                            </button>
                            <div className="flex flex-col gap-2 w-[90%]">
                                <h4 className="text-medium font-medium leading-6">
                                    {currentPodcast.name}
                                </h4>
                                <div className="flex justify-between items-center gap-6">
                                    <div className="flex gap-4">
                                        <button onClick={handleBack10Seconds}>
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                strokeWidth="1.5"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
                                                <path d="M8 5L5 8M5 8L8 11M5 8H13.5C16.5376 8 19 10.4624 19 13.5C19 15.4826 18.148 17.2202 17 18.188"></path>
                                                <path d="M5 15V19"></path>
                                                <path d="M8 18V16C8 15.4477 8.44772 15 9 15H10C10.5523 15 11 15.4477 11 16V18C11 18.5523 10.5523 19 10 19H9C8.44772 19 8 18.5523 8 18Z"></path>
                                            </svg>
                                        </button>
                                        <button onClick={handleNext10Seconds}>
                                            <svg
                                                aria-hidden="true"
                                                viewBox="0 0 24 24"
                                                fill="none"
                                                className="h-6 w-6 stroke-slate-500 group-hover:stroke-slate-700">
                                                <path
                                                    d="M16 5L19 8M19 8L16 11M19 8H10.5C7.46243 8 5 10.4624 5 13.5C5 15.4826 5.85204 17.2202 7 18.188"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                                <path
                                                    d="M13 15V19"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                                <path
                                                    d="M16 18V16C16 15.4477 16.4477 15 17 15H18C18.5523 15 19 15.4477 19 16V18C19 18.5523 18.5523 19 18 19H17C16.4477 19 16 18.5523 16 18Z"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"></path>
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="flex gap-4 w-full">
                                        <input
                                            className="w-full slider-thumb:bg-[black]"
                                            type="range"
                                            min={0}
                                            max={duration}
                                            value={currentTime}
                                            onChange={handleChange}
                                        />
                                        <div className="text-sm font-mono leading-6 text-slate-500 gap-2 flex">
                                            <span>
                                                {hour(currentTime) < 10
                                                    ? `0${hour(currentTime)}`
                                                    : hour(currentTime)}
                                                :
                                                {minute(currentTime) < 10
                                                    ? `0${minute(currentTime)}`
                                                    : minute(currentTime)}
                                            </span>
                                            <span className="text-slate-300">
                                                /
                                            </span>
                                            <span>
                                                {hour(duration) < 10
                                                    ? `0${hour(duration)}`
                                                    : hour(duration)}
                                                :
                                                {minute(duration) < 10
                                                    ? `0${minute(duration)}`
                                                    : minute(currentTime)}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <button
                                            className="text-slate-500 rounded-md h-6 w-6 flex items-center justify-center hover:text-slate-700 focus:ring-2 focus:ring-slate-400"
                                            onClick={handleChangeSpeed}>
                                            <SpeedIcon speed={speed} />
                                        </button>
                                        <button
                                            className="text-slate-500 rounded-md h-6 w-6 flex items-center justify-center hover:text-slate-700 focus:ring-2 focus:ring-slate-400"
                                            onClick={handleSwitchVolume}>
                                            <VolumeIcon isVolume={isVolume} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </TheirSideLayout>
    );
}

export default TheirSide;
