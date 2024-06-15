import { useState } from "react";
import BaseTextField from "../components/BaseTextField";
import { useTranslation } from "react-i18next";
import ApiService from "../services/apiService";

export default function AskAI() {
    const { t } = useTranslation()

    const [questionValue, setQuestionValue] = useState('');
    const [answerValue, setAnswerValue] = useState('');
    const [isLoading, setIsLoading] = useState(false)

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
    
          if (response.message === '') {
            return 'ERROR!'
          }
    
          return response.message;
        } catch (error) {
            setIsLoading(false)
            setAnswerValue("ERROR!")
          console.error("Error generating chat:", error.message);
          throw error;
        }
    };

    const handleSubmit = () => {
        setAnswerValue("")
        setIsLoading(true)
        generateChat(questionValue).then((replyValue) => {
            setAnswerValue(replyValue)
            setIsLoading(false)
        });
    }

    return (
        <div className="flex flex-col gap-[16px]">
            <BaseTextField
                placeholder={t('ask_ai_placeholder')}
                value={questionValue}
                onValueChanged={setQuestionValue}
                onSubmit={() => handleSubmit()}
                isFullWidth={true}
                showSendButton={true}
            />

            { isLoading &&
                <div className="w-full h-full flex items-center justify-center text-[18px] text-brand-secondary font-semibold">
                    {t('generating_answer')}
                </div>
            }

            <div className="w-full h-[375px] overflow-hidden">
                <p className={`overflow-y-scroll word-break w-full text-white text-[14px] transition-all duration-[5000ms] ${answerValue === '' ? 'h-0' : "h-full"}`}>
                    {answerValue}
                </p>
            </div>
        </div>
    );
}