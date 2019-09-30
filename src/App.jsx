import React from 'react';
import styled, {ThemeProvider, createGlobalStyle} from 'styled-components';

import './base.css';

const Body = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
`;

const Main = styled.div`
    background: ${props => props.theme.background};
    flex: auto;
    display: flex;
    justify-content: center;
`;

const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => props.theme.copy};
    }
`;

const App = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') || 'light'
    );

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    console.log(theme);

    return (
        <div>
            <Body>
                <Main>hello world</Main>
            </Body>
        </div>
    );
};

export default App;
