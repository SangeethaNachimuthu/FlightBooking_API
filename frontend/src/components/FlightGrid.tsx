import type {FlightItem} from "../types/flight.ts";
import FlightCard from "./FlightCard.tsx";
import {useState} from "react";
import {ChevronLeft, ChevronRight} from "lucide-react";

type Props = {
    flights: FlightItem[];
    selectedCategory: string;
    setSelectedFlight: (flight: FlightItem) => void;
    searchTerm: string;
}

const FlightGrid = ({flights, setSelectedFlight, searchTerm} : Props) => {

    const normalizedSearch = searchTerm?.toLowerCase().trim();

    const filteredFlights = flights
        .filter((flight) => {
            return flight.flightNumber?.toLowerCase().includes(normalizedSearch) ||
                flight.destination?.toLowerCase().includes(normalizedSearch);
        });

    const [currentPage, setCurrentPage] = useState(1);
    const flightsPerPage = 6;

    const startIndex = (currentPage - 1) * flightsPerPage;

    const currentFlights = filteredFlights.slice(startIndex, startIndex + flightsPerPage);

    const totalPages = Math.ceil(filteredFlights.length / flightsPerPage);

    return (
        <div className="mt-5">

            {/* Flight cards grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {currentFlights.map((flight) => (
                    <FlightCard
                        key={flight.id}
                        flight={flight}
                        setSelectedFlight={setSelectedFlight}
                    />
                ))}
            </div>

            {/* Pagination */}
            <div className="mt-8 flex items-center justify-center gap-2">

                {/* Previous */}
                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                            Math.max(prev - 1, 1)
                        )
                    }
                    disabled={currentPage === 1}
                    className="inline-flex h-9 w-9 items-center justify-center font-medium rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <ChevronLeft size={20} />
                </button>

                {/* Page numbers */}
                {Array.from({ length: Math.min(5, totalPages) }, (_, index) => {

                    const startPage = Math.max(
                        Math.min(currentPage - 2, totalPages - 4), 1
                    );

                    const page = startPage + index;

                    return (
                        <button
                            key={page}
                            onClick={() => setCurrentPage(page)}
                            className={`h-9 w-9 rounded-lg border transition 
                                    ${currentPage === page
                                ? "bg-blue-600 text-white border-blue-600"
                                : "border-slate-200 hover:border-blue-300"}
                                `}
                        >
                            {page}
                        </button>
                    );
                })}

                {/* Next */}
                <button
                    onClick={() =>
                        setCurrentPage((prev) =>
                            Math.min(prev + 1, totalPages)
                        )
                    }
                    disabled={currentPage === totalPages}
                    className="inline-flex h-9 w-9 items-center justify-center font-medium rounded-lg border border-slate-200 hover:border-blue-300 hover:bg-blue-50 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <ChevronRight size={20} className="items-center" />
                </button>
            </div>
        </div>
    );
};

export default FlightGrid;