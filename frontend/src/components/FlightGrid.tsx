import type {FlightItem} from "../types/flight.ts";
import FlightCard from "./FlightCard.tsx";

type Props = {
    flights: FlightItem[];
}

const FlightGrid = ({flights} : Props) => {
    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mt-5">
            {flights.map((flight) => (
                <FlightCard key={flight.id} flight={flight} />
            ))}
        </div>
    );
};

export default FlightGrid;