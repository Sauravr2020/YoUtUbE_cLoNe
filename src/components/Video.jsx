import React from "react";
import { Link } from "react-router-dom";
import Time from "../loader/Time";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { abbreviateNumber } from "js-abbreviation-number";

function Video({ video }) {
  return (
    <div className="transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg rounded-xl overflow-hidden transform-gpu">
      <Link to={`/video/${video?.videoId}`}>
        <div className="flex flex-col">
          {/* Thumbnail & duration */}
          <div className="relative h-48 md:h-56 rounded-xl overflow-hidden">
            <img
              className="h-full w-full object-cover"
              src={video?.thumbnails[0]?.url}
              alt=""
            />
            {video?.lengthSeconds && <Time time={video?.lengthSeconds} />}
          </div>
          {/* Channel logo & title */}
          <div className="flex mt-3 space-x-2">
            <div className="flex items-start">
              <div className="flex h-9 w-9 rounded-full overflow-hidden border shadow-md">
                <img
                  className="h-full w-full object-cover rounded-full"
                  src={video?.author?.avatar[0]?.url}
                  alt=""
                />
              </div>
            </div>
            <div>
              <span className="text-sm font-bold line-clamp-2">
                {video?.title}
              </span>
              <span className="flex items-center font-semibold mt-2 text-[12px] text-gray-600">
                {video?.author?.title}
                {video?.author?.badges[0]?.type === "VERIFIED_CHANNEL" && (
                  <BsFillCheckCircleFill className="text-gray-600 ml-1 text-[12px]" />
                )}
              </span>
              <div className="flex text-gray-500 text-[12px]">
                <span>{`${abbreviateNumber(
                  video?.stats?.views,
                  2
                )} views`}</span>
                <span className="flex text-[24px] leading-none font-bold relative top-[-10px] mx-1">
                  .
                </span>
                <span>{video?.publishedTimeText}</span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Video;
