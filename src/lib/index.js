// @flow

export const concatStartAndEnd = (
	start: string,
	startOffset: number,
	end: string,
	endOffset: number,
) => (`${start}-${startOffset}-${end}-${endOffset}`);

export const splitStartAndEnd = (startAndEnd: string) => {
	const split = startAndEnd.split('-');

	return {
		start: split[0],
		startOffset: split[1],
		end: split[2],
		endOffset: split[3],
	};
};
