

function Tiles({ title, svg, name, ontab }) {

    var divstyle = "";
    if (name) {

        divstyle = "bg-yellow-400 rounded-md"
    }
    else {
        divstyle = ""
    }
    return (
        <div className={divstyle}
        >
            <a class="flex items-center px-3 py-2 text-black transition-colors duration-300 transform rounded-lg dark:text-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-200 " href="#">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d=
                        {svg} />
                </svg>

                <span class="mx-2 text-sm font-medium">{title}</span>
            </a></div>
    );
}

export default Tiles;