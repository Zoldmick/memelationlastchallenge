import styled from 'styled-components'

export const PageDefault = styled.div`
    display:flex;
    flex-direction:row;
    height:15vh;
    box-sizing:border-box;

    background:whitesmoke;
    border-bottom:3px solid ;
    padding-left:20px;
    padding-right:20px;
    padding:10px;
    margin-bottom:50px;
    justify-content:space-between;

    @media(max-width: 800px){
        flex-direction:column;
        height:35vh;
    }
`;

export const NmEmpresa = styled.div`
    display:flex;
    height:10vh;
    
    padding:16px;
`;

export const Logotipo = styled.div`
    height:10vh;
    width:20vw;

    padding:10px;
`;

export const H1 = styled.h1`
    font-weight:800;
    font-style:oblique;
    text-decoration:underline;
    
    color:black;
    letter-spacing:10px;

    @media(max-width: 800px){
        text-align:center;
    }
`;