import React, { useEffect, useState } from "react";
import Buttons from "./Buttons";
import { YOUTUBE_CATEGORY_API } from "../utils/constant";

const list = [
  "All",
  "Gaming",
  "Songs",
  "Live",
  "Cricket",
  "Cooking",
  "Sports",
  "News",
  "Comedy",
  "Movies",
  "Technology",
  "Education",
  "Travel",
  "Fashion",
  "Beauty",
  "Health",
  "Fitness",
  "Food",
  "DIY",
  "Art",
  "Photography",
  "Science",
  "History",
  "Business",
  "Finance",
  "Motivation",
  "Inspiration",
];

const ButtonList = () => {
  const [categoryList, setCategoryList] = useState([]);
  const fetchCategory = async () => {
    const response = await fetch(YOUTUBE_CATEGORY_API);
    const json = await response.json();
    console.log(json);
    setCategoryList(json.items);
  };
  useEffect(() => {
    fetchCategory();
  }, []);
  return (
    <div className="w-full flex overflow-x-auto space-x-1 px-4">
      {categoryList.map((item) => {
        return <Buttons key={item?.id} name={item.snippet.title} />;
      })}
    </div>
  );
};

export default ButtonList;
