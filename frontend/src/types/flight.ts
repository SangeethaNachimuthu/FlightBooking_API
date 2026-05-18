export type FlightItem = {
    id: number;
    flightNumber: number;
    departureTime: string;
    arrivalTime: string;
    status: string;
    destination: string;
    price: number;
}

export type CategoryProps = {
    selectedCategory: string;
    setSelectedCategory: (value:string) => void;
}

