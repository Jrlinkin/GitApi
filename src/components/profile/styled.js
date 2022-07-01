import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    /* background-color: red;  */
    width: 98vw;
`;
export const WrapperImg = styled.img`
        max-width: 150px;
        border-radius: 100%;
        border: 2px solid black;
        margin: 20px;
`;
export const WrapperUserInfos = styled.div`
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 150px;
    margin-left: 8px;
    h1{
        font-weight: bold;
        font-size: 32px;
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
        color: #333838;
        font-size: 20px;
        :hover{
            color: #000875;
        }
    }
`;

export const WrapperStatusCount = styled.div`
    display: flex;
    align-items: center;
    /* background-color: coral; */
    gap:10px;
    width: 300px;
    div{
        text-align: center;
    }
    span{
        font-weight: bold;
    }

   
`;


