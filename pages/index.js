import { useState } from "react";
import Card from "../components/card";
import Navbar from "../components/navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <br />
      {/* <------ category section -------> */}
      <div className="container mx-auto">
        <div className="flex space-x-4">
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Pop Music
          </div>
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Romantic
          </div>
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Rock
          </div>
          <div className="bg-gray-300 p-3 rounded-xl font-medium text-gray-700 cursor-pointer hover:text-blue-500 hover:bg-blue-200">
            Sad
          </div>
        </div>
        <br />
        <div className="grid grid-cols-6 gap-4">
          {[...Array(12)].map((x, i) => (
            <Card key={i} />
          ))}
        </div>
      </div>
    </>
  );
}
