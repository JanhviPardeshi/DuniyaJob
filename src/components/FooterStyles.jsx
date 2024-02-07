// components/FooterStyles.js
import styled from "styled-components";

export const Box = styled.div`
	padding: 5% 2.5%;
	background: black;
	${'' /* position: absolute; */}
	bottom: 0;
	width: 100%;

	@media (max-width: 1000px) {
		padding: 70px 30px;
	}
`;

export const FooterContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	max-width: 1000px;
	margin: 0 auto;
	/* background: red; */
`;

export const Column = styled.div`
	display: flex;
	flex-direction: column;
	text-align: left;
	margin-left: 90px;
`;

export const Row = styled.div`
	display: grid;
	grid-template-columns: repeat(
		auto-fill,
		minmax(185px, 1fr)
	);
	grid-gap: 20px;

	@media (max-width: 1000px) {
		grid-template-columns: repeat(
			auto-fill,
			minmax(200px, 1fr)
		);
	}
`;

export const FooterLink = styled.a`
	color: #fff;
	margin-bottom: 20px;
	font-size: 14px;
	text-decoration: none;

	&:hover {
		color: green;
		transition: 200ms ease-in;
	}
`;

export const Heading = styled.p`
	font-size: 18px;
	color: #fff;
	margin-bottom: 20px;
	font-weight: bold;
`;

export const Icon_row = styled.div`
	font-size: 16px;
	color: gray;
	margin-left: 10px;
	margin-top: 35px;
`;
