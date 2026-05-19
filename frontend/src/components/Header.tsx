import {Bell, ChevronDown, ChevronRight, Plane, PlaneTakeoff, User} from "lucide-react";

const Header = () => {

    return (
        <header className="w-full border-b border-slate-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-20 items-center justify-between">
                    {/** Logo **/}
                    <div className="flex items-center gap-3">
                        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-blue-500 to-blue-700 text-white shadow-lg">
                            <Plane size={28} />
                        </span>
                        <div className="flex flex-col">
                            <p className="text-xl tracking-tighter text-gray-600 font-bold">
                                SkyBooker
                            </p>
                            <p className="text-xs text-gray-400 ">
                                Fly Easy, Book Easy
                            </p>
                        </div>
                    </div>

                    {/** Welcome **/}
                    <div className="hidden md:flex items-center gap-3 flex-1 max-w-xl ml-10">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-100 text-blue-600">
                            <PlaneTakeoff size={22}/>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-sm font-semibold text-slate-700">
                                Ready for your next journey?
                            </span>
                            <span className="text-xs text-slate-400">
                                Discover and book flights worldwide
                            </span>
                        </div>
                    </div>

                    {/** User **/}
                    <div className="flex items-center gap-4">
                        {/* Notifications */}
                        <button className="relative flex h-10 w-10 items-center justify-center rounded-full bg-blue-500 text-white transition-all hover:border-blue-300 hover:text-blue-800 hover:shadow-md">
                            <Bell size={20} />
                            <span className="absolute right-3 top-3 h-1 w-1 rounded-full bg-red-500"></span>
                        </button>
                        {/* Profile */}
                        <button className="flex items-center gap-3 rounded-2xl bg-white px-3 py-2 transition-all">
                            <div className="relative">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-linear-to-br from-blue-500 to-blue-700 text-white font-semibold">
                                    G
                                </div>
                                <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-green-500"></span>
                            </div>

                            <div className="hidden sm:flex flex-col items-start">
                                <span className="text-sm font-semibold text-slate-700">
                                    Guest User
                                </span>
                                <span className="text-xs text-slate-400">
                                    Premium Member
                                </span>
                            </div>
                            <ChevronDown size={18} className="text-slate-400" />
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;