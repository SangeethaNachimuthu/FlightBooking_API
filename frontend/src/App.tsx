import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";
import MainContent from "./components/MainContent.tsx";
import {useEffect, useState} from "react";
import type {FlightItem} from "./types/flight.ts";
import {getAllFlights} from "./api/FlightAPI.ts";

function App() {

    const[flights, setFlights] = useState<FlightItem[]>([]);

    useEffect(() => {

        const fetchFlights = async () => {
            try{
                const data = await getAllFlights();
                setFlights(data);
            }
            catch (error) {
                console.error("Could not fetch the data, Check the backend.")
            }
        };
        fetchFlights();
    }, [])

      return (
          <div className="min-h-screen">
            <Header />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex">
                    {/* Sidebar */}
                    <Sidebar />
                    {/* Main content */}
                    <MainContent flights={flights}/>
                </div>
            </div>
          </div>
      )
}

export default App
