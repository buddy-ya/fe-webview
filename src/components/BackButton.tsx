interface BackButtonProps {
    onClick?: () => void;
}

export default function BackButton({ onClick }: BackButtonProps) {

    const handleButtonClick = () => {
        onClick ? onClick() : console.log('버튼 클릭');
    }
    return (
        <button onClick={handleButtonClick}>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.7416 24.3649L10.0293 15.6527L18.7416 6.94043" stroke="#282828" stroke-width="2.48922" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    )
}
