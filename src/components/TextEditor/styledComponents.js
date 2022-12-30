import styled from 'styled-components'

export const Button = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.textColor};
  cursor: pointer;
`
export const TextArea = styled.textarea`
  background-color: transparent;
  width: 100%;
  height: 85%;
  color: #f1f5f9;
  padding: 20px;

  font-weight: ${props => (props.isBoldActive ? 'bold' : 'normal')};
  font-style: ${props => (props.isItalicActive ? 'italic' : 'normal')};
  text-decoration: ${props =>
    props.isUnderlineActive ? 'underline' : 'normal'};
`
