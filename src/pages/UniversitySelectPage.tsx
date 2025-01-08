import BackButton from "../components/BackButton";
import SearchBar from "../components/SearchBar";

export default function UniversitySelectPage() {
    return (
        <div className='p-4 w-full'>
            <header className='flex items-center h-[36px]'>
                <BackButton />
            </header>
            <main className="h-[calc(100%-120px)]">
                <h2 className="mt-4 text-[24px]">세종대학교 재학생이신가요?</h2>
                <span>학교 이름이 버디야 프로필에 적혀요.</span>
                <div className="mt-[40px] h-full">
                    <SearchBar />
                    <ul className="mt-2 max-h-[calc(100vh-300px)] overflow-y-auto ">
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li><li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li><li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li><li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li>
                        <li>학교 리스트</li><li>학교 리스트</li>
                    </ul>
                </div>
            </main>
            <button className='flex items-center justify-center w-full h-[60px] rounded-[12px] bg-primary'>
                <span className="text-white">{'다음'}</span>
            </button>
        </div >
    )
}
