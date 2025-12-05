import styled, { css } from "styled-components";

export const Container = styled.div`
    min-height: 100px;
    z-index: 99;
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5px 50px;
    background-color: ${ props => props.$changeBackground ? '#000' : 'transparent'};
    transition: background-color 1.5s ease-in-out;
    img {
        width: 10%;
    }

`
export const Li = styled.li`
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;
    font-size: 28px;
    position: relative;

    a {
        text-decoration: none;
        color: #FFFFFF;
        }
    
    &::after {
            content: '';
            height: 3px;
            width: ${(props) => (props.$isActive ? '100%' : 0)};
            background-color: #189b20;
            position: absolute;
            bottom: -10px;
            left: 50%;
            transform: translateX(-50%);
            transition: width 0.5s ease-in-out;
        }

        &:hover::after {
            width: 100%;
        }
`
export const Menu =  styled.ul`
    display: flex;
    list-style: none;
    gap: 50px;
`