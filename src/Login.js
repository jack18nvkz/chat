import React from "react";
import './styles/Login.css';

function Login(){
    const inputs = document.getElementsByTagName('input');
    const buttons = document.getElementsByTagName('button');
    let state = 'main';

    function onClickLogin(){
        buttons[0].style.display = 'unset';
        buttons[1].style.display = 'none';
        buttons[2].style.display = 'unset';
        inputs[0].style.display = 'unset';
        inputs[1].style.display = 'unset';
        inputs[2].style.display = 'none';
        state = 'login';
    }

    function onClickRegister(){
        if (state === 'register'){

        }

        buttons[0].style.display = 'none';
        buttons[1].style.display = 'unset';
        buttons[2].style.display = 'unset';
        inputs[0].style.display = 'unset';
        inputs[1].style.display = 'unset';
        inputs[2].style.display = 'unset';
        state = 'register';
    }

    function onClickBack(){
        buttons[0].style.display = 'unset';
        buttons[1].style.display = 'unset';
        buttons[2].style.display = 'none';
        inputs[0].style.display = 'none';
        inputs[1].style.display = 'none';
        inputs[2].style.display = 'none';
        state = 'main';
    }

    return (
        <div className={"container"}>
            <input className={'input'} id={'userName'} placeholder={'Username'} required></input>
            <input className={'input'} id={'password'} placeholder={'Password'} required></input>
            <input className={'input'} id={'confirmPassword'} placeholder={'Confirm password'} required></input>
            <button id={'login'} onClick={onClickLogin}>Log In</button>
            <button id={'register'} onClick={onClickRegister}>Register</button>
            <button id={'back'} onClick={onClickBack} >Back</button>
        </div>
    );
}

export default Login;