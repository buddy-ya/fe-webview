import { useCallback, useState } from "react";
import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";
import UnivList from "../components/UnivList";
import { UnivType } from "../data/univ";

// TODO: 언어 정보 메시지로 받아서 국제화 필요
// TODO: CSS 통일 필요
// TODO: 단축 URL 같은 코드 리팩토링 필요

export default function UniversitySelectPage() {

    const [keyword, setKeyword] = useState('');
    const [selectedUniv, setSelectedUniv] = useState<UnivType>({
        "id": 0,
        "name": "",
        "university": "",
        "imageURL": ""
    });

    const handleBack = useCallback(() => {
        window?.ReactNativeWebView?.postMessage(JSON.stringify({
            action: 'goBack',
        }));
    }, []);

    const handleButtonClick = useCallback(() => {
        window?.ReactNativeWebView?.postMessage(JSON.stringify({
            action: 'goNext',
            payload: {
                university: selectedUniv.university
            }
        }));
    }, [])

    const handleKeywordChange = useCallback((keyword: string) => {
        setKeyword(keyword);
    }, []);

    const handleSelectUniv = (univ: UnivType) => {
        setSelectedUniv(univ);
    };

    return (
        <div className='p-4 w-full'>
            <header className='flex items-center h-[24px]'>
                <BackButton onClick={handleBack} />
            </header>
            <main className="h-[calc(100%-120px)]">
                <h2 className="mt-4 text-[24px]">세종대학교 재학생이신가요?</h2>
                <span>학교 이름이 버디야 프로필에 적혀요.</span>
                <div className="mt-[28px] h-full">
                    <SearchBar keyword={keyword} onChange={handleKeywordChange} />
                    <UnivList keyword={keyword} selectedUnivId={selectedUniv.id} onSelect={handleSelectUniv} />
                </div>
            </main>
            <button className='flex items-center justify-center mt-1 w-full h-[60px] rounded-[12px] bg-primary' onClick={handleButtonClick} disabled={selectedUniv.id === 0}>
                <span className="text-white">{'다음'}</span>
            </button>
        </div >
    )
}
