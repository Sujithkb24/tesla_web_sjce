import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer
            id="footer"
            className="text-center py-10 relative"
            style={{ backgroundColor: 'var(--color-black)', color: 'var(--color-gold)' }}
        >
            {/* Gold Top Border */}
            <div
                className="absolute top-0 left-0 w-full h-1"
                style={{ backgroundColor: 'var(--color-gold)' }}
            ></div>

            <div className="max-w-full mx-auto flex flex-col md:flex-row items-center justify-between px-6 space-y-8 md:space-y-0">
                {/* Left Section (30%) */}
                <div className="w-full md:w-3/10 flex flex-col items-center justify-center text-center">
                    <div className="flex items-center space-x-4">
                        <img src="/TESLA-Logo.png" alt="Tesla Logo" className="h-15 md:h-20" />
                        <img src="/JSS-STU-Logo 1.png" alt="JSS Logo" className="h-15 md:h-20" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mt-4 uppercase">TESLA - SJCE</h2>
                    <p className="text-lg md:text-xl uppercase">
                        JSS Science and Technology <br /> University <br />
                        Mysuru - 570009
                    </p>
                </div>

                {/* Vertical Divider */}
                <div
                    className="hidden md:flex h-48 w-0.5 mx-6"
                    style={{ backgroundColor: 'var(--color-gold)' }}
                ></div>

                {/* Right Section (70%) */}
                <div className="w-full md:w-7/10 flex flex-col items-center justify-center text-center">
                    {/* Links Section */}
                    <div className="w-full sm:w-4/5 flex flex-row items-center justify-around gap-6 text-lg text-left">
                        <div className="self-start">
                            <h3 className="font-bold uppercase text-left sm:text-left">CLUB</h3>
                            <ul className="space-y-1 text-left sm:text-left">
                                <li><Link to="/about" className="hover:underline">About Us</Link></li>
                                <li><Link to="/events" className="hover:underline">Events</Link></li>
                                <li><Link to="/teams" className="hover:underline">Teams</Link></li>
                            </ul>
                        </div>
                        <div className="self-start">
                            <h3 className="font-bold uppercase text-left sm:text-left">SOCIAL MEDIA</h3>
                            <ul className="space-y-1 text-left sm:text-left">
                                <li>
                                    <a
                                        href="https://www.instagram.com/tesla_sjce/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/company/tesla-sjce/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:underline"
                                    >
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="self-start">
                            <h3 className="font-bold uppercase text-left sm:text-left">GET HELP</h3>
                            <ul className="space-y-1 text-left sm:text-left">
                                <li><Link to="#footer" className="hover:underline">FAQ</Link></li>
                                <li><Link to="#footer" className="hover:underline">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
