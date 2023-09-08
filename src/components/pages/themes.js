import styled from 'styled-components'

import styled , { createGlobalStyle , css } from 'styled-components' ;   

// o tema agora está totalmente digitado
export const MyComponent = styled.div ` 
color: ${props => props.theme.colors.main};
`;

export const Title = styled.h1`
   color:  ${props => props.theme.titleColor};
   transition: all .5s ease;    
`;

const Button = styled.button`
  background: palevioletred;
  border-radius: 3px;
  border: none;
  color: white;
`

const TomatoButton = styled(Button)`
  background: tomato;
`

render(
  <>
    <Button>I'm purple.</Button>
    <br />
    <TomatoButton>I'm red.</TomatoButton>
  </>
)

export const lightTheme = {
    body: '#2196F3' ,
    text: '#363537' 
}

export const darkTheme = {
    body: '#363537' ,
    text: '#FAFAFA' 
}

const Wrapper = ( { mensagem } ) => {     
    return < StyledWrapper > { message } </ StyledWrapper > ; 
}