import React from 'react'
import styled from 'styled-components';
import {authService} from '../firebase/firebase'
import {GlobalStyle} from "../styled/Reset.Styled";
import Routes from "./routes/Routes";


const App = () => {

    console.log('authService',authService)

    return (
        <Container>
            <GlobalStyle/>
                <Routes/>
        </Container>
    )
}

const Container = styled.div`
`;

export default App;