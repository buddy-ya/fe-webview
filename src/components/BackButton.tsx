interface BackButtonProps {
    onClick: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {

    const handleButtonClick = () => {
        window?.ReactNativeWebView && onClick();
    }
    return (
        <button onClick={handleButtonClick}>
            <svg width="28" height="28" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7416 24.3649L10.0293 15.6527L18.7416 6.94043" stroke="#282828" strokeWidth="2.48922" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
        </button>
    )
}
