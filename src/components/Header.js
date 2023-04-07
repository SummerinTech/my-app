import { StyledHeader, Nav, Logo } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";

const Header = () => (
	<StyledHeader>
		<Container>
			<Nav>
				<Logo src="./images/logo.svg" />
				<Button>Try It Free</Button>
			</Nav>
		</Container>
	</StyledHeader>
);

export default Header;
