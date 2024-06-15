import { useTranslation } from "react-i18next";
import BaseChatBubble from "../components/BaseChatBubble";
import BaseTextField from "../components/BaseTextField";
import BaseNavbar from "../layout/Navbar";
import BaseSidebar from "../layout/Sidebar";
import { userGeneralData } from "../services/localStorage";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ApiService from "../services/apiService";
import { data } from "autoprefixer";
import axios from "axios";
import { userLoginSession } from "../services/localStorage";

export default function ChatbotPage() {
  const chatroomId = localStorage.getItem("room_id");
  return (
    <div className="flex flex-row h-screen min-h-screen w-screen bg-brand-blurry">
      <BaseSidebar />
      <ChatLayout chatroomId={chatroomId} />
    </div>
  );
}

function ChatLayout({ chatroomId }) {
  const { t } = useTranslation();

  const { id } = useParams();
  const [textValue, setTextValue] = useState("");
  const userData = userGeneralData.getData();
  const chatroomData = {
    id: chatroomId,
    user: {
      name: "Hanni",
      id: id,
    },
  };
  const [chatList, setChatList] = useState([]);
  const token = userLoginSession.getToken(); // Ambil token dari localStorage atau dari mana pun Anda menyimpannya
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  useEffect(() => {
    const fetchChatHistory = async () => {
      try {
        const response = await axios.post(
          "https://code-jeans-backend-v1.vercel.app/api/chat/all",
          {
            chat_room_id: id,
          },
          config
        );
        if (response.status === 200) {
          const chatHistory = response.data.body.data;
          console.log(chatHistory);
          setChatList(chatHistory);
        } else {
          console.error("Failed to fetch chat history");
        }
      } catch (error) {
        console.error("Error fetching chat history:", error.message);
      }
    };

    fetchChatHistory();
  }, [id]);

  const generateChat = async (message) => {
    try {
      const response = await ApiService.post("api/chat/chat-completion", {
        conversation: [
          {
            role: "user",
            content: message,
          },
        ],
      });

      if (response.message === "") {
        return "ERROR!";
      }

      return response.message;
    } catch (error) {
      console.error("Error generating chat:", error.message);
      throw error;
    }
  };

  const handleSubmit = () => {
    let newChat = {
      id: chatList.length + 1,
      senderId: userData.id,
      message: textValue,
    };

    setChatList((exisitingChatList) => [...exisitingChatList, newChat]);
    setTextValue("");

    generateChat(textValue).then((replyValue) => {
      let newReply = {
        id: chatList.length + 1,
        senderId: -1,
        message: replyValue,
      };
      setChatList((exisitingChatList) => [...exisitingChatList, newReply]);
    });
  };

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <BaseNavbar title={chatroomData.user.name} />

      <section className="flex w-full h-full overflow-y-scroll no-scrollbar items-end justify-center  mb-[16px]">
        <div className="flex flex-col lg:px-[64px] lg:pt-[32px] px-[16px] w-full h-full max-w-[900px] gap-[16px]">
          {chatList.map((chat) => (
            <BaseChatBubble
              key={chat.id}
              isSender={chat.senderId === userData.id}
              body={chat.message}
              recipient={chatroomData.user.name}
            />
          ))}
        </div>
      </section>

      <section className="w-full flex items-center justify-center p-[16px]">
        <div className="w-full max-w-[600px]">
          <BaseTextField
            placeholder={t("enter_your_message")}
            isFullWidth={true}
            value={textValue}
            onValueChanged={setTextValue}
            onSubmit={() => handleSubmit()}
            showSendButton={true}
          />
        </div>
      </section>
    </div>
  );
}
