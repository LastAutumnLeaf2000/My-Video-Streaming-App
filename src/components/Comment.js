import React from "react";

const Comment = ({ commentData }) => {
  return (
    <>
      {commentData.map((comment, i) => (
        <div key={i}>
          <div className="flex flex-wrap bg-gray-100 ">
            <img
              src="https://static.vecteezy.com/system/resources/previews/019/879/186/non_2x/user-icon-on-transparent-background-free-png.png"
              className="w-8 h-5 lg:w-12 lg:h-8"
              alt="user"
            />
            <div>
              <p className="font-semibold">{comment.name}</p>
              <p>{comment.text}</p>
            </div>
          </div>
          <div className="ml-5 text-sm my-5 border border-l-black ">
            <label className="text-gray-400">Replies</label>
            <Comment commentData={comment.replies} />
          </div>
        </div>
      ))}
    </>
  );
};

export default Comment;
