import styled from 'styled-components';
import titleImg from '../../assets//deep-blue-underwater-mystery-adventure-generated-by-ai.jpg';

export const Title = styled.div`
    width: 100vw;
    height: 100vh;
    padding: 0px;
    margin: 0px;
    background-color: #7F9F80;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), ${`url(${titleImg})`};
    background-size: cover;
    background-position: center; 

    
    h1 {
        position: relative;
        display: inline-block;
        font-size: 5rem; 
        color: #ffff; 
        margin-bottom: 1rem;
        text-align: center;
        padding: 0px;
        margin: 0px;
    }

    h1::after {
        content: "";
        position: absolute;
        bottom: -30px;
        left: 0;
        width: 100%;
        height: 20px;
        background-color: #fff;
    }


`