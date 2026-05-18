import {Copyright} from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-white pt-10 pb-10 border-t border-slate-200">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">

                    <div className="flex items-center gap-1 text-gray-600 text-sm">
                        <Copyright size={16}/>
                        <span>
                            2026 SkyBooker. All rights reserved.
                        </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <a href="#"
                           className="text-sm text-gray-600 hover:text-slate-900 transition-colors">
                            Privacy Policy
                        </a>
                        <span className="text-sm text-gray-600">|</span>
                        <a href="#"
                           className="text-sm text-gray-600 hover:text-slate-900 transition-colors">
                            Terms of Service
                        </a>
                        <span className="text-sm text-gray-600">|</span>
                        <a href="#"
                           className="text-sm text-gray-600 hover:text-slate-900 transition-colors">
                            Refund Policy
                        </a>
                    </div>

                    <div className="flex items-center gap-4">
                        <a href="#"
                           className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                           aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <path
                                    d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
                            </svg>
                        </a>
                        <a href="#"
                           className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                           aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none"
                                 stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                            </svg>
                        </a>
                        <a href="#"
                           className="h-9 w-9 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 transition-colors hover:bg-blue-600 hover:text-white"
                           aria-label="Instagram">
                            <svg viewBox="0 0 16 16" fill="#000000" xmlns="http://www.w3.org/2000/svg" id="Facebook-Line--Streamline-Remix" height="16" width="16">
                                <desc>
                                    Facebook Line Streamline Icon: https://streamlinehq.com
                                </desc>
                                <path d="M8.666666666666666 6h3l-0.3333333333333333 1.3333333333333333h-2.6666666666666665v6h-1.3333333333333333v-6H4.666666666666666V6h2.6666666666666665V4.751846666666666c0 -1.1886933333333332 0.1238 -1.6197399999999997 0.35619999999999996 -2.0543066666666663s0.5734666666666666 -0.77562 1.008 -1.0080266666666666C9.132133333333332 1.4570999999999998 9.563133333333333 1.3333333333333333 10.751866666666666 1.3333333333333333c0.348 0 0.6529333333333334 0.03333333333333333 0.9148000000000001 0.09999999999999999V2.6666666666666665h-0.9148000000000001c-0.8824666666666667 0 -1.1511999999999998 0.05189333333333333 -1.4255333333333333 0.19859333333333332 -0.2022 0.10814666666666667 -0.3529333333333333 0.25886666666666663 -0.4610666666666666 0.46108 -0.14673333333333333 0.2743 -0.1986 0.54304 -0.1986 1.4255066666666665V6Z" stroke-width="0.6667"></path>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;