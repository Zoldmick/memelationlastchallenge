import styled from 'styled-components'

export const Input = styled.input`
  height:35px;
  width:35vw;

  font-size:16px;
  font-style:oblique;
  font-weight:400;
  color:black;

  margin:0 0 10px 10px;

  padding-left:10px;
  padding-right:10px;
  border-top-right-radius:16px;
  border-bottom-left-radius:13px;
  border-bottom:5px solid blue;
`;

export const Text = styled.label`
    width:120px;
    line-height:40px;
    margin-top:20px;
    font-size:18pt;
    margin-right:20px;
    margin-left:40px;
`;

export const Checkbox = styled.input`
    width:30px;
    height:40px;
    margin-left:10px;
`; 

export const Button = styled.input`
    display:block;
    margin:0 auto;
    font-size:20px;
    width:45vw;
`;