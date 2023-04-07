import { ThemeProvider } from "styled-components";
import { Container } from "./components/styles/Container.styled";
import Header from "./components/Header";
import GlobalStyles from "./components/styles/Global";

const theme = {
	colors: {
		header: "#ebfbff",
		body: "#fff",
		footer: "#003333",
	},
	mobile: "768px",
};

const App = () => {
	return (
		<ThemeProvider theme={theme}>
			<>
				<GlobalStyles />
				<Header />
				<Container>Hello world.</Container>
			</>
		</ThemeProvider>
	);
};

export default App;
