import React, { useEffect, useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const dummyContacts = [
	{
		id: 1,
		name: "Rahul Sharma",
		phone: "+91 98765 43210",
		email: "rahul.sharma@example.in",
		location: "Delhi, India",
	},
	{
		id: 2,
		name: "Priya Verma",
		phone: "+91 91234 56789",
		email: "priya.verma@example.in",
		location: "Mumbai, Maharashtra",
	},
	{
		id: 3,
		name: "Ankit Reddy",
		phone: "+91 99887 77665",
		email: "ankit.reddy@example.in",
		location: "Hyderabad, Telangana",
	},
];

const Contact = () => {
	const [search, setSearch] = useState("");
	const [filteredContacts, setFilteredContacts] = useState(dummyContacts);

	useEffect(() => {
		setFilteredContacts(dummyContacts);
	}, []);

	const handleSearch = () => {
		const filtered = dummyContacts.filter((contact) =>
			contact.name.toLowerCase().includes(search.toLowerCase())
		);
		setFilteredContacts(filtered);
	};

	return (
		<div className="w-full">
			{/* Hero Section */}
			<div className="relative w-full h-[300px]">
				<div className="absolute top-0 left-0 right-0 bottom-0 bg-black bg-opacity-40 z-10 h-full"></div>
				<img
					src="https://images.unsplash.com/photo-1562059390-a761a084768e?auto=format&fit=crop&w=1350&q=80"
					alt="Contact Us"
					className="h-full w-full object-cover"
				/>
				<div className="absolute z-20 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
					<h1 className="text-4xl font-bold">We're here to help you</h1>
					<p className="text-lg mt-2">Contact our team for assistance</p>
				</div>
			</div>

			{/* Contact Cards */}
			<div className="flex flex-wrap justify-center mt-8 gap-6">
				{filteredContacts.map((contact) => (
					<div
						key={contact.id}
						className="bg-white rounded-lg shadow-md p-6 w-[300px] hover:shadow-lg transition-all duration-300"
					>
						<h2 className="text-xl font-semibold mb-2">{contact.name}</h2>
						<p className="flex items-center gap-2 text-gray-700 mb-1">
							<FaPhoneAlt /> {contact.phone}
						</p>
						<p className="flex items-center gap-2 text-gray-700 mb-1">
							<FaEnvelope /> {contact.email}
						</p>
						<p className="flex items-center gap-2 text-gray-700">
							<FaMapMarkerAlt /> {contact.location}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Contact;
