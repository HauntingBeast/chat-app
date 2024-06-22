import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] w-full  rounded-lg shadow-md bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-40 ">
      <Sidebar />
    </div>
  );
};

export default Home;
