const Error = () => {
	return (
		<section className="py-10 bg-white">
			<div className="flex justify-center items-center min-h-screen">
				<div className="text-center">
					<div
						className="bg-center bg-no-repeat bg-cover h-96 w-full max-w-3xl mx-auto"
						style={{
							backgroundImage:
								"url(https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif)",
						}}
					>
						<h1 className="text-8xl">404</h1>
					</div>

					<div className="mt-[-3rem] text-center">
						<h3 className="text-6xl">Look like you're lost</h3>
						<p className="text-lg mt-4">
							The page you are looking for is not available!
						</p>

						<a
							href="/"
							className="inline-block mt-5 py-2 px-4 bg-green-700 text-white rounded"
						>
							Go to Home
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Error;
