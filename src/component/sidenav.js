import { useState, useEffect } from "react";
import Tiles from "../component/tiles";
import Topnav from "./topnav";
import { Link } from "react-router-dom";
function SideNav({ selected }) {
    console.log("sel" + (selected === "1"))
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
            "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5M9 11.25v1.5M12 9v3.75m3-6v6"
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
        <div class="flex flex-col justify-between flex-1 mt-6">
            <nav class="-mx-3 space-y-6 ">
                <div class="space-y-3 ">

                </div>


            </nav>
        </div>
    </aside>
    );
}

export default SideNav;