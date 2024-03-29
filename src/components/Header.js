import React, { useEffect, useRef, useState } from 'react'
import headerLogo from '../assets/header-logo.svg'
import cartDefaultIcon from '../assets/cart-default.svg'
import cartCheckIcon from '../assets/cart-check.svg'
import registerIcon from '../assets/register.svg'
import loginIcon from '../assets/login.svg'
import logoutIcon from '../assets/logout.svg'
import styled, { css } from 'styled-components'
import { CommonWrapper, CommonBtnMD } from './Common.style'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { modalOn } from '../context/actions/modal';
import { getProductsToCart } from '../context/actions/cart'
import { signOutUser } from '../auth'

export default function Header() {

    const itemLength = useSelector(({ cart }) => cart.itemLength);
    const isValid = useSelector(({ user }) => user.isValid);

    const [ isScroll, setIsScroll ] = useState(false);
    const headerRef = useRef();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const headerScroll = () => {
            const scrollCondition = window.scrollY > headerRef.current.offsetHeight;
            setIsScroll(scrollCondition);
            if (document.body.offsetWidth <= 500 && scrollCondition) {
                headerRef.current.style.setProperty('left', `-${window.scrollX}px`);
            } else {
                headerRef.current.style.setProperty('left', '');
            }
        }
        window.addEventListener('scroll', headerScroll);
        window.addEventListener('resize', headerScroll);
        return () => {
            window.removeEventListener('scroll', headerScroll);
            window.removeEventListener('resize', headerScroll);
        }
    }, []);

    return (
        <HeaderContainer ref={headerRef} $isScroll={isScroll}>
            <HeaderWrapper>
                <HeaderLogo>
                    <Link to='/'><img src={headerLogo} alt='Shop PBL Logo' /></Link>
                </HeaderLogo>
                <HeaderBtnWrap>
                    <CartBtn onClick={() => {dispatch(modalOn({ component: 'cart' })); dispatch(getProductsToCart());}}>
                        {
                        itemLength > 0 && 
                            <CartLengthBadge>{ itemLength }</CartLengthBadge>
                        }
                        <img src={itemLength > 0 ? cartCheckIcon : cartDefaultIcon} alt={itemLength > 0 ? 'checked cart icon' : 'empty cart icon'} />
                    </CartBtn>
                    {
                    isValid ? 
                        <React.Fragment>
                            {/* profile */}
                            <CommonBtnMD $iconBtn={true} onClick={() => signOutUser()}>
                                <img src={logoutIcon} alt='logout icon' />
                                <span>로그아웃</span>
                            </CommonBtnMD>
                        </React.Fragment> : 
                        <React.Fragment>
                            <CommonBtnMD onClick={() => navigate('/register')} $iconBtn={true}>
                                <img src={registerIcon} alt='register icon' />
                                <span>회원가입</span>
                            </CommonBtnMD>
                            <CommonBtnMD onClick={() => dispatch(modalOn({ component: 'login', arrowDimmedClickToClose: false }))} $primary={true} $iconBtn={true}>
                                <img src={loginIcon} alt='login icon' />
                                <span>로그인</span>
                            </CommonBtnMD>
                        </React.Fragment>
                    }
                </HeaderBtnWrap>
            </HeaderWrapper>
        </HeaderContainer>
    )
}

// styled components
const HeaderContainer = styled.header`
    position: ${({ $isScroll }) =>  $isScroll ? 'fixed' : 'absolute'};
    z-index: 9999;
    top: 0px;
    left: 0px;
    right: 0px;
    min-width: 500px;
    border-bottom: 1px solid var(--grayscale-200);
    background-color: var(--brand-white);
    ${({ $isScroll }) =>  $isScroll ? 
        css`animation: headerScrollForward 0.2s ease-in-out;` : 
        css`animation: headerScrollBackward 0.1s ease-in;`
    };

    @keyframes headerScrollForward {
        from { top: -32px; }
        to { top: 0px; }
    }
    @keyframes headerScrollBackward {
        from { top: 16px; }
        to { top: 0px; }
    }
`;

const HeaderWrapper = styled(CommonWrapper)`
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
`;

const HeaderLogo = styled.h1`
    display: block;
    width: auto;
    height: auto;

    & > a,
    & > a img {
        display: inline-block;
        width: 160px;
        height: auto;
    }
`;

const HeaderBtnWrap = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: flex-end;
    align-items: center;
    width: auto;
`;

const CartLengthBadge = styled.span`
    position: absolute;
    top: -4px;
    right: -4px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    width: 18px;
    height: 18px;
    font-size: 12px;
    font-weight: 600;
    color: var(--brand-white);
    border-radius: 50%;
    background-color: #49DAC2;
`;
const CartBtn = styled.button`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    height: auto;
    padding: 6px;
    margin-right: 16px;
    border-radius: 50%;
    transition: background 0.2s;
    
    &:hover {background-color: var(--grayscale-100);}
    & > img {
        width: 28px;
        height: 28px;
        color: var(--grayscale-700);
    }
`;
