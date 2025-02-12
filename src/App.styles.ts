import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    max-width: 900px;
    margin: auto;
    display: flex;
    padding: 150px 20px;

    @media (max-width: 750px) {
        flex-direction: column;
        padding: 50px 20px;
    }

    @media (max-width: 480px) {
        padding: 30px 15px;
`;

export const Info = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;

    @media (max-width: 750px) {
        margin-bottom: 30px;
        align-items: center;
    }
`;

export const LogoLink = styled.a`
    display: block;

    @media (max-width: 750px) {
        img {
            width: 250px;
        }
    }
`;

export const InfoArea = styled.div`
    width: 100%;
    margin: 20px 0; 

    @media (max-width: 750px) {
        display: flex;
        justify-content: space-around;
        text-align: center;
        margin: 15px 0; 
    }
`;

export const GridArea = styled.div`
    flex: 1;
    display: flex;
    justify-content: flex-end;

    @media (max-width: 750px) {
        justify-content: center;
        margin: 0 10px;
    }
`;

export const Grid = styled.div`
    width: 500px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 15px;
    text-align: center;

    @media (max-width: 750px) {
        width: 100%;
        grid-template-columns: repeat(3, 1fr); 
        gap: 10px;
    }

    @media (max-width: 480px) {
        grid-template-columns: repeat(2, 1fr); 
    }
`;