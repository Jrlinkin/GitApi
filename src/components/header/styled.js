import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    width: 100%;
    justify-content: flex-end;  
    padding-right: 3% ;
    input{
        border: 2px solid #ccc;
        padding: 5px;
        width: 30%;
    }

    button{
        background-color: #0b79ea;
        color: white;
        margin-left: 12px;
        padding: 0 16px;
        transition: all .3s;
        position: relative;

        &:hover{
            background-color: black;
            transition: all .1s;
            box-shadow: 0px 3px 0px 0px orange;
        }
    }
`;