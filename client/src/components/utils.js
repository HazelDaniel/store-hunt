


export const wait = (sec) => {
	return new Promise((res => {
		setTimeout(res, sec * 1000);
	}))
};