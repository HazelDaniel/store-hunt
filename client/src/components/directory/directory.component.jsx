import { DirectoryStyled } from "./directory.styles";

export const Directory = () => {
	return (
		<DirectoryStyled>
			<div className="directories">
				<p className="directories-title">
					CATE<span>GORIES</span>
				</p>
				<div className="directory no-content"></div>
				<div className="directory">
					<img src="IMAGES/womens.png" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">WOMEN</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory">
					<img src="IMAGES/sneakers.png" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">SNEAKERS</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory">
					<img src="IMAGES/jackets.png" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">JACKETS</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory">
					<img src="IMAGES/bags.jpg" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">BAGS</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory">
					<img src="IMAGES/men.png" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">MENS</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory">
					<img src="IMAGES/hats.png" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">HATS</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory">
					<img src="IMAGES/dressed-up-kid.jpg" alt="" />
					<div className="directory-tag-div">
						<div className="directory-title">KIDS</div>
						<button className="directory-cta">SHOP NOW</button>
					</div>
				</div>
				<div className="directory no-content"></div>
			</div>
		</DirectoryStyled>
	);
};
