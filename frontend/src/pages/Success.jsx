import { useNavigate } from "react-router-dom"

export function Success(){
    const navigate = useNavigate();
    return <div className="bg-slate-300 flex justify-center h-screen">
        <div className="bg-green-400 flex flex-col justify-center rounded-full w-60 h-60 mt-10">
            <div className="font-bold text-3xl pl-12 ml-8">YAY!!</div>
            <div className="font-md text-xl ml-8">Transfer Successful!</div>
            <br />
            <button onClick={() => {
                navigate("/dashboard")
            }} className="w-15 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-lg rounded-full text-2xl px-5 py-2.5 me-2 mb-2 ml-10 mr-10">Done</button>
        </div>
    </div>
}