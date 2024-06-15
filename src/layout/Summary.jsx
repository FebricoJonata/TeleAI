import { useState } from "react";
import BaseTextField from "../components/BaseTextField";
import { useTranslation } from "react-i18next";
import ApiService from "../services/apiService";

export default function Summary() {
    const { t } = useTranslation()

    const [originalValue, setOriginalValue] = useState('');
    const [summarizeValue, setSummarizedValue] = useState('');
    const [isLoading, setIsLoading] = useState(false)

    const generateChat = async (message) => {
        try {
          const response = await ApiService.post("api/text/summary", {
            conversation: [
              message
            ],
          });
    
          if (response[0].summary === '') {
            return 'ERROR!'
          }
    
          return response[0].summary;
        } catch (error) {
            setIsLoading(false)
            setSummarizedValue("ERROR!")
          console.error("Error generating chat:", error.message);
          throw error;
        }
    };

    const handleSubmit = () => {
        setSummarizedValue("")
        setIsLoading(true)
        generateChat(originalValue).then((replyValue) => {
            setSummarizedValue(replyValue)
            setIsLoading(false)
        });
    }

    return (
        <div className="flex flex-col gap-[16px]">
            <BaseTextField
                placeholder={t('insert_content_to_summarize')}
                value={originalValue}
                onValueChanged={setOriginalValue}
                onSubmit={() => handleSubmit()}
                isFullWidth={true}
                isTextArea={true}
                showSendButton={true}
            />

            { isLoading &&
                <div className="w-full h-full flex items-center justify-center text-[18px] text-brand-secondary font-semibold">
                    {t('summarizing_content')}
                </div>
            }

            <div className="w-full h-[300px] overflow-hidden">
                <p className={`overflow-y-scroll word-break w-full text-white text-[14px] transition-all duration-[5000ms] ${summarizeValue === '' ? 'h-0' : "h-full"}`}>
                    {summarizeValue}
                </p>
            </div>
        </div>
    );
}