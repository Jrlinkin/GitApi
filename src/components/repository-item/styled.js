import styled from "styled-components";

export const Wrapper = styled.div`
    border:1px solid black;
    width: 30%;
    margin-top: 10px;
    padding: 10px;
    background-color: aliceblue;
    border-radius: 10px;
    &:hover{
        transform: translate(2px, -2%);
        
    }

    h2{
        width: 100%;
        display: inline-block;
        white-space: nowrap;
        overflow: hidden !important;
        text-overflow: ellipsis;
        
        font-weight: bold;
        font-size: 1.1rem;
    }
    
    a{
        width: 100%;
    display: inline-block;
    white-space: nowrap;
    overflow: hidden !important;
    text-overflow: ellipsis;
    color:blue;
    &:hover{
        color: #000875;
    }
    }
    
`;