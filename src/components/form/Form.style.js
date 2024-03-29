import styled, { css } from "styled-components";

// styled components
export const FormContainer = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const FormEl = styled.form`
    display: block;
    width: 100%;
    max-width: 600px;
    padding: 32px 40px 40px;
    margin: 0px auto;
    border: 1px solid var(--grayscale-200);
    border-radius: 18px;
    background-color: var(--brand-white);
    backdrop-filter: blur(2px);

    @media (max-width: 768px) {max-width: 100%;}
`;

export const FormTitle = styled.h2`
    display: block;
    width: 100%;
    height: auto;
    margin: 0px 0px 24px;
    font-size: 20px;
    font-weight: 700;
    color: var(--grayscale-900);
    text-align: left;
`;

export const FormFieldset = styled.fieldset`
    display: block;
    width: 100%;
    height: auto;

    & + & {margin: 14px 0px 0px;}
    & > label {
        display: block;
        width: 100%;
        height: auto;
        padding: 0px 4px;
        margin: 0px 0px 4px;
        font-size: 15px;
        font-weight: 500;
        color: var(--grayscale-600);
    }
    & > input {
        display: block;
        width: 100%;
        height: 42px;
        padding: 8px 14px;
        border: 1px solid var(--grayscale-200);
        font-size: 16px;
        font-weight: 400;
        color: var(--grayscale-700);
        border-radius: 6px;
        background-color: var(--brand-white);
        outline: none;
        transition: border 0.2s, box-shadow 0.2s;
        ${({ $error }) => $error && css`
            border-color: var(--ui-warning) !important;
        `}
    }
    & > input::placeholder {
        color: var(--grayscale-400);
    }
    & > input:focus {
        border-color: #414143;
        box-shadow: 0px 0px 0px 2px rgba(65,65,67,0.3);
        ${({ $error }) => $error && css`
            box-shadow: 0px 0px 0px 2px rgba(225,75,77,0.3);
        `}
    }
`;

export const FormBtn = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 54px;
    padding: 12px;
    margin: 48px 0px 0px;
    font-size: 18px;
    font-weight: 500;
    color: var(--brand-white);
    outline-color: #414143;
    border-radius: 6px;
    background-color: #414143;
    transition: background 0.2s;

    &:hover,
    &:focus {background-color: #FCB041;}
    &:disabled,
    &:disabled:hover,
    &:disabled:focus {
        background-color: var(--grayscale-300);
    }
    & > img {
        width: 28px;
        height: 28px;
    }
`;

export const FormInfoTxt = styled.p`
    position: relative;
    display: block;
    width: 100%;
    height: auto;
    padding-left: 26px;
    margin: 12px 0px 6px;
    font-size: 15px;
    font-weight: 400;
    color: var(--grayscale-500);
    line-height: 22px;

    & > span {
        font-size: inherit;
        font-weight: inherit;
        color: inherit;
        word-break: keep-all;
    }
    & > img {
        position: absolute;
        top: 0px;
        left: 2px;
        display: inline-block;
        width: 20px;
        height: 20px;
    }
`;

export const FormConfirmList = styled.ol`
    display: block;
    width: 100%;
    height: auto;
    padding-left: 8px;
    margin: 0px 0px 8px;
`;

export const FormConfirmItem = styled.li`
    position: relative;
    padding-left: 24px;
    font-size: 15px;
    font-weight: 400;
    color: var(--grayscale-600);
    line-height: 20px;
    ${({ $confirmed }) => $confirmed && css`
        color: var(--grayscale-500);
        text-decoration: line-through;
    `};

    & + & {margin: 4px 0px 0px;}
    &::before {
        content: '';
        position: absolute;
        top: 0px;
        left: 8px;
        bottom: 0px;
        display: inline-block;
        width: 4px;
        height: 4px;
        margin: auto 0px;
        border-radius: 50%;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-color: var(--grayscale-600);
        ${({ $confirmed }) => $confirmed && css`
            top: 0px;
            bottom: auto;
            left: 0px;
            width: 20px;
            height: 20px;
            margin: 0px;
            border-radius: 0px;
            background-color: transparent;
            /* background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2328c28b' d='M16.03 10.03a.75.75 0 1 0-1.06-1.06l-4.47 4.47l-1.47-1.47a.75.75 0 0 0-1.06 1.06l2 2a.75.75 0 0 0 1.06 0z'/%3E%3Cpath fill='%2328c28b' fill-rule='evenodd' d='M12 1.25C6.063 1.25 1.25 6.063 1.25 12S6.063 22.75 12 22.75S22.75 17.937 22.75 12S17.937 1.25 12 1.25M2.75 12a9.25 9.25 0 1 1 18.5 0a9.25 9.25 0 0 1-18.5 0' clip-rule='evenodd'/%3E%3C/svg%3E"); */
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%2328c28b' d='m10 13.6l5.9-5.9q.275-.275.7-.275t.7.275q.275.275.275.7t-.275.7l-6.6 6.6q-.3.3-.7.3t-.7-.3l-2.6-2.6q-.275-.275-.275-.7t.275-.7q.275-.275.7-.275t.7.275z'/%3E%3C/svg%3E");
        `}
    }
`;

export const FormErrorMessage = styled.p`
    position: relative;
    display: block;
    width: 100%;
    margin: 4px 0px;
    padding-left: 22px;
    font-size: 15px;
    font-weight: 400;
    color: var(--ui-warning);
    line-height: 22px;
    word-break: keep-all;

    &::before {
        content: '';
        position: absolute;
        top: 2px;
        left: 0px;
        display: inline-block;
        width: 18px;
        height: 18px;
        background-repeat: no-repeat;
        background-size: 100% 100%;
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath fill='%23e14b4d' d='M12 7.25a.75.75 0 0 1 .75.75v4a.75.75 0 0 1-1.5 0V8a.75.75 0 0 1 .75-.75M12 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2'/%3E%3Cpath fill='%23e14b4d' fill-rule='evenodd' d='M8.723 2.051c1.444-.494 2.34-.801 3.277-.801c.938 0 1.833.307 3.277.801l.727.25c1.481.506 2.625.898 3.443 1.23c.412.167.767.33 1.052.495c.275.16.55.359.737.626c.185.263.281.587.341.9c.063.324.1.713.125 1.16c.048.886.048 2.102.048 3.678v1.601c0 6.101-4.608 9.026-7.348 10.224l-.027.011c-.34.149-.66.288-1.027.382c-.387.1-.799.142-1.348.142c-.55 0-.96-.042-1.348-.142c-.367-.094-.687-.233-1.027-.382l-.027-.011C6.858 21.017 2.25 18.092 2.25 11.99v-1.6c0-1.576 0-2.792.048-3.679c.025-.446.062-.835.125-1.16c.06-.312.156-.636.34-.9c.188-.266.463-.465.738-.625c.285-.165.64-.328 1.052-.495c.818-.332 1.962-.724 3.443-1.23zM12 2.75c-.658 0-1.305.212-2.92.764l-.572.196c-1.513.518-2.616.896-3.39 1.21a7.137 7.137 0 0 0-.864.404a1.648 1.648 0 0 0-.208.139a.386.386 0 0 0-.055.05a.409.409 0 0 0-.032.074c-.02.056-.042.136-.063.248a7.438 7.438 0 0 0-.1.958c-.046.841-.046 2.015-.046 3.624v1.574c0 5.176 3.87 7.723 6.449 8.849c.371.162.586.254.825.315c.228.059.506.095.976.095s.748-.036.976-.095c.24-.06.454-.153.825-.315c2.58-1.126 6.449-3.674 6.449-8.849v-1.574c0-1.609 0-2.783-.046-3.624a7.423 7.423 0 0 0-.1-.958a1.738 1.738 0 0 0-.063-.248a.408.408 0 0 0-.032-.074a.385.385 0 0 0-.055-.05a1.64 1.64 0 0 0-.208-.14a7.135 7.135 0 0 0-.864-.402c-.774-.315-1.877-.693-3.39-1.21l-.573-.197C13.305 2.962 12.658 2.75 12 2.75' clip-rule='evenodd'/%3E%3C/svg%3E");
    }
`;

export const FormRegisterLink = styled.p`
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 28px 42px;

    & > a {
        display: inline-block;
        padding: 4px;
        font-size: 15px;
        font-weight: 400;
        color: var(--grayscale-600);
    }
`;