import {Plane, TextAlignJustify, User} from "lucide-react";

const Header = () => {
    return (
        <header className="w-full border-b">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/** Logo **/}
                    <div className="flex items-start gap-2">
                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-lg bg-white text-blue-600 shadow-md">
                            <Plane size={36} />
                        </span>
                        <div className="flex flex-col">
                            <p className="text-xl tracking-tighter camelcase text-gray-600 font-bold">
                                SkyBooker
                            </p>
                            <p className="text-xs text-gray-300 ">
                                Fly Easy, Book Easy
                            </p>
                        </div>
                    </div>

                    {/** Right icons **/}
                    <div className="flex-1 flex items-start pl-20">
                        <TextAlignJustify size={20} className="mt-1 text-gray-600" />
                        <div className="flex flex-col pl-4">
                            <span className="text-md text-gray-600 font-medium">
                                Welcome back,
                            </span>
                            <span className="text-xs text-gray-400">
                                Find and book the best flights for your next journey
                            </span>
                        </div>
                    </div>

                    {/** User **/}
                    <div className="flex items-center">
                        <button
                            type="button"
                            aria-label="Account"
                            title="Account"
                            className="inline-flex h-11 w-11 items-center justify-center rounded-4xl bg-blue-200/30 text-blue-600 transition-all duration-200 hover:text-white hover:bg-blue-500/50 border border-blue-400/20"
                        >
                            <User size={22} />
                        </button>
                    </div>

                </div>
            </div>
        </header>
    );
};

export default Header;