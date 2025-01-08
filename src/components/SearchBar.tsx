import { useState } from "react"

export default function SearchBar() {

    const [keyword, setKeyword] = useState('');

    const handleKeywordChange = (keyword: string) => {
        setKeyword(keyword);
    }

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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-4.35-4.35m1.75-5.3a7 7 0 11-14 0 7 7 0 0114 0z"
                />
            </svg>
            <input
                type="text"
                value={keyword}
                onChange={e => handleKeywordChange(e.target.value)}
                placeholder="학교명을 입력하세요."
                className="flex-grow ml-2 mt-1 placeholder-gray-400 text-gray-700 "
            />
        </div>
    )
}
