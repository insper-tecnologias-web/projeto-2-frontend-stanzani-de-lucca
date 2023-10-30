const Track = ({ track }: { track: { title: string; artist: string } }) => {
  return (
    <div className="flex cursor-pointer flex-row items-center gap-2.5 rounded-md bg-neutral-900 px-2 py-2.5 transition-colors hover:bg-neutral-800 md:gap-4">
      <div className="h-11 w-11 min-w-[2.75rem] rounded-md bg-white"></div>
      <div className="flex w-full flex-col overflow-hidden pr-5 sm:pr-12 md:flex-row md:items-center">
        <p className="truncate whitespace-nowrap font-medium md:basis-2/3 md:pr-5">
          {track.title}
        </p>
        <p className="truncate text-sm font-light tracking-tight text-neutral-300 md:basis-1/3">
          {track.artist}
        </p>
      </div>
    </div>
  );
};

export default Track;
