import styled from 'styled-components';

export const MainHome = styled.div`
    width: 100%;
    height: 100vh;
    background-color: #7BAF9E;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;

    .column {
        width: 60%;
        padding: 20px;
    }

    .add-livros {
        background-color: #f0f0f0;
        border-radius: 10px;
        padding: 20px;
    }


    .lista-livros {
        background-color: #f0f0f0;
        border-radius: 10px;
        padding: 20px;
    }

    ul {
        list-style: none;
    }

    .lista-livros li {
        background-color: #7BAF9E;
        border: solid 2px #000075;
        border-radius: 10px;
        margin-top: 1rem;
    }

    .lista-livros button {
        width: 15rem;
        padding: 10px 20px;
        color: #ffffff; 
        border: none; 
        border-radius: 30px; 
        cursor: pointer; 
        font-size: 15px; 
        margin-bottom: 1rem;
    }

    div {
        text-align: center;

        h1 {
            font-size: 3rem; 
            color: #E8EFCF; 
            margin-bottom: 1rem;
        }

        label {
            opacity: .7;
            color: #000075;
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
    }

    @media screen and (max-width: 1007px) {
        .column {
            width: 95%; 
            text-align: center;
            padding: 0 20px;
            margin-bottom: 20px;
        }
    }
`;
