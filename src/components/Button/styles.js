import styled from "styled-components";

export const Button = styled.button`
    border-radius: 30px;
    background: ${props => props.theme === 'primary' ? 'linear-gradient(180deg, #fe7e5d 0%, #ff6378 100%)' : 'transparent'};
    font-size: 16px;
    border: ${props => props.theme === 'primary' ? 'none' : '1px solid #fff'};
    color: #fff;
    padding: 16px 32px;
    cursor: pointer;
    width: fit-content;

    &:hover { 
        ${props => props.theme === 'primary' ? 'opacity: 0.8;' : 'background-color: #fff; color: #181f36; opacity: 0.8;'}
    }

    &:active {
        ${props => props.theme === 'primary' ? 'opacity: 0.5;' : 'background-color: #fff; color: #181f36; opacity: 0.5;'}   
    }
`
