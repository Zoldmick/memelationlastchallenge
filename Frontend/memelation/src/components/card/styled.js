import styled from 'styled-components'

export const MomWrapper = styled.div`
    width:100%;
    height:100vh;
    display:flex ;
    align-items: center;
    justify-content: center;
    background:white;
    overflow: hidden;
`;

export const Caard = styled.div`
    display: grid;
    grid-template-columns: 300px;
    grid-template-rows: 210px 210px 80px;
    grid-template-areas: "image" "text" "stats";
 
    font-family: 'Times New Roman', Times, serif;
    border-radius: 18px;
    background: #deb887;
    box-shadow: 5px 5px 15px rgba(0,0,0,0.9);
    text-align: center;

    transition: 0.5s ease;
    cursor:pointer;

    @media  (max-width: 800px){
        grid-template-columns: 265px;
        grid-template-rows: 200px 200px 80px;
        background-color:#deb890;
        box-shadow: 4px 4px 10px rgba(0,0,0,0.9);
    }

    &:hover{
        transform:scale(1.1);
        margin-bottom:20px;
        box-shadow:5px 5px 15px rgba(0,0,0,0.9);
    }
`;

export const ImageCard = styled.img`  
    border-top-left-radius: 15px;
    border-top-right-radius: 15px; 
    margin:0 auto;
    width:100%;
    height:100%;
`;

export const TextCard = styled.div`
    grid-area:text;
    margin:25px;
`;

export const Span = styled.span`
    color:rgb(90, 60, 40);
    font-family: "Comic sans MS";
    font-weight:bolder;
    display:block;
    text-transform:uppercase;
    font-size:13px;
`;

export const Curtidas = styled.span`
    float:right;
    margin-top:20px;
    font-size:16pt;
    color:rgba(10,30,90);
    font-weight:bold;
`;

export const H2 = styled.h2`
    margin-top:0px;
    font-family:"Comic sans MS";
    color:rgba(150,10,10);
    font-size:28px;

    &:hover{
        color:rgba(170,20,1);
        font-size:29px;
    }
`;

export const CardStats = styled.div`
    grid-area: stats;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows:1fr;
    border-bottom-left-radius:15px ;
    border-bottom-right-radius:15px ;
    background:brown;
`;

export const Stat = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:10px;
    color: white;
`;

export const Value = styled.div`
    font-size:22px;
    font-weight: 500;
`;

export const Page = styled.span`
    margin:15px;
`;

export const Img = styled.img`
    float: left;
    margin-top:10px;
`;

export const Type = styled.div`
    font-size:11px;
    font-weight: 300;
    text-transform: uppercase;
`;

export const CardStatBorder = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding:10px;
    color: white;
    border-left:1px solid rgb(172,26,87);
    border-right:1px solid rgb(172,26,87);
`;

export const Sup = styled.sup`
    font-size:12px;
`;