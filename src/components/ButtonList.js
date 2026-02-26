import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { YOUTUBE_CATEGORY_API } from "../utils/constant";


const ButtonList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const fetchCategory = async () => {
    const response = await fetch(YOUTUBE_CATEGORY_API);
    const json = await response.json();
    // console.log(json);
    setCategoryList(json.items);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="w-full flex overflow-x-auto space-x-1 sm:space-x-2 px-2 sm:px-4 py-2" style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}>
      <style>{`
        .w-full::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      {categoryList.map((item) => {
        return <Buttons key={item?.id} name={item.snippet.title} />;
      })}
    </div>
  );
};

export default ButtonList;
