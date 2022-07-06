import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    flex-wrap: wrap;
    align-items: center;

`;
export const WrapperImg = styled.img`
        display: flex;
        flex-wrap: wrap;
        max-width: 150px;
        border-radius: 100%;
        border: 2px solid black;
        margin: 20px;
`;
export const WrapperUserInfos = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding: 10px;
    height: 150px;
    margin-left: 8px;
    h1{
        font-weight: bold;
        font-size: 32px;
        display: flex;
        flex-wrap: wrap;
    }
    h4{
        font-size: 20px;  
    }

`;
export const WrapperUsername = styled.div`
    display: flex;
    align-items: center;
    h4{
        margin-right: 20px;
        font-weight: bold;
    }
    a{
        color: blue;
        font-size: 20px;
        :hover{
            color: #000875;
        }
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    /* background-color: coral; */
    gap:10px;
    margin-top: 10px;
    div{
        text-align: center;
    }
    span{
        font-weight: bold;
    }

   
`;


