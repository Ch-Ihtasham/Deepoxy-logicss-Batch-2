import React from 'react'

export default function About() {
    const teamMembers = [
        { name: 'Alex Johnson', role: 'CEO & Founder', img: 'https://via.placeholder.com/150' },
        { name: 'Sarah Lee', role: 'Lead Developer', img: 'https://via.placeholder.com/150' },
        { name: 'Mike Brown', role: 'Product Designer', img: 'https://via.placeholder.com/150' },
    ];
    return (
        <div className="bg-[#242424] min-h-screen font-sans text-gray-900">

            {/* 1. Hero Section */}
            <div className="bg-[#242424] py-12  border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-indigo-600 sm:text-5xl">
                        About Us
                    </h1>
                    <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                        Building the future with code, creativity, and collaboration.
                    </p>
                </div>
            </div>

            {/* 2. Our Story Section (Split Layout) */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Text Side */}
                    <div>
                        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            We started with a simple idea: make web development accessible and beautiful.
                            What began as a small project in a garage has grown into a global team of
                            passionate creators.
                        </p>
                        <p className="text-lg text-gray-600 leading-relaxed">
                            We believe in transparency, quality code, and putting the user first.
                            Whether you are a startup or a fortune 500, we treat every project with the same dedication.
                        </p>
                    </div>

                    {/* Image Side */}
                    <div className="relative h-64 md:h-96 bg-gray-200 rounded-xl overflow-hidden shadow-lg">
                        {/* Replace src with your actual image */}
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                            alt="Team working together"
                            className="w-full h-full object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* 3. Team Section */}
            <div className="bg-[#242424] py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-center mb-12">Meet the Team</h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-[#242424] rounded-lg shadow-md border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300">
                                <div className="p-6 text-center">
                                    <img
                                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-indigo-50"
                                        src={member.img}
                                        alt={member.name}
                                    />
                                    <h3 className="text-xl font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-indigo-600 font-medium">{member.role}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}
