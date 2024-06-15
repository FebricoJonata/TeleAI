import { useTranslation } from "react-i18next";
import BaseChatBubble from "../components/BaseChatBubble";
import BaseTextField from "../components/BaseTextField";
import BaseNavbar from "../layout/Navbar";
import BaseSidebar from "../layout/Sidebar";
import { userGeneralData } from "../services/localStorage";
import { useState } from "react";

export default function ChatbotPage() {
  return (
    <div className="flex flex-row h-screen min-h-screen w-screen bg-brand-blurry">
      <BaseSidebar />
      <ChatLayout chatroomId={1} />
    </div>
  );
}

function ChatLayout({chatroomId}) {
  const { t } = useTranslation();

  const [textValue, setTextValue] = useState('')
  const userData = userGeneralData.getData()
  const chatroomData = {
    id: chatroomId,
    user: {
      name: 'Hanni',
      id: 2
    }
  }
  const [chatList, setChatList] = useState(
    [
      {
        id: 1,
        senderId: 1,
        message: "Halo apa kabs dude?"
      },
      {
        id: 2,
        senderId: 2,
        message: "Gwenchana"
      },
      {
        id: 3,
        senderId: 1,
        message: "oh ok."
      },
    ]
  )

  const handleSubmit = () => {
    let newChat = {
      id: chatList.length + 1,
      senderId: userData.id,
      message: textValue
    }

    setChatList([...chatList, newChat])
    setTextValue('')
  }

  return (
    <div className="w-full h-screen overflow-hidden flex flex-col">
      <BaseNavbar title={chatroomData.user.name} />
      
      <section className="flex w-full h-full items-end justify-center overflow-y no-scrollbar mb-[16px]">
        <div className="flex flex-col lg:px-[64px] lg:pt-[32px] px-[16px] w-full max-w-[900px] gap-[16px]">
          { chatList.map(chat => 
            <BaseChatBubble
              key={chat.id}
              isSender={chat.senderId === userData.id}
              body={chat.message}
              recipient={chatroomData.user.name}
            />
          )}
        </div>
      </section>

      <section className="w-full flex items-center justify-center p-[16px]">
        <div className="w-full max-w-[600px]">
          <BaseTextField
            placeholder={t('enter_your_message')}
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