const Track = ({
  track,
  songId,
}: {
  track: { name: string; artists: any; album: any };
  songId: number;
}) => {
  const artworkSrc =
    track.album.images.length > 1
      ? track.album.images[track.album.images.length - 2]
      : track.album.images[track.album.images.length - 1];

  return (
    <div className="flex cursor-pointer flex-row items-center gap-2.5 rounded-md bg-neutral-900 px-3.5 py-2.5 transition-colors hover:bg-[#1B1B1B] md:gap-4">
      {/* <div className="h-11 w-11 min-w-[2.75rem] rounded-md bg-white"></div> */}
      <p className="text-sm text-neutral-300">{songId.toString()}</p>
      <img
        className="2-9 h-9 min-w-[2.25rem] rounded-sm opacity-80"
        src={artworkSrc ? artworkSrc.url : ""}
        alt={`${track.album.name} artwork.`}
      />
      <div className="flex w-full flex-col overflow-hidden pr-5 sm:pr-12 md:flex-row md:items-center">
        <p className="truncate whitespace-nowrap font-medium md:basis-2/3 md:pr-5">
          {track.name}
        </p>
        <p className="truncate text-sm font-light tracking-tight text-neutral-300 md:basis-1/3">
          {track.artists[0].name}
        </p>
      </div>
    </div>
  );
};

export default Track;
