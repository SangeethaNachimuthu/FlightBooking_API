import type {FlightItem} from "../types/flight.ts";
import {MapPin, Plane} from "lucide-react";

type FlightCardProps = {
    flight: FlightItem;
    setSelectedFlight: (flight: FlightItem) => void;
}

const FlightCard = ({flight, setSelectedFlight} : FlightCardProps) => {

    //Destructing (Instead of using flight.id, we can use id.)
    const {
        flightNumber,
        departureTime,
        arrivalTime,
        status,
        destination,
        price,
    } = flight;

    const isAvailable = status === "AVAILABLE";
    const date = new Date(departureTime).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    });
    const formattedDepartureTime = new Date(departureTime).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
    });
    const formattedArrivalTime = new Date(arrivalTime).toLocaleTimeString("en-GB", {
        hour: "2-digit",
        minute: "2-digit"
    });


    return (
        <article className="border border-slate-200 rounded-[1.25rem] bg-white p-3
                      transition-all duration-400 hover:border-blue-400
                      hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.08)] hover:-translate-y-1.5 group">
            <div className="mt-2 px-1 pb-2 space-y-1">
                <h3 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {flightNumber}
                </h3>
                <div className="flex items-center gap-1 text-[12px] font-medium text-slate-500">
                    <MapPin size={11} />
                    <p>{destination}</p>
                </div>

                <p className={`text-[11px] font-medium 
                    ${isAvailable ? "text-green-600" : "text-red-500" } `} >
                    {status}
                </p>
            </div>
            <div className="mt-2 px-1 pb-2 space-y-1">
                {/** Date **/}
                <p className="text-[11px] font-medium text-slate-500">
                    {date}
                </p>
                {/** Time **/}
                <div className="flex items-center justify-between">
                    {/** Departure **/}
                    <div className="flex flex-col items-start">
                        <span className="text-md font-bold text-slate-800">
                            {formattedDepartureTime}
                        </span>
                        <span className="text-[10px] tracking-tight text-slate-400">
                            Departure
                        </span>
                    </div>
                    {/** Flight line **/}
                    <div className="flex-1 px-3">
                        <div className="relative flex items-center">
                            <div className="h-px w-full bg-slate-500"></div>
                            <Plane size={14} className="absolute left-1/2 -translate-x-1/2 bg-white text-blue-500" />
                        </div>
                    </div>
                    {/** Arrival **/}
                    <div className="flex flex-col items-start">
                        <span className="text-md font-bold text-slate-800">
                            {formattedArrivalTime}
                        </span>
                        <span className="text-[10px] tracking-tight text-slate-400">
                            Arrival
                        </span>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-between gap-3 pt-3">
                <div className="flex flex-col">
                    <span className="text-[12px] text-blue-600 font-medium leading-none pb-2">
                        SEK {price}
                    </span>
                    <button type="button"
                            className={`inline-flex h-8 w-full items-center justify-center rounded-xl px-5 text-xs font-bold
                            ${isAvailable
                                ? "bg-blue-200 text-blue-800 hover:bg-blue-600 hover:text-white"
                                : "bg-slate-100 text-slate-400 cursor-not-allowed"
                            }`}
                            aria-label="Add to cart"
                            disabled={!isAvailable}
                            onClick={() => {
                                setSelectedFlight(flight);
                            }}
                    >
                        {isAvailable ? "Book Now" : "Booked"}
                    </button>
                </div>
            </div>
        </article>
    );
};

export default FlightCard;