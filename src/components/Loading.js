import { Wrapper } from './utils';

export const Loading = () => {
	const { PUBLIC_URL } = process.env;

	return (
		<Wrapper backColor>
			<img src={PUBLIC_URL + 'oval.svg'} alt="" />
		</Wrapper>
	);
};
