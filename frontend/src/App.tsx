import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";
import MainContent from "./components/MainContent.tsx";
import {useEffect, useState} from "react";
import type {FlightItem} from "./types/flight.ts";
import {getAllFlights, getAvailableFlights} from "./api/FlightAPI.ts";
import Footer from "./components/Footer.tsx";
import RightSidebar from "./components/RightSidebar.tsx";

function App() {

    const[flights, setFlights] = useState<FlightItem[]>([]);
    const normalizeFlights = (flights: any[], type: string) => {
        return flights.map(flight => ({
            ...flight,
            status: type === "AVAILABLE" ? "AVAILABLE" : (flight.status ?? "BOOKED")
        }));
    };

    const [selectedCategory, setSelectedCategory] = useState("All Flights");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchFlights = async () => {
            try{
                let data;
                if (selectedCategory === "Available Flights") {
                    data = await getAvailableFlights();
                    setFlights(normalizeFlights(data, "AVAILABLE"));
                } else {
                    data = await getAllFlights();
                    setFlights(normalizeFlights(data, "ALL"));
                }
            }
            catch (error) {
                console.error("Could not fetch the data, Check the backend.")
            }
        };
        fetchFlights();
    }, [selectedCategory])

    return (
        <div className="min-h-screen">
            <Header />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex">
                    {/* Sidebar */}
                    <Sidebar
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                    {/* Main content */}
                    <MainContent
                        flights={flights}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                        searchTerm={searchTerm}
                    />
                    <RightSidebar
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default App
