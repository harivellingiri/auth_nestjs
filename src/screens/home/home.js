
import SideNav from "../../component/sidenav";
function Home() {
    return (<body>
        <SideNav selected={"1"} />
        <div class="sm:ml-64 p-1">
            <div class="p-4 border-1 border-gray-200 border-dashed rounded-lg dark:border-gray-700">
                <div class="grid grid-cols-3 gap-7 mt-1 ml-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#C4C4C4" viewBox="0 0 24 24" stroke-width="0.1" stroke="currentColor" class="w-10 h-10 text-gray-50">
                        <path clip-rule="evenodd" fill-rule="evenodd" d="M17.7188 9C17.7188 4.18359 13.8164 0.28125 9 0.28125C4.18359 0.28125 0.28125 4.18359 0.28125 9C0.28125 13.8164 4.18359 17.7187 9 17.7188C13.8164 17.7188 17.7187 13.8164 17.7188 9ZM9 16.5938C4.82695 16.5938 1.40625 13.2152 1.40625 9C1.40625 4.82695 4.78477 1.40625 9 1.40625C13.173 1.40625 16.5938 4.78477 16.5938 9C16.5938 13.173 13.2152 16.5938 9 16.5938ZM10.125 12.375L6.75 9L10.125 5.625L10.125 12.375ZM11.25 5.625C11.25 4.62656 10.0371 4.12031 9.33047 4.83047L5.95547 8.20547C5.51602 8.64492 5.51602 9.35859 5.95547 9.79805L9.33047 13.173C10.0371 13.8797 11.25 13.3805 11.25 12.3785L11.25 5.625Z"
                        />
                    </svg>
                    <div class="relative hidden md:block flex-row justify-item-end text-gray-50">

                        <input type="text" id="search-navbar" class="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-yellow-500 focus:border-yellow-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-yellow-500 dark:focus:border-yellow-500" placeholder="Search...">
                        </input>
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Search icon</span>
                        </div>
                    </div>
                    <div class="pl-10">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20" stroke-width="0.1" stroke="currentColor" class="w-8 h-8 pt-1 text-gray-50">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.5 18.75c.67 0 1.215-.562 1.215-1.251h1.214c0 1.38-1.09 2.501-2.429 2.501-1.338 0-2.428-1.122-2.428-2.501h1.214c0 .69.544 1.251 1.214 1.251ZM.555 13.079c1.061-1.04 1.872-2.129 1.872-5.817 0-3.11 2.406-5.645 5.466-5.951V.625C7.893.28 8.165 0 8.5 0c.336 0 .607.28.607.625v.686c3.06.307 5.466 2.842 5.466 5.95 0 3.689.812 4.778 1.873 5.817.53.52.697 1.306.427 2.002a1.811 1.811 0 0 1-1.694 1.17H1.822c-.753 0-1.418-.46-1.694-1.17a1.855 1.855 0 0 1 .427-2.002ZM1.822 15h13.357c.54 0 .81-.643.43-1.016-1.323-1.296-2.25-2.748-2.25-6.722C13.359 4.63 11.186 2.5 8.5 2.5c-2.685 0-4.858 2.13-4.858 4.762 0 3.959-.919 5.418-2.25 6.722-.382.374-.108 1.016.43 1.016Z"
                            />
                        </svg></div>
                </div>
                <div class="ml-40 w-3/4 justify-content-center">
                    <div className="mt-6 mr-6 ">
                        <button className="w-full mr-10 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-yellow-600 rounded-md hover:bg-yellow-400 focus:outline-none focus:bg-yellow-600">
                            Evaluation
                        </button>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-7 mt-1 ml-1">
                    <div className="w-2/3 h-full p-10 m-10 bg-blue-100 rounded-md shadow-md">
                        <h1 className="text-3xl font-semibold text-center text-balck-700 ">
                            Soft Skill
                        </h1>

                        <br></br>
                        <form className="m-4">
                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-light text-gray-800"
                                >
                                    English Level
                                </label>

                            </div>
                            <br></br>
                            <div className="mb-2">
                                <label
                                    for="email"
                                    className="block text-sm font-light text-gray-800"
                                >
                                    LeaderShip
                                </label>

                            </div>
                            <br></br>
                            <div className="mb-2">
                                <label
                                    for="password"
                                    className="block text-sm font-light text-gray-800"
                                >
                                    Comminication
                                </label>

                            </div>
                        </form></div>
                    <div className="w-2/3 h-full p-10 m-10 bg-pink-100 rounded-md shadow-md lg:max-w-xl">
                        <h1 className="text-3xl font-semibold text-center text-balck-700 ">
                            Hard Skill
                        </h1>

                        <br></br>

                    </div>
                </div>
            </div>
        </div></body>

    );
}
export default Home;