export const SHOP_SIDE_PANE_DATA = {
	categories: {
		title: "categories",
		list: [
			{ value: `MEN(200)`, isActive: true },
			{ value: `WOMEN(150)`, isActive: false },
			{ value: `HATS(100)`, isActive: false },
			{ value: `KIDS(100)`, isActive: false },
			{ value: `BAGS(100)`, isActive: false },
			{ value: `SNEAKERS(100)`, isActive: false },
			{ value: `JACKETS(100)`, isActive: false },
		],
		isVisual: false,
	},
	branding: {
		title: "branding",
		list: [
			{ value: `LOUIS VUITTON`, isActive: false },
			{ value: `CAVALLI`, isActive: true },
			{ value: `NIKE`, isActive: false },
		],
		isVisual: false,
	},
	filterPrice: {
		title: "filter-price",
		list: [
			{ value: `$0.00 - $50.00`, isActive: false },
			{ value: `$50.00 - $100.00`, isActive: false },
			{ value: `$100.00 - $150.00`, isActive: true },
		],
		isVisual: false,
	},
	size: {
		title: "size",
		list: [
			{ value: `XXL`, isActive: true },
			{ value: `S`, isActive: false },
			{ value: `XL`, isActive: false },
			{ value: `L`, isActive: false },
		],
		isVisual: true,
		isColorList: false,
		className: `size-list`,
	},
	colors: {
		title: "colors",
		list: [
			{ id: `4878FC`, isActive: true },
			{ id: `CD1613`, isActive: false },
			{ id: `2BCBD6`, isActive: false },
			{ id: `000000`, isActive: false },
		],
		isVisual: true,
		isColorList: true,
		className: `colors-list`,
	},
	tags: {
		title: "tags",
		list: [{ value: `PRODUCT`, isActive: false }, { value: `WOMAN`, isActive: false }, { value: `HATS` , isActive: true}],
		isVisual: true,
		isColorList: false,
		className: `tags-list`,
	},
};
