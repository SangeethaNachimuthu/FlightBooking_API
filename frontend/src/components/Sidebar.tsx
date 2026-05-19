import {
    Calendar,
    CircleQuestionMark,
    CircleX,
    type LucideIcon,
    Luggage,
    Plane,
    PlaneTakeoff,
    Settings
} from "lucide-react";
import type {CategoryProps} from "../types/flight.ts";


type CategoryItem = {
    icon: LucideIcon;
    name: string;
}
const items: CategoryItem[] = [
    {icon: Plane, name: "All Flights"},
    {icon: Calendar, name: "Available Flights"},
    {icon: PlaneTakeoff, name: "Book a Flight"},
    {icon: Luggage, name: "My Bookings"},
    {icon: CircleX, name: "Cancel Booking"},
]


const Sidebar = ({selectedCategory, setSelectedCategory}: CategoryProps) => {

    const handleChange = (category : string) => {
        setSelectedCategory(category);
    };

    return (
        <aside className="w-72 border-r border-slate-200 bg-slate-50/40">
            <div className="px-6 py-5">
                {/** Categories **/}
                <section aria-labelledby="filters-categories" className="space-y-4 border-b border-slate-200 bg-slate-50/40 pb-4">
                    <div className="flex flex-col items-start gap-3 px-2">
                        {items.map(((item, index) => {
                            const Icon = item.icon;
                            const isActive = selectedCategory === item.name;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleChange(item.name)}
                                    className={`group flex items-center gap-3 w-56 px-3 py-2 rounded-lg border transition-all duration-200
                                        ${isActive
                                            ? "border-blue-500 bg-blue-50"
                                            : "border-transparent hover:border-blue-200 hover:bg-blue-50"
                                        }
                                    `}
                                >
                                    <Icon size={18}
                                          className={`transition-colors
                                          ${isActive ? "text-blue-600" : "text-gray-700 group-hover:text-blue-600"}
                                          `}/>
                                    <span className={`text-sm tracking-tight transition-colors
                                        ${isActive ? "text-blue-600 font-medium" : "text-gray-700 group-hover:text-blue-600"}
                                    `}>
                                        {item.name}
                                    </span>
                                </button>
                            )
                        }))}
                    </div>
                </section>
                {/** Setting & Help **/}
                <div className="flex flex-col gap-3 pt-4 px-3">
                    <button className="flex items-center gap-3 w-56 px-3 py-2">
                        <Settings size={18}/>
                        <span className="text-sm tracking-tight text-gray-700">
                            Settings
                        </span>
                    </button>
                    <button className="flex items-center gap-3 w-56 px-3 py-2">
                        <CircleQuestionMark size={18}/>
                        <span className="text-sm tracking-tight text-gray-700">
                            Help & Support
                        </span>
                    </button>
                </div>

                {/** Help **/}
                <div className="bg-blue-50 rounded-xl w-56 h-40 p-4 mt-16 flex flex-col">
                    <span className="text-blue-800 font-semibold text-md text-center">
                        Need Help?
                    </span>
                    <span className="text-blue-900 text-sm text-center mt-2">
                        We are here to assist you 24/7
                    </span>
                    <button className="bg-blue-600 rounded-md px-3 py-2 text-sm text-white mt-3 min-w-full">
                        Contact Support
                    </button>
                </div>
            </div>
        </aside>
    );
};

export default Sidebar;