import styled from 'styled-components'

export const Container = styled.div`
    display:flex;
    margin-right:30px;
    margin-top:20px;
    margin-bottom:15px;
    min-width:100px;
    max-width:450px;
    margin-left:auto;
    margin-right:auto;
    justify-content:space-between;
    background-color:whitesmoke;
`;

export const Button = styled.input`
    border:none;
    color:white;
    width:70px;
    height:32px;
    background-color:tomato;

    &:hover{
        opacity:0.8;
    }
`;

export const Text = styled.p`
    color:black;
    width:250px;
    margin:10px;
    overflow:auto;
`;

export const Comment = styled.input`
    width:300px;
    margin:0 auto;
    border:0.1em groove black;
    box-shadow:1px 1px 1px black;
    color:grey;

    @media (max-width: 800px){
        width:160px;
    }
`;