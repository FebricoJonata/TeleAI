import { useState } from "react";
import VisibilityOffRoundedIcon from '@mui/icons-material/VisibilityOffRounded';
import VisibilityRoundedIcon from '@mui/icons-material/VisibilityRounded';
import SendRoundedIcon from '@mui/icons-material/SendRounded';

export default function BaseTextField({
    title = '', 
    placeholder = '',
    value, 
    onValueChanged,
    onSubmit,
    type = 'text',
    isFullWidth = false,
    isRequired = false,
    isError = false,
    showSendButton = false,
    helperText = "",
    addClass,
    ...rest
}) {
    // MARK: State
    const [showPassword, setShowPassword] = useState(false);

    // MARK: Helper
    const handleSubmit = (e) => {
        if (e.key === 'Enter') {
            onSubmit();
        }
    };
    
    // MARK: View
    return (
        <div className={`flex flex-col text-[18px] text-white ${isFullWidth ? 'w-full' : 'w-min'}`}>
            <label className='font-semibold mb-[8px]'>
                {title}
                {isRequired && (<span className="text-red-500">*</span>)}
            </label>

            <div className={`relative ${isFullWidth ? 'w-full' : 'w-min'}`}>
                <input
                    className={`z-0 focus:outline-none focus:ring-0 py-[8px] bg-neutral-low placeholder-neutral-med border-[1px] rounded-[10px] ${isError ? 'border-red-500' : 'border-white'} ${type === 'password' ? 'pl-[16px] pr-[50px]' : 'px-[16px]'} ${isFullWidth ? 'w-full' : 'w-min'} ${addClass}`}
                    placeholder={placeholder}
                    type={type === 'password' ? (showPassword ? 'text' : 'password') : type}
                    value={value}
                    onChange={(e) => onValueChanged(e.target.value)}
                    onKeyDown={handleSubmit}
                    {...rest}
                />

                {type === 'password' && (
                    <div
                        onClick={() => setShowPassword(!showPassword)} 
                        className="absolute z-1 cursor-pointer top-0 right-0 px-[16px] py-[8px] h-full flex items-center justify-center"
                    >
                        { showPassword ?
                            <VisibilityOffRoundedIcon />
                            : <VisibilityRoundedIcon />
                        }
                    </div>
                )}

                {showSendButton === true && (
                    <div
                        onClick={() => onSubmit()} 
                        className="absolute z-1 cursor-pointer top-0 right-0 px-[16px] py-[8px] h-full flex items-center justify-center"
                    >
                        <SendRoundedIcon />
                    </div>
                )}
            </div>

            {helperText && (<span className={`text-[12px] mt-[4px] ${isError ? 'text-red-500' : 'text-white'}`}>{helperText}</span>)}
        </div>
    );
}