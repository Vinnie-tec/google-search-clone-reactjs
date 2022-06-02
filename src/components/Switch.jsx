import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Result from "./Result";

const Switch = () => {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/" element={<Navigate replace to="/search" />} />
        
        <Route path="/search" element={<Result />} />
        <Route path="/image" element={<Result />} />
        <Route path="/news" element={<Result />} />
        <Route path="/videos" element={<Result />} />
      </Routes>
    </div>
  );
};

export default Switch;
