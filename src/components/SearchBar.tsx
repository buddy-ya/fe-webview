interface SearchBarProps {
    keyword: string;
    onChange: (keyword: string) => void;
}

export default function SearchBar({ keyword, onChange }: SearchBarProps) {

    return (
        <div className="flex items-center p-2 w-full h-[42px] rounded-[12px] border">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-4.35-4.35m1.75-5.3a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                value={keyword}
                onChange={e => onChange(e.target.value)}
                placeholder="학교명을 입력하세요."
                className="flex-grow ml-2 mt-0.5 placeholder-gray-400 text-gray-700 focus:outline-none"
            />
        </div>
    )
}
