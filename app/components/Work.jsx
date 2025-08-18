"use client";

import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20">
      <h4 className="text-center mb-2 text-lg fonto-Ovo">My Projects</h4>
      <h2 className="text-center text-5xl font-Ovo">My Latest Projects</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
        My projects showcase my creativity and technical expertise. Each project
        reflects my focus on clean design, responsive layouts, and seamless user
        experiences.
      </p>
      <div className="grid lg:grid-cols-4 gap-6 my-10 md:grid-cols-2 sm:grid-cols-1">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative group:"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between  duration-500 group-hover:bottom-7">
              <div>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
              <div>
                <a href={project.url} target="_blank">
                  <Image
                    src={assets.send_icon}
                    alt="send icon"
                    className="w-5 cursor-pointer"
                  />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
