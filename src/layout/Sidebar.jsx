import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import logo from '../assets/logo.svg';

export default function BaseSidebar() {
    const { t } = useTranslation();

    // MARK: State
    const [isExpanded, setIsExpanded] = useState(false)

    var chatRoomList = [
        {
            title: "User 1",
            link: ''
        },
        {
            title: "User 2",
            link: ''
        },
        {
            title: "User 3",
            link: ''
        },
    ]
    const [selectedChatRoom, setSelectedChatRoom] = useState(chatRoomList[0].title)

    var menuList = [
        {
            title: t('overall_sentiment'),
            link: ''
        },
        {
            title: t('setting'),
            link: ''
        },
        {
            title: t('logout'),
            link: ''
        },
    ]
    const [selectedMenu, setSelectedMenu] = useState(null)

    // MARK: Helper
    const onItemTapped = (item, menuList) => {
        if (menuList === "chat") {
            setSelectedChatRoom(item)
            setSelectedMenu(null)
        } else if (menuList === "menu") {
            setSelectedMenu(item)
            setSelectedChatRoom(null)
        }
    }

    // MARK: View
    return (
        <div className='relative lg:w-[280px] w-0'>
            <div 
                className={`absolute z-30 text-white min-w-[32px] min-h-[32px] lg:collapse transition-all duration-300 ${isExpanded ? 'ml-[240px] my-[12px]' : 'm-[12px]'}`} 
                onClick={() => setIsExpanded(!isExpanded)}
            >
                {   isExpanded ?
                    <CloseRoundedIcon /> 
                    : <MenuRoundedIcon/>
                }
            </div>

            <aside className={`z-20 bg-brand-inv lg:bg-brand-semi-inv w-[280px] max-h-screen h-screen flex flex flex-col jusify-start items-start py-[24px] transition-all duration-300 lg:translate-x-0 ${isExpanded ? 'translate-x-0' : '-translate-x-full'}`}>
                <img src={logo} alt='logo' className='px-[32px] max-w-[150px] object-contain py-[24px]' />

                <ListView 
                    itemList={chatRoomList}
                    selectedItem={selectedChatRoom}
                    onTapped={((item) => onItemTapped(item, "chat"))}
                    addClass={'h-full overflow-scroll no-scrollbar'}
                />

                <div className='border-t-[1px] border-brand-primary border-opacity-25'>
                    <ListView 
                        itemList={menuList}
                        selectedItem={selectedMenu}
                        onTapped={((item) => onItemTapped(item, "menu"))}
                    />
                </div>
            </aside>
        </div>
    );
}

function ListView({
    itemList,
    selectedItem,
    onTapped,
    addClass,
}) {
    return (
        <div className={`w-[280px] flex flex-col gap-[32px] px-[32px] py-[24px] ${addClass}`}>
            {itemList.map((item) => (
                <ListItem 
                    key={item.title}
                    title={item.title}
                    onClick={() => {
                        onTapped(item.title)
                        // TODO: Redirect item.link
                    }}
                    isActive={item.title === selectedItem}
                />
            ))}
        </div>
    );
}

function ListItem({
    title,
    isActive = false,
    ...rest
}) {
    return (
        <span
            className={`text-white text-[20px] ${isActive && 'font-bold'} hover:translate-x-4 cursor-pointer transition-all duration-300`}
            {...rest}
        >
            {title}
        </span>
    );
}
