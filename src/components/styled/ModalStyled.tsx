import styled from 'styled-components';


export const ModalContainer = styled.div`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #7F9F80;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 20px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
    max-width: 70%;
    max-height: 100%;
    
    h2 {
        position: relative;
        display: inline-block;
        font-size: 1.5rem; 
        color: #ffff; 
        margin-bottom: 1rem;
        text-align: center;
        padding: 0px;
        margin: 0px;
    }

    input {
        width: calc(100% - 44px);
        height: 2rem;
        border: 2px solid #000075; 
        border-radius: 10px;
        margin-bottom: 1rem;
        padding: 0 10px;
        text-align: center;
    }

    textarea {
        width: calc(100% - 44px);
        border: 2px solid #000075;
        height: 5rem;
        border-radius: 10px;
        padding: 10px;
        margin-bottom: 1rem;
    }

    button {
        width: calc(100% - 40px);
        padding: 10px 20px;
        background-color: #52616A;
        color: #ffffff; 
        border: none; 
        border-radius: 30px; 
        cursor: pointer; 
        font-size: 15px; 
        margin-bottom: 1rem;
    }

    button a {
        text-decoration: none;
        color: #ffffff;
        transition: background-color 0.3s ease;
    }

    button:hover {
        background-color: #59886B;
        color: #ffffff;
    }

    @media screen and (max-width: 1007px) {
        
            text-align: center;
            padding: 0;
            margin-bottom: 20px;
        
    }
`;



