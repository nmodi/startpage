import React from 'react';
import styled from 'styled-components';

const Container = styled.a`
    background: #565656;
    padding: 10px 10px 0 10px; 
    margin: 10px;
    width: 150px;
    height: 100px;

    display: flex; 
    flex-direction: column;
	justify-content: space-between;
    align-items: center;
    
    text-decoration: none; 

    &:hover {
        background: #656565; 
    }
`;

const Thumbnail = styled.div`
    background: #999;
    width: 100%; 
    height: 100%;
`;

const Title = styled.div`
    color: #fff; 
`;

const Bookmark = ({data}) => {
    return (
        <Container href={data.url}>
            <Thumbnail />
            <Title>{data.name}</Title>
        </Container>
    );
};

export default Bookmark;
