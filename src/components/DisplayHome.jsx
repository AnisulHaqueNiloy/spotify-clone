import React from "react";
import Navbar from "./Navbar";
import { albumsData, songsData } from "../assets/assets";
import AlbumItem from "./AlbumItem";
import SongItem from "./SongItem";
function DisplayHome() {
  return (
    <>
      <Navbar></Navbar>
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="flex overflow-auto">
          {albumsData.map((album) => (
            <AlbumItem album={album}></AlbumItem>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's biggest hits</h1>
        <div className="flex overflow-auto ">
          {songsData.map((song) => (
            <SongItem song={song}></SongItem>
          ))}
        </div>
      </div>
    </>
  );
}

export default DisplayHome;
