import { Home, Store, Users, GraduationCap } from 'lucide-react';

const Navbar = () => {
    return (
        <nav className="bg-white shadow-lg fixed w-full z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between h-16">
                    <div className="flex items-center">
                        <span className="text-green-600 font-bold text-2xl">Bhoomitra</span>
                    </div>
                    <div className="flex space-x-8">
                        {[
                            { name: 'Home', icon: Home },
                            { name: 'Store', icon: Store },
                            { name: 'Vendors', icon: Users },
                            { name: 'Experts', icon: GraduationCap },
                        ].map((item) => (
                            <button
                                key={item.name}
                                className="flex items-center px-3 py-2 text-gray-700 hover:text-green-600 transition-colors"
                            >
                                <item.icon className="w-5 h-5 mr-1" />
                                <span>{item.name}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
