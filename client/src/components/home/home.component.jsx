import { Wrapper } from "../../layout-components/wrapper/wrapper.component";
import { DealOfTheWeek } from "../deal-of-the-week-div/deal-of-the-week-div.component";
import { Directory } from "../directory/directory.component";
import { HotSales } from "../hot-sales-section/hot-sales-section.component";
import { Newsletter } from "../newsletter/newsletter.component";
import { PageLineBreak } from "../page-line-break/page-line-break.component";
import { Slider } from "../slider/slider.component";

export const Home = () => {
  // throw new Error("this is a template error");
	return (
		<Wrapper>
			<Slider />
			<Directory />
			<PageLineBreak />
			<DealOfTheWeek />
			<HotSales />
			<Newsletter />
		</Wrapper>
	);
};
export default Home;