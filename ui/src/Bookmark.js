import React from 'react'; 
import styled from 'styled-components'; 


const Container = styled.a`
    background: #888; 
    width: 200px; 
    padding: 20px; 
    margin: 20px; 
`; 


const Bookmark = ({data}) => {
    return (<Container href={data.url}>
        {data.name}
    </Container>); 
}; 

export default Bookmark; 