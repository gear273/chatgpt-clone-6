"use client";
import { useSession, signOut } from "next-auth/react";
import NewChat from "./NewChat";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "@/firebase";
import { collection, orderBy } from "firebase/firestore";
import ChatRow from "./ChatRow";
import { query } from "firebase/firestore";
import ModelSelection from "./ModelSelection";

const SideBar = () => {
  const { data: session } = useSession();
  const [chats, loading, error] = useCollection(
    session &&
      query(
        collection(db, "users", session?.user?.email!, "chats"),
        orderBy("createdAt", "asc")
      )
  );

  // console.log(chats);

  return (
    <div className="p-2 flex flex-col h-screen justify-between">
      <div className="flex-1">
        <div>
          {/* New Chat Button */}
          <NewChat />

          <div className="hidden sm:inline">
            {/* Model Selection */}
            <ModelSelection />
          </div>
          <div className="flex flex-col space-y-2 my-2">
            {loading && (
              <div className="animate-pulse text-center text-white">
                <p>Loading Chats...</p>
              </div>
            )}
            {/* Map through the chat rows */}
            {chats?.docs.map((chat) => (
              <ChatRow key={chat.id} id={chat.id} />
            ))}
          </div>
        </div>
      </div>

      {/* <div className="border-gray-700 border chatRow"> */}
      {session && (
        <div className="flex flex-row items-center justify-center">
          <img
            src={session.user?.image!}
            alt="profile pic"
            className="h-12 w-12 rounded-md cursor-pointer hover:opacity-50"
            onClick={() => signOut()}
          />
          <span className="text-gray-400 ml-1 mt-6">{session.user?.name!}</span>
        </div>
      )}
    </div>
  );
};

export default SideBar;
