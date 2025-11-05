import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";
import { BlogPage } from "@/pages/BlogPage";
import { PrivacyPage } from "@/pages/PrivacyPage";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
