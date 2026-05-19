import {Headset, HeartHandshake, ShieldCheck} from "lucide-react";

const RightSidebar = () => {
    return (
        <div className="px-2 py-4 w-60 h-52">
            <div className="border border-slate-200 rounded-xl  p-4">
                <span className="text-gray-600 font-semibold text-md">
                    Why Book With Us?
                </span>

                <div className="flex items-start gap-3 flex-1 mt-3">
                    <ShieldCheck size={20} className="text-blue-700 mt-0.5"/>
                    <div className="flex flex-col">
                        <span className="text-sm  text-slate-800 font-medium">
                            Best Price Guarantee
                        </span>
                        <span className="text-xs text-slate-400">
                            We offer the best prices
                        </span>
                    </div>
                </div>

                <div className="flex items-start gap-3 flex-1 mt-3">
                    <ShieldCheck size={20} className="text-blue-700 mt-0.5"/>
                    <div className="flex flex-col">
                        <span className="text-sm  text-slate-800 font-medium">
                            Easy Booking
                        </span>
                        <span className="text-xs text-slate-400">
                            Quick and hassle-free booking
                        </span>
                    </div>
                </div>

                <div className="flex items-start gap-3 flex-1 mt-3">
                    <Headset size={20} className="text-blue-700 mt-0.5"/>
                    <div className="flex flex-col">
                        <span className="text-sm  text-slate-800 font-medium">
                            24/7 Support
                        </span>
                        <span className="text-xs text-slate-400">
                            We are here to help anytime
                        </span>
                    </div>
                </div>
            </div>

            {/** Special Offers **/}
            <div className="bg-blue-100 rounded-xl p-4 mt-6 flex flex-col">

                <div className="flex gap-2">
                    <span className="text-blue-600 font-semibold text-md ">
                        Summer Special
                    </span>
                    <HeartHandshake className="text-yellow-500 fill-yellow-400"/>
                </div>

                <span className="text-sm  text-slate-600 font-normal pt-4">
                    Get up to
                    <span className="text-lg text-blue-800 font-bold"> 20% </span>
                    off on selected flights
                </span>
                <button className="border border-blue-500 rounded-md px-1 py-2 text-sm text-blue-600 bg-white mt-3 w-36">
                    Explore Offers
                </button>
            </div>
        </div>
    );
};

export default RightSidebar;