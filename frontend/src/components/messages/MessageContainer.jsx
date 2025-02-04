import React, { useEffect } from "react";
import Messages from "./Messages.jsx";
import MessageInput from "./MessageInput.jsx";
import { TiMessages } from "react-icons/ti";
import useConversation from "../../store/useConversation.js";
import { useAuthContext } from "../../context/AuthContext.jsx";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    //cleanup function
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);
  return (
    <div className="md:min-w-[450px] flex flex-col ">
      <>
        {!selectedConversation ? (
          <NochatSelected />
        ) : (
          <>
            <div className="bg-slate-500 px-4 py-2 mb-2">
              <span className="label-text"> To: </span>
              <span className="text-gray-900 font-bold">
                {selectedConversation.fullName}
              </span>
            </div>
            <Messages />
            <MessageInput />
          </>
        )}
      </>
    </div>
  );
};

export default MessageContainer;

const NochatSelected = () => {
  const { authUser } = useAuthContext();
  return (
    <div className="flex w-full h-full items-center justify-center">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>{`Wellcome 👋 ${authUser.fullName} ❄`}</p>
        <p>Select a chat to start messaging</p>
        <TiMessages className="text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
