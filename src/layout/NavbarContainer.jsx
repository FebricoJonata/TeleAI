import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

export default function NavbarContainer({children, title = "Options", onClose}) {
    return (
        <div className="absolute inset-0 w-full h-screen flex flex-row justify-end items-center transition-all duration-300">
            <div className="flex flex-col bg-brand-semi-inv rounded-[10px] lg:mr-[32px] mr-[16px] p-[16px] lg:min-w-[300px] min-w-full min-h-[500px] lg:w-[300px] w-full h-[500px] ">
                <div className="flex flex-row justify-between items-center font-semibold text-[18px] text-white">
                    {title}
                    <span className='cursor-pointer' onClick={() => onClose()}><CloseRoundedIcon /></span>
                </div>
                {children}
            </div>
        </div>
    );
}