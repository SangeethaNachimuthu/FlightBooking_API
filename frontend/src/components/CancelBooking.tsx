import {cancelBooking} from "../api/FlightAPI.ts";
import {useState} from "react";

const CancelBooking = () => {

    const [flightId, setFlightId] = useState("");
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const handleCancel = async () => {
        try {
            setLoading(true);
            await cancelBooking(Number(flightId), email);
            setMessage("Booking cancelled successfully!");
            setFlightId("");
            setEmail("");
        } catch (error) {
            console.error(error);
            setMessage("Failed to cancel booking");
        } finally {
            setLoading(false);
        }

    };

    return (
        <div className="space-y-6 mt-3">
            <input
                type="number"
                placeholder="Flight ID"
                value={flightId}
                onChange={(e) => setFlightId(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2"
            />
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-slate-200 px-4 py-2"
            />
            <button
                onClick={handleCancel}
                disabled={loading}
                className="rounded-xl bg-blue-600 px-5 py-2 text-white"
            >
                {loading ? "Cancelling..." : "Cancel Booking"}
            </button>
            {message && (
                <p className="text-sm text-slate-600">
                    {message}
                </p>
            )}
        </div>
    );
};

export default CancelBooking;