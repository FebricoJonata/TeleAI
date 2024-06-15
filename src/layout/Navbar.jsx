import { useTranslation } from 'react-i18next';
import BaseButton from '../components/BaseButton';
import NavbarContainer from './NavbarContainer';
import { useState } from 'react';
import AskAI from './AskAI';
import Summary from './Summary';

export default function BaseNavbar({title, onOptionTapped, sentimentStatus}) {
    const { t } = useTranslation();
    const [optionRoute, setOptionRoute] = useState(null)

    return (
        <header className="relative lg:ml-0 ml-[32px] flex flex-row align-center justify-between lg:px-[64px] lg:pt-[32px] px-[16px]">
            <div className="flex flex-row gap-[16px] text-white items-end">
                <span className="font-bold text-[32px]">{title}</span>
                <span className="text-[16px] mb-[6px] line-clamp-1 text-nowrap">{sentimentStatus}</span>
            </div>

            <nav className='lg:visible collapse flex flex-row justify-center items-center gap-[16px] lg:gap-[32px]'>
                <BaseButton prominence='tertiary' title={t('ask_ai')} action={() => setOptionRoute("ASK_AI")} />
                <BaseButton prominence='tertiary' title={t('summary')} action={() => setOptionRoute("SUMMARY")} />
            </nav>

            <HandleRouting route={optionRoute} onClose={() => setOptionRoute(null)} />
        </header>
    );
}

function HandleRouting({route, onClose}) {
    const { t } = useTranslation();

    if (route === 'ASK_AI') {
        return <NavbarContainer 
            title={t('ask_ai')} 
            onClose={() => onClose()} 
            children={<AskAI />}
        />
    } else if (route === 'SUMMARY') {
        return <NavbarContainer 
            title={t('summary')} 
            onClose={() => onClose()}
            children={<Summary />}
        />
    }
}