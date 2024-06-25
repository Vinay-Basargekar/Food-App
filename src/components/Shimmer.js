const Shimmer = () => {
	return (
		<div className="shimmer-wrapper">
			{Array.from({ length: 10 }).map((_, index) => (
				<div key={index} className="shimmer">
					<div className="shimmer-image"></div>
					<div className="shimmer-content">
						<div className="shimmer-title"></div>
						<div className="shimmer-rating"></div>
						<div className="shimmer-details"></div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Shimmer;
