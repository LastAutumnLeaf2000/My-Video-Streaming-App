import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/liveChatSlice";
import Chance from "chance";
import { nanoid } from "nanoid";
import { AvatarGenerator } from "random-avatar-generator";

const LiveChat = () => {
  const [chat, setchat] = useState("");

  const chance = new Chance();
  const avatar = new AvatarGenerator();

  const chatMsz = useSelector((store) => store.liveChat.messages);
  //console.log(chatMsz); //live messages

  const dispatch = useDispatch();
  useEffect(() => {
    const timer = setInterval(() => {
      const img = avatar.generateRandomAvatar();
      const name = chance.first({ nationality: "en" }); //generates first name
      const sentence = chance.sentence({ words: 4 });
      //console.log(img);
      // console.log(sentence);
      // console.log("API Polling");//fetchData
      dispatch(
        addMessage({
          img: img,
          name: name,
          message: sentence,
        })
      );
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const handleLiveChat = (e) => {
    e.preventDefault();
    dispatch(
      addMessage({
        //sends this msz by the user to the LiveChat
        img: "https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png",
        name: "Nil",
        message: chat,
      })
    );
    setchat("");
  };

  return (
    <>
      <div className="flex flex-col-reverse border border-black overflow-y-scroll ml-2 h-[540px] w-full bg-gray-50 shadow-lg">
        <div className="flex justify-between items-center mt-4 bg-gray-300 p-1">
          <h1 className="font-bold text-xl mb-2 ">LiveChat</h1>
          <form onSubmit={handleLiveChat}>
            <input
              className="shadow appearance-none border rounded py-1 px-2 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="What's on your mind!"
              onChange={(e) => setchat(e.target.value)} value={chat}
            />
            <button
              type="submit"
              className="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 shadow-lg shadow-purple-500/50 dark:shadow-lg dark:shadow-purple-800/80 font-medium rounded-lg text-sm px-2 py-1 text-center me-2 mb-2"
            >
              Submit
            </button>
          </form>
        </div>
        {chatMsz.map((chats) => (
          <ChatMessage
            key={nanoid()}
            img={chats.img}
            name={chats.name}
            message={chats.message}
          />
        ))}
      </div>
    </>
  );
};

export default LiveChat;
