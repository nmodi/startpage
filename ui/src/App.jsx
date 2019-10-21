import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import './base.css';
import Bookmark from './Bookmark';

const colors = {
    grey: "#cfdbd5",
    plat: "#e8eddf",
    yellow: "#f5cb5c",
    black: "#242423",
    darkgrey: "#333533"
}

const Body = styled.main`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    min-height: 100vh;
    background: #242423; 
`;

const Main = styled.div`
    background: ${props => props.theme.background}; 
`;

const GlobalStyle = createGlobalStyle`
    body {
        color: ${props => props.theme.copy};
    }
`;

const data = {
    name: 'Messenger', 
    url: 'https://messenger.com'
}; 

const App = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem('theme') || 'light'
    );

    React.useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    console.log(theme);

    return (
        <Body>
            <Main>
                {
                    [0, 0, 0, 0, 0].map(i => <Bookmark data={data}>hello world</Bookmark>)
                }
            </Main>
        </Body>
    );
};

export default App;
