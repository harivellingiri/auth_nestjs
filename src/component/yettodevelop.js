import SideNav from "./sidenav";

import {

    useParams,
} from "react-router-dom";
export default function YetToDevelop() {

    const { id } = useParams();
    console.log(id)
    return (
        <body>
            <SideNav selected={id} />

            <div class="sm:ml-64 p-1">
                <div class="p-4 border-1 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                    <p>This Page is Yet To Develop</p>
                </div>
            </div>
        </body>
    );
}