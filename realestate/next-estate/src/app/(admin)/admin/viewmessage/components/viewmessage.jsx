"use client";

import React, { useState } from "react";

const ViewMessage = () => {
  const [message, setMessage] = useState({
    id: 1,
    subject: "Product Inquiry",
    message: "Interested in your products.",
    date: "2023-01-15T10:30:00Z",
    source: "Email",
    from: "John Doe",
  });

  const [reply, setReply] = useState("");

  const handleReplyChange = (e) => {
    setReply(e.target.value);
  };

  const handleSubmitReply = (e) => {
    e.preventDefault();
    console.log("Reply submitted:", reply);
    setMessage((prevMessage) => ({
      ...prevMessage,
      reply: {
        content: reply,
        date: new Date().toISOString(),
      },
    }));
    setReply("");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex-1 flex flex-col overflow-hidden">
        <main className="flex-1 overflow-x-hidden overflow-y-auto py-8 px-12">
          <div className="mb-6 flex justify-between items-center">
            <h1 className="text-2xl font-semibold text-gray-800">
              View Message
            </h1>
          </div>

          <div className="bg-white shadow-md p-6 rounded-md">
            <h2 className="text-xl font-semibold">{message.subject}</h2>
            <p className="text-gray-600">{message.message}</p>
            <p className="text-sm text-gray-400 mt-2">
              From: {message.from}, Date: {message.date}, Source:{" "}
              {message.source}
            </p>

            {message.reply && (
              <div className="mt-4 border-t border-gray-300 pt-4">
                <h3 className="text-lg font-semibold">Admin Reply</h3>
                <p className="text-gray-600">{message.reply.content}</p>
                <p className="text-sm text-gray-400 mt-2">
                  Date: {message.reply.date}
                </p>
              </div>
            )}

            <form onSubmit={handleSubmitReply} className="mt-4">
              <label
                htmlFor="reply"
                className="block text-sm font-medium text-gray-700"
              >
                Reply:
              </label>
              <textarea
                id="reply"
                name="reply"
                value={reply}
                onChange={handleReplyChange}
                rows="4"
                className="mt-1 p-2 w-full border rounded-md"
                required
              ></textarea>
              <button
                type="submit"
                className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
              >
                Submit Reply
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ViewMessage;
