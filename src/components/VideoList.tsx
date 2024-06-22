import React from "react";
import VideoCard from "@/components/VideoCard";

const VideoList = () => {
  let ytItems = [
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
    {
      title:"Rust Tutorial For Beginners | Two Rust Projects | Rust Notes Included | Hindi",
      thumbnailImage: "./image.png",
      image: "./image.png",
      channelName: "Code Eater",
      viewNo: "100k",
      timepassed: "1 month",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
      {ytItems.map((item, index) => <VideoCard
         key={index} 
         title={item.title}
         thumbnailImage={item.thumbnailImage}
         image= {item.image}
         channelName = {item.channelName}
         viewNo= {item.viewNo}
         timepassed = {item.timepassed}
         />

      )}
    </div>
  );
};

export default VideoList;
