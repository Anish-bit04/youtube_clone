import React from "react";

const VideoCard = (props:any) => {
  return (
    <div>
      <img src={props.thumbnailImage}alt="Image" />
      <div className="grid grid-cols-12 mt-3">
        <div className="col-span-1 gap-2">
          <img
            className="rounded-full h-12 w-12"
            src={props.image}
            alt="fddfb"
          />
        </div>
        <div className="col-span-11">
          {props.title}
          <div className="text-gray-400">{props.channelName}</div>
          <div className="text-gray-400">{props.viewNo} · {props.timepassed} ago</div>
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
