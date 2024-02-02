import React from "react";

const Shimmer = () => {
  const arr = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <div className="flex flex-wrap mt-3 ">
      {arr.map((val, index) => {
        return (
          <div
            className="bg-gray-100 w-80 my-3 ml-4 shadow-md rounded-lg cursor-pointer h-80 p-2"
            key={index}
          >
            <div>
              <ul>
                <li className="bg-gray-400"></li>
                <li className="bg-gray-400"></li>
                <li className="bg-gray-400"></li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Shimmer;
