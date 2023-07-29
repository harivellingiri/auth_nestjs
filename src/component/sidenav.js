import { useNavigate } from "react-router-dom";
import Tiles from "../component/tiles";
import { Link } from "react-router-dom";
function SideNav({ selected }) {
    const navigate = useNavigate()
    function navback() {
        localStorage.removeItem("token")
        localStorage.removeItem("ademail")

        console.log(localStorage.getItem("token"))
        window.location.reload();
        navigate("/signup")
    }
    return (<aside className="fixed   m-7 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 px-5 py-8 overflow-y-auto bg-yellow-100 border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
        <img
            src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
            class="w-32 rounded-full ml-12"
            alt="Avatar" />
        <br></br>
        <h6 className="font-normal text-center ">
            Hari Vellingiri
        </h6>
        <br></br>
        <h6 className="font-normal text-center text-yellow-600">
            User
        </h6>
        <Link to={"/home"}>
            <Tiles name={selected === "1" ? true : false} title={"Home"} svg={
                "M18.917 7.301 10.246.265a1.178 1.178 0 0 0-1.49 0L.083 7.301a.222.222 0 0 0-.033.315l.468.582a.225.225 0 0 0 .317.033L2.11 7.195v9.273A.533.533 0 0 0 2.64 17h13.722a.526.526 0 0 0 .528-.53v-9.27l1.28 1.038a.224.224 0 0 0 .317-.033l.468-.58a.238.238 0 0 0-.037-.323Zm-11 8.636v-5.313h3.167v5.313H7.917Zm7.917 0h-3.695v-5.844a.533.533 0 0 0-.528-.531H7.39a.526.526 0 0 0-.528.531v5.844H3.167V6.338l6.192-5.026a.218.218 0 0 1 .277 0l6.198 5.03v9.595Z"
            } /></Link> <br></br>

        <Link to={"/yet/2"}><Tiles name={selected === "2" ? true : false} title={"Self Assesment"} svg={
            "M34 6H14c-2.21 0-3.98 1.79-3.98 4L10 42l14-6 14 6V10c0-2.21-1.79-4-4-4zm0 30-10-4.35L14 36V10h20v26z"
        } /></Link> <br></br>

        <Link to={"/list"}> <Tiles name={selected === "3" ? true : false} title={"Student"} svg={
            "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        } /></Link> <br></br>

        <Link to={"/yet/4"}> <Tiles name={selected === "4" ? true : false} title={"Payment"} svg={
            "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        } /></Link> <br></br>

        <Link to={"/yet/5"}><Tiles name={selected === "5" ? true : false} title={"Report"} svg={
            "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        } /> </Link><br></br>

        <Link to={"/yet/6"}> <Tiles name={selected === "6" ? true : false} title={"Settings"} svg={
            "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
        } /></Link><br></br>

        <div class="flex flex-col justify-between flex-1 mt-10 ml-4">
            <nav class="-mx-3 space-y-6 ">
                <button onClick={(e) => {
                    e.preventDefault()
                    navback()
                }}>
                    <div class="space-y-3 ">
                        <a class="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d=
                                    "M4 12a1 1 0 0 0 1 1h7.59l-2.3 2.29a1 1 0 0 0 0 1.42 1 1 0 0 0 1.42 0l4-4a1 1 0 0 0 .21-.33 1 1 0 0 0 0-.76 1 1 0 0 0-.21-.33l-4-4a1 1 0 1 0-1.42 1.42l2.3 2.29H5a1 1 0 0 0-1 1ZM17 2H7a3 3 0 0 0-3 3v3a1 1 0 0 0 2 0V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-3a1 1 0 0 0-2 0v3a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V5a3 3 0 0 0-3-3Z" />
                            </svg>

                            <span class="mx-2 text-sm font-medium">{"Logout"}</span>
                        </a>
                    </div>
                </button>

            </nav>
        </div>
    </aside>
    );
}

export default SideNav;