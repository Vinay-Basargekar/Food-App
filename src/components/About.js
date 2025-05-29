import React from "react";
import {
	FaLinkedin,
	FaGithub,
	FaTwitter,
	FaEnvelope,
	FaPhone,
} from "react-icons/fa";

const About = () => {
	return (
		<div className="max-w-5xl mx-auto px-6 py-12">
			<h1 className="text-4xl font-bold mb-6 text-center text-[#d9534f]">
				About Foodyfy
			</h1>

			<p className="text-lg text-gray-700 mb-8 text-center">
				Welcome to <span className="font-semibold">Foodyfy</span> – your
				one-stop platform for exploring and ordering the best dishes from local
				Indian restaurants. Whether it's spicy street food from Delhi or
				traditional thalis from Maharashtra, we bring the **flavours of India**
				to your fingertips.
			</p>

			<h2 className="text-2xl font-semibold mb-3 text-[#d9534f]">
				Our Mission
			</h2>
			<p className="text-gray-700 mb-6">
				Our mission is to empower local eateries and street vendors across India
				by providing them with a digital platform. We believe great food should
				be accessible, and our aim is to connect hungry foodies with
				hard-working chefs through a seamless and joyful experience.
			</p>

			<h2 className="text-2xl font-semibold mb-3 text-[#d9534f]">
				Why Choose Us?
			</h2>
			<ul className="list-disc list-inside text-gray-700 mb-6 space-y-2">
				<li>Curated list of top-rated Indian restaurants</li>
				<li>Real-time order tracking and reliable delivery</li>
				<li>Friendly support team and transparent pricing</li>
				<li>Local, seasonal, and sustainable food options</li>
			</ul>

			<h2 className="text-2xl font-semibold mb-3 text-[#d9534f]">Contact Us</h2>
			<p className="text-gray-700 mb-2 flex items-center gap-2">
				<FaEnvelope className="text-[#d9534f]" /> support@swadsagar.in
			</p>
			<p className="text-gray-700 mb-6 flex items-center gap-2">
				<FaPhone className="text-[#d9534f]" /> +91 98765 43210
			</p>

			<h2 className="text-2xl font-semibold mb-3 text-[#d9534f]">Follow Us</h2>
			<div className="flex space-x-6">
				<a
					href="https://www.linkedin.com/in/vinay-basargekar/"
					target="_blank"
					rel="noreferrer"
					className="text-[#0077b5] hover:underline flex items-center gap-1"
				>
					<FaLinkedin /> LinkedIn
				</a>
				<a
					href="https://github.com/Vinay-Basargekar"
					target="_blank"
					rel="noreferrer"
					className="text-black hover:underline flex items-center gap-1"
				>
					<FaGithub /> GitHub
				</a>
			</div>
		</div>
	);
};

export default About;
