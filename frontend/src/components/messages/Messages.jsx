import React, { useEffect, useRef } from "react";
import Message from "./Message.jsx";
import MessageLoading from "./MessageLoading.jsx";
import useGetMessages from "../../hooks/useGetMessages.js";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div key={message._id} ref={lastMessageRef}>
            <Message message={message} />
          </div>
        ))}

      {loading && [...Array(3)].map((idx) => <MessageLoading key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
