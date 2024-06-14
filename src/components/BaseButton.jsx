export default function BaseButton({
    title, 
    action, 
    prominence = 'primary',
    isFullWidth = false,
    addClass,
    ...rest
}) {
    return (
        <button 
            className={`${handleProminenceClass(prominence)} ${isFullWidth ? 'w-full' : ''} ${addClass}`} 
            onClick={action}
            {...rest}
        >
            {title}
        </button>
    );
}

function handleProminenceClass(prominence) {
    var baseClass = 'text-[18px] px-[32px] py-[8px] transition-all duration-300 h-min rounded-[10px] '
    if (prominence === 'secondary') {
        baseClass += 'bg-neutral-low hover:bg-neutral-med text-white border-white border-[1px]'
    }  else if (prominence === 'tertiary') {
        baseClass += 'text-white hover:text-brand-primary'
    } else { // Default primary
        baseClass += 'bg-brand-primary hover:bg-brand-secondary text-white'
    }

    return baseClass
}