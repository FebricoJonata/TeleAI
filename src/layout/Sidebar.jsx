import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";
import logo from "../assets/logo.svg";
import { userLoginSession } from "../services/localStorage";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function BaseSidebar() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [chatRoomList, setChatRoomList] = useState([]);
  const [selectedChatRoom, setSelectedChatRoom] = useState(null);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const storedUserId = localStorage.getItem("user_id");
    if (storedUserId) {
      setUserId(storedUserId);
    }

    const url = "https://code-jeans-backend-v1.vercel.app/api/chat/chat-rooms";
    const token = userLoginSession.getToken(); // Ambil token dari localStorage atau dari mana pun Anda menyimpannya
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const fetchChatRooms = async () => {
      try {
        var chatRoomListArray = [];
        const res = await axios
          .post(url, { user_id: 1 }, config)
          .then((res) => {
            console.log(res);

            //   localStorage.setItem("token", res.token);
            if (res.status === 200) {
              const chatRoomData = res.data.body.data;
              chatRoomData.map((chatRoom) => {
                let chatRoomModel = chatRoom.chat_room;
                chatRoomListArray.push({
                  key: chatRoomModel.chat_room_id,
                  title: chatRoomModel.room_name,
                  function: () => {
                    // navigate(`/chat/${chatRoomModel.chat_room_id}`);
                  },
                });
              });

              setChatRoomList(chatRoomListArray);
            } else {
              console.log("Ga aman");
            }
          });
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchChatRooms();
  }, []);

  var menuList = [
    {
      key: "overall-sentiment",
      title: t("overall_sentiment"),
      function: () => {
        useNavigate("/overall-sentiment");
      },
    },
    {
      key: "setting",
      title: t("setting"),
      function: () => {
        useNavigate("/setting");
      },
    },
    {
      key: "logout",
      title: t("logout"),
      function: () => {
        userLoginSession.setToken(null);
        console.log(userLoginSession.getToken());
        navigate("/login");
      },
    },
  ];
  const [selectedMenu, setSelectedMenu] = useState(null);

  // MARK: Helper
  const onItemTapped = (item, menuList) => {
    if (menuList === "chat") {
      setSelectedChatRoom(item);
      setSelectedMenu(null);
    } else if (menuList === "menu") {
      setSelectedMenu(item);
      setSelectedChatRoom(null);
    }
  };

  // MARK: View
  return (
    <div className="relative">
      <div
        className={`absolute z-30 text-white min-w-[32px] min-h-[32px] lg:collapse transition-all duration-300 ${
          isExpanded ? "ml-[240px] my-[12px]" : "m-[12px]"
        }`}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
      </div>

      <aside
        className={`z-20 bg-brand-semi-inv w-[280px] max-h-screen h-screen flex flex-col jusify-start items-start py-[24px] transition-all duration-300 lg:translate-x-0 ${
          isExpanded ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <img
          src={logo}
          alt="logo"
          className="px-[32px] max-w-[150px] object-contain py-[24px]"
        />

        <ListView
          itemList={chatRoomList}
          selectedItem={selectedChatRoom}
          onTapped={(item) => onItemTapped(item, "chat")}
          addClass={"h-full overflow-scroll no-scrollbar"}
        />

        <div className="border-t-[1px] border-brand-primary border-opacity-25">
          <ListView
            itemList={menuList}
            selectedItem={selectedMenu}
            onTapped={(item) => onItemTapped(item, "menu")}
          />
        </div>
      </aside>
    </div>
  );
}

function ListView({ itemList, selectedItem, onTapped, addClass }) {
  return (
    <div
      className={`w-[280px] flex flex-col gap-[32px] px-[32px] py-[24px] ${addClass}`}
    >
      {itemList.map((item) => (
        <ListItem
          key={item.key}
          title={item.title}
          onClick={() => {
            onTapped(item.title);
            item.function();
          }}
          isActive={item.title === selectedItem}
        />
      ))}
    </div>
  );
}

function ListItem({ title, isActive = false, ...rest }) {
  return (
    <span
      className={`text-white text-[20px] ${
        isActive && "font-bold"
      } hover:translate-x-4 cursor-pointer transition-all duration-300`}
      {...rest}
    >
      {title}
    </span>
  );
}
