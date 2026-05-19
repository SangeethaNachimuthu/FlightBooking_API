import {useState} from "react";
import {getBookingByEmail} from "../api/FlightAPI.ts";
import type {BookingItem} from "../types/BookingItem.ts";

const MyBookings = () => {

    const [email, setEmail] = useState("");
    const [bookings, setBookings] = useState<BookingItem[]>([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);

    const handleSearch = async () => {
        try {
            setLoading(true);
            const data = await getBookingByEmail(email);
            setBookings(data);
            setSearched(true);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full space-y-6 mt-3">
            <input
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2"
            />
            <button
                onClick={handleSearch}
                className="rounded-xl bg-blue-600 px-5 py-2 text-white"
            >
                Search
            </button>
            {/** Result **/}
            <div className="space-y-4">
                {loading && (
                    <p className="text-sm text-slate-500">
                        Loading bookings...
                    </p>
                )}
                {searched && !loading && bookings.length === 0 && (
                    <p className="text-sm text-slate-400">
                        No bookings found.
                    </p>
                )}

                {!loading && bookings.map((booking) => (
                    <div
                        key={booking.id}
                        className="rounded-xl border border-slate-200 p-4"
                    >
                        <div className="grid grid-cols-[160px_1fr] gap-y-2">
                <span className="font-semibold text-slate-700">
                    Flight Number :
                </span>
                            <span className="text-blue-700">{booking.flightNumber}</span>

                            <span className="font-semibold text-slate-700">
                    Destination :
                </span>
                            <span className="text-blue-700">{booking.destination}</span>

                            <span className="font-semibold text-slate-700">
                    Booking Status :
                </span>
                            <span className="text-blue-700">{booking.status}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyBookings;