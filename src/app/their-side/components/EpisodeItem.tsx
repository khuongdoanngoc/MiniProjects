interface episodeProps {
    date: string;
    name: string;
    description: string;
    index: number;
    onPodcastClick: Function;
}

function EpisodeItem({
    date,
    name,
    description,
    index,
    onPodcastClick,
}: episodeProps) {
    const handleListenPodcast = () => {
        onPodcastClick({
            date,
            name,
            description,
            index,
        });
    };

    return (
        <div className="text-left border lg:px-[8rem] px-6 py-12">
            <time className="font-mono text-sm leading-7 text-slate-500">
                {date}
            </time>
            <h2 className="mt-2 text-lg font-medium text-slate-900">
                {index}: {name}
            </h2>
            <p className="text-slate-700 leading-7 text-base mt-1 ">
                {description}
            </p>
            <div className="mt-4 flex gap-4 font-medium">
                <button
                    onClick={handleListenPodcast}
                    className="flex gap-2 text-pink-500 hover:text-pink-700 items-center">
                    <svg
                        aria-hidden="true"
                        viewBox="0 0 10 10"
                        className="h-2.5 w-2.5 fill-current">
                        <path d="M8.25 4.567a.5.5 0 0 1 0 .866l-7.5 4.33A.5.5 0 0 1 0 9.33V.67A.5.5 0 0 1 .75.237l7.5 4.33Z"></path>
                    </svg>
                    <span className="text-sm font-medium leading-6 ">
                        Listen
                    </span>
                </button>
                <span className="text-sm text-slate-400 font-medium">/</span>
                <a
                    href="#"
                    className="flex gap-2 items-center text-pink-500 hover:text-pink-700">
                    Show notes
                </a>
            </div>
        </div>
    );
}

export default EpisodeItem;
