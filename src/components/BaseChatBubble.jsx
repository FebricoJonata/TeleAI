import { useTranslation } from "react-i18next";

export default function BaseChatBubble({isSender = true, body, recipient}) {
    return isSender ? SenderChatBubble(body) : RecipientChatBubble(body, recipient)
}

function RecipientChatBubble(body, recipient) {
    return (
        <div className="w-full flex flex-row justify-start">
            <div className="w-full flex flex-col items-start">
                <p className="max-w-[600px] py-[8px] px-[16px] bg-white rounded-t-[10px] rounded-br-[10px] text-black text-[12px] lg:text-[14px]">{body}</p>
                <span className="text-white text-[12px]">{recipient}</span>
            </div>
        </div>
    );
}

function SenderChatBubble(body) {
    const { t } = useTranslation();

    return (
        <div className="w-full flex flex-row justify-end">
            <div className="w-full flex flex-col items-end">
                <p className="max-w-[600px] py-[8px] px-[16px] bg-brand-inv rounded-t-[10px] rounded-bl-[10px] text-white text-[12px] lg:text-[14px]">{body}</p>
                <span className="text-white text-[12px]">{t('you')}</span>
            </div>
        </div>
    );
}