import { useTranslation } from 'react-i18next';
import BaseButton from '../components/BaseButton';

export default function BaseNavbar({title, onOptionTapped}) {
    const { t } = useTranslation();

    return (
        <header className="lg:ml-0 ml-[32px] flex flex-row align-center justify-between lg:px-[64px] lg:pt-[32px] px-[16px]">
            <div className="flex flex-row gap-[64px] text-white">
                <span className="font-bold text-[32px]">{title}</span>
            </div>

            <nav className='lg:visible collapse flex flex-row justify-center items-center gap-[16px] lg:gap-[32px]'>
                <BaseButton prominence='tertiary' title={t('ask_ai')} action={() => onOptionTapped("ASK_AI")} />
                <BaseButton prominence='tertiary' title={t('summary')} action={() => onOptionTapped("SUMMARY")} />
                <BaseButton prominence='tertiary' title={t('analyze')} action={() => onOptionTapped("ANALYZE")} />
            </nav>
        </header>
    );
}