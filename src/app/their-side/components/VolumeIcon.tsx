interface VolumeIconProps {
    isVolume: boolean;
}

function VolumeIcon({ isVolume }: VolumeIconProps) {
    const open = (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700">
            <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
            <path
                d="M17 7C17 7 19 9 19 12C19 15 17 17 17 17"
                fill="none"></path>
            <path
                d="M15.5 10.5C15.5 10.5 16 10.9998 16 11.9999C16 13 15.5 13.5 15.5 13.5"
                fill="none"></path>
        </svg>
    );

    const close = (
        <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 fill-slate-500 stroke-slate-500 group-hover:fill-slate-700 group-hover:stroke-slate-700">
            <path d="M12 6L8 10H6C5.44772 10 5 10.4477 5 11V13C5 13.5523 5.44772 14 6 14H8L12 18V6Z"></path>
            <path d="M16 10L19 13" fill="none"></path>
            <path d="M19 10L16 13" fill="none"></path>
        </svg>
    );

    return isVolume ? open : close;
}

export default VolumeIcon;
