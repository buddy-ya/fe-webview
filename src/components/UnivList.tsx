import { univList } from "../data/univ";

export default function UnivList() {
    return (
        <ul className="mt-5 h-[calc(100vh-300px)] max-h-[calc(100vh-300px)] overflow-y-auto ">
            {univList.map(univ => <>
                <li key={univ.id} className="flex items-center justify-center p-2 w-full h-[35px]">
                    <div className="flex items-center justify-between w-full">
                        <div className="flex items-center space-x-3">
                            <img src={`/univ/${univ.imageURL}`} alt="로고" className="w-[23px] h-[23px]" />
                            <span className="flex text-sm font-medium">{univ.name}</span>
                        </div>
                    </div>

                    <input
                        type="checkbox"
                        className="appearance-none w-[20px] h-[20px] rounded-full border border-gray-300 checked:bg-primary checked:bg-[url('/checkbox.svg')] bg-no-repeat bg-center"
                    />
                </li>
                <div className="h-[1px] bg-gray-300"></div></>)}

        </ul>

    )
}
