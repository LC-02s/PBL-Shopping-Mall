import React, { useEffect, useRef, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import styled, { css } from 'styled-components'
import { modalOff } from '../context/actions/modal';
import LoginForm from './form/LoginForm';
import CartList from './cart/CartList';
import Confirm from './Confirm';
import CartSummary from './cart/CartSummary'

export default function CommonModal() {

    const { isVisible, component, arrowDimmedClickToClose } = useSelector(({ modal }) => modal);

    const dispatch = useDispatch();

    const [ visibleDelay, setVisibleDelay ] = useState(false);
    const delayTimer = useRef();
    useEffect(() => {
        // const disabledScroll = (e) => e.preventDefault();
        if (isVisible) {
            clearTimeout(delayTimer.current);
            delayTimer.current = setTimeout(()=> setVisibleDelay(true), 180);
            document.body.classList.add('stopScroll');
            // window.addEventListener('wheel', disabledScroll, { passive: false });
        }
        return () => {
            document.body.classList.remove('stopScroll');
            setVisibleDelay(false);
            // window.removeEventListener('wheel', disabledScroll, { passive: false });
        }
    }, [ isVisible ]);

    const interactionOnType = {
        login: 'center',
        cart: 'right',
        confirm: 'center',
    };

    return (
        <ModalContainer $active={isVisible} $delay={visibleDelay} $type={interactionOnType[component] ?? false}>
            <ModalBox>
                {
                (component === 'login' && <LoginForm useToModal={true} />) ||
                (component === 'cart' && <div><CartList useToModal={true} /><CartSummary useToModal={true} /></div>) ||
                (component === 'confirm' && <Confirm />)
                }
            </ModalBox>
            <DimmedEl onClick={() => arrowDimmedClickToClose && dispatch(modalOff())}></DimmedEl>
        </ModalContainer>
    )
}

// styled components
const ModalBox = styled.div``;
const DimmedEl = styled.div``;

const ModalContainer = styled.div`
    position: fixed;
    z-index: 99999;
    top: 0px;
    bottom: 0px;
    left: 0px;
    right: 0px;
    display: inline-block;
    overflow: hidden;
    pointer-events: ${({ $active }) => $active ? 'all' : 'none'};

    & > ${ DimmedEl } {
        position: absolute;
        z-index: 1;
        top: 0px;
        bottom: 0px;
        left: 0px;
        right: 0px;
        display: inline-block;
        background-color: rgba(0,20,40,0.3);
        backdrop-filter: blur(2px);
        opacity: ${({ $active }) => $active ? 1 : 0};
        transition: opacity 0.3s;
    }

    & > ${ ModalBox } {
        position: relative;
        z-index: 9;
        width: 100%;
        height: 100%;
        display: inline-flex;
        flex-flow: row nowrap;

        ${({ $type }) => $type === 'center' && css`
            justify-content: center;
            align-items: center;
            
            & > form {
                max-width: 480px;
                width: 100%;
                height: auto;
                max-height: min-content;
                pointer-events: all;
                transform: translateY(-10%);
                transition: transform 0.3s ease-out;
                transition-delay: 0.18s;
            }
            & > form { ${({ $delay }) => $delay && css`transform: translateY(0%);`} }
        `}

        ${({ $type }) => $type === 'right' && css`
            justify-content: flex-end;
            align-items: stretch;
            
            & > div {
                position: relative;
                max-width: 420px;
                width: 100%;
                height: 100%;
                max-height: 100%;
                padding: 20px;
                background-color: var(--brand-white);
                pointer-events: all;
                overflow-y: auto;
                transform: translateX(30%);
                transition: transform 0.3s ease-out;
                transition-delay: 0.18s;
                
                @media (max-width: 500px) {min-width: auto;}
            }
            & > div { ${({ $delay }) => $delay && css`transform: translateX(0%);`} }
        `}

        visibility: ${({ $active }) => $active ? 'visible' : 'hidden'};
        opacity: ${({ $delay }) => $delay ? 1 : 0};
        transition: opacity 0.3s;
        transition-delay: 0.2s !important;
        pointer-events: none;
    }
`;

export const ModalCloseBtn = styled.button`
    position: absolute;
    top: -14px;
    right: -14px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: 8px;
    border: 1px solid var(--grayscale-200);
    outline-color: black;
    border-radius: 50%;
    background-color: var(--brand-white);
    transition: background 0.2s;

    &:hover,
    &:focus {background-color: var(--grayscale-100);}
    & > img {
        width: 24px;
        height: 24px;
    }
`;

export const PlainModalCloseBtn = styled(ModalCloseBtn)`
    position: static;
    top: auto;
    right: auto;
    border: none;
`;