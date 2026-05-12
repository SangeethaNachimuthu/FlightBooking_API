import Header from "./components/Header.tsx";
import Sidebar from "./components/Sidebar.tsx";

function App() {

  return (
      <div className="min-h-screen">
        <Header />
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex">
                {/* Sidebar */}
                <Sidebar />
                {/* Main content */}
                <main className="flex-1 p-6">
                </main>
            </div>
        </div>
      </div>
  )
}

export default App
