"use client";

// import PostOwnnerProps from "../libs/types/postOwnnerProps";
import React, { useState} from "react";
  
export default function PostOwnner({id, name, text, like,image}: any) {
  return (
    <div className="vstack gap-3">
          <div className="d-flex align-items-center gap-3">
            <img
              src={image}
              // src="/profileImages/pfp.jpg"
              width="48"
              height="48"
              className="rounded-circle"
              style={{ objectFit: "cover" }}
            />
            <span className="fw-semibold fs-5 text-white">
              {name} {id}
              {/* Poonnapat Panumonwatee 640610692 */}
            </span>
          </div>

          <span className="text-white">
            {text}
            {/* Quiz ยากจุงครับ  #261207 */}
          </span>

          <div className="d-flex align-items-center gap-1">


            <img src="/like.svg" width={20}></img>
            <span style={{ color: "#B0B3B8" }}>
              {like}
              {/* 100 คน */}
              </span>
          </div>
          <hr className="m-0 border" />
        </div>
  );
}
