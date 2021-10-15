import styled from 'styled-components'

export const ContactContainer = styled.div`
color: #fff;
background: #f9f9f9;
padding-top: 50px;
@media screen and  (max-width: 768px) {
  padding: 50px 0;
}
`

export const ContactWrapper = styled.div`
display: grid;
z-index: 1;
height: 750px;
width: 100%auto;
max-width: 1100px;
margin-right: auto;
margin-left: auto;
padding: 0 24px;
justify-content: center;
`

export const ContactRow = styled.div`
display: grid;
grid-auto-columns: minmax(auto, 1fr);
align-items: center;
@media screen and (max-width: 820px) {
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
}
`
export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`

export const ContactTitle = styled.h3`
  color: #000;
  display: flex;
  justify-content: center;
  max-width: 540px;
  padding-top: 0;
`

export const ContactInput = styled.input`
  display: flex;
  justify-content: center;
  height: 50px;
  
  padding-left: 15px;
  font-size: 115%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  @media screen and (max-width: 820px) {
    display: flex;
    height: 50px;
    width: 300px;
    padding-left: 15px;
    font-size: 115%;
  }
`

export const ContactMessage = styled.input`
  display: flex;
  justify-content: center;
  height: 50px;
  width: 300px;
  padding-left: 15px;
  font-size: 115%;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  margin-top: 6px;
  margin-bottom: 16px;
  resize: vertical;
  @media screen and (max-width: 820px) {
    display: flex;
    height: 50px;
    width: 300px;
    padding-left: 15px;
    font-size: 115%;
  }
`

export const SubmitButton = styled.button`
    display: flex;
    justify-content: center;
    background:#ccc;
    color: black;
    font-size: 100%;
    height: 50px;
    width: 300px;
    padding: 15px; 
    border:0 none;
    cursor:pointer;
    -webkit-border-radius: 5px;
    border-radius: 5px;
    &:hover {
    transition: all 0.2s ease-in-out;
    background: #686868;
    color: white;
  }
`