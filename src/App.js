import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Main from "./pages/Main";
import InsertPage from "./pages/InsertPage";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="insert" element={<InsertPage />} />
        <Route path="*" element={<div />} />
      </Routes>
    </BrowserRouter>
  );
}
