import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import "./_BookInterview.scss";

const BookInterview = () => {
  return (
    <div id="book-interview">
      <Sidebar />
      <div className="book-interview-container">
        <h1>Book Interview</h1>
      </div>
    </div>
  );
};

export default BookInterview;
