import {ChevronDown} from "lucide-react";
import FlightGrid from "./FlightGrid.tsx";
import type {FlightItem, FlightProps} from "../types/flight.ts";
import {useState} from "react";
import BookFlight from "./BookFlight.tsx";


const MainContent = ({flights, selectedCategory, setSelectedCategory} : FlightProps) => {

    const [selectedFlight, setSelectedFlight] = useState<FlightItem | null>(null);

    const handleBookingSuccess = () => {
        setTimeout(() => {
            setSelectedFlight(null);
            setSelectedCategory("All Flights");
        }, 1500);
    };

    return (
        <div>
            <main className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                    <section className="lg:col-span-9">
                        <div className="border border-slate-200 rounded-[1.25rem] bg-slate-50/50 backdrop-blur-sm shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-400 p-5">
                            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                                <h1 className="text-xl font-bold tracking-tight text-blue-700">
                                    {selectedFlight ? "Book a Flight" : selectedCategory}
                                </h1>
                                <label className="inline-flex items-center gap-2 text-sm text-slate-600">
                                    <span className="hidden sm:inline">Sort by:</span>
                                    <div className="relative">
                                        <select
                                            className="appearance-none border border-slate-200 bg-white rounded-xl py-2 pl-3 pr-9 text-sm text-slate-950 transition-all duration-200 outline-none cursor-pointer focus:border-blue-400 focus:ring-4 focus:ring-blue-600/10">
                                            <option selected>Departure Time</option>
                                            <option>Destination</option>
                                            <option>Status</option>
                                            <option>Price</option>
                                        </select>
                                        <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-400">
                                            <ChevronDown size={20} />
                                        </span>
                                    </div>
                                </label>
                            </div>
                            <div className="mt-5 h-px bg-slate-100"></div>

                            {selectedFlight ? (
                                <BookFlight selectedFlight={selectedFlight} onSuccess={handleBookingSuccess} />
                                ) : (
                                    selectedCategory === "All Flights" ||
                                    selectedCategory === "Available Flights" || selectedCategory === "Book a Flight"
                                ) && (
                                <FlightGrid
                                    flights={flights}
                                    selectedCategory={selectedCategory}
                                    setSelectedFlight={setSelectedFlight}
                                />
                            )}

                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
};

export default MainContent;