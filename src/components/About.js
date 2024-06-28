import React from "react";

const About = () => {
	return (
		<div className="about-container">
			<h1>About Us</h1>
			<p>
				Welcome to YourWebsiteName! We are passionate about creating
				high-quality web applications that make your life easier. Our team is
				dedicated to delivering innovative solutions and exceptional user
				experiences.
			</p>
			<h2>Our Mission</h2>
			<p>
				Our mission is to provide cutting-edge technology solutions that empower
				individuals and businesses to achieve their goals. We strive to create
				products that are not only functional but also intuitive and enjoyable
				to use.
			</p>
			<h2>Contact Us</h2>
			<p>
				Have questions or feedback? We'd love to hear from you! You can reach us
				at:
			</p>
			<ul>
				<li>Email: contact@yourwebsite.com</li>
				<li>Phone: +123 456 7890</li>
			</ul>
			<h2>Follow Us</h2>
			<p>Stay connected and follow us on our social media channels:</p>
			<ul>
				<li>
					<a
						href="https://www.linkedin.com/in/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
					>
						LinkedIn
					</a>
				</li>
				<li>
					<a
						href="https://github.com/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
					>
						GitHub
					</a>
				</li>
				<li>
					<a
						href="https://twitter.com/yourprofile"
						target="_blank"
						rel="noopener noreferrer"
					>
						Twitter
					</a>
				</li>
			</ul>
		</div>
	);
};

export default About;
