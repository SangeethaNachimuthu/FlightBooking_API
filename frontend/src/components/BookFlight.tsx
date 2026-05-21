import {useState} from "react";
import type {FlightItem} from "../types/flight.ts";
import { bookFlight } from "../api/FlightAPI.ts";

type Props = {
    selectedFlight: FlightItem | null;
    onSuccess: () => void;
}

const BookFlight = ({ selectedFlight, onSuccess }: Props) => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    const date = new Date(selectedFlight.departureTime).toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "short",
        year: "numeric"
    })

    const handleBooking = async () => {

        if(!selectedFlight) return;

        try {
            setLoading(true);

            await bookFlight(selectedFlight.id, name, email);
            setSuccessMessage("Flight booked successfully!");
            setName("");
            setEmail("");

            onSuccess();

        }
        catch (error) {
            console.error(error);
        }
        finally {
            setLoading(false);
        }
    };

    return (
        <div className="mt-2 px-1 pb-2 space-y-1">
            <div className="grid grid-cols-[130px_1fr] gap-y-2">
                <span className="text-md font-medium text-slate-600">
                    Flight Number
                </span>
                <span className="text-blue-700">{selectedFlight.flightNumber}</span>

                <span className="text-md font-medium text-slate-600">
                    Destination
                </span>
                <span className="text-blue-700">{selectedFlight.destination}</span>
                <span className="text-md font-medium text-slate-600">
                    Date
                </span>
                <span className="text-blue-700">{date}</span>
                <span className="text-md font-medium text-slate-600">
                    Price
                </span>
                <span className="text-blue-700 font-semibold">
                    <span className="text-blue-700 text-xs font-normal">SEK </span>
                    {selectedFlight.price}
                </span>
            </div>

            <div className="grid grid-cols-[130px_1fr] pt-2">
                <label className="text-md font-medium text-slate-600 ">
                    Name
                </label>
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter passenger name"
                    className="border border-slate-200 rounded-lg w-fit px-5 py-1"
                />
            </div>
            <div className="grid grid-cols-[130px_1fr] pt-2">
                <label className="text-md font-medium text-slate-600">
                    Email
                </label>
                <input
                    type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter passenger email"
                    className="border border-slate-200 rounded-lg w-fit px-5 py-1"
                />
            </div>
            <button
                onClick={handleBooking}
                disabled={loading}
                className="mt-6 inline-flex items-center rounded-xl bg-blue-600 px-5 py-2 text-sm font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
            >
                {loading ? "Booking..." : "Confirm Booking"}
            </button>
            {successMessage && (
                <p className="mt-3 text-sm font-medium text-green-600">
                    {successMessage}
                </p>
            )}
        </div>
    );
};

export default BookFlight;