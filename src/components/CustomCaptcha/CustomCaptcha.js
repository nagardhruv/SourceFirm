import React from 'react';
import Reload from '../../assets/img/icons/reload.png';
let captcha_value = '';
let captcha_number = '';


export const loadcaptcha = (numberOfCharacters) => {

    captcha_number = numberOfCharacters;
    let length = parseInt(numberOfCharacters),
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    let captcha = retVal;
    captcha_value = captcha;
    let canvas = document.getElementById('canv'),
        ctx = canvas.getContext('2d');
    let text = captcha;
    let lineheight = 30;
    let lines = text.split('\n');
    ctx.canvas.width = parseInt(length) * 25;
    ctx.canvas.height = (lines.length * lineheight);
    ctx.fillStyle = "#548CA80f"
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    let num = 0;
    for (let i = 0; i < parseInt(length); i++) {
        num = parseInt(num) + 1;
        let heigt_num = 20 * num;
        ctx.textBaseline = "middle";
        ctx.font = "22px Gordita";
        ctx.fillStyle = "#343434";
        ctx.fillText(retVal[i], heigt_num, Math.round(Math.random() * (15 - 12) + 12));
    }
    document.getElementById("reload_href").onclick = function () {
        loadcaptcha(captcha_number)
    }
    let capInput = document.getElementById('captcha_code_input');
    if (capInput) capInput.value = captcha_value;
};

export const LoadCanvasTemplate = (props) => {

    return (
        <div className="captchaCode-container">
            <div>
                <canvas className="captcha-canvas" id="canv">
                </canvas>
            </div>
            <div>
                <a id="reload_href" style={{ cursor: "pointer", color: "blue" }}>
                    <img className="reload-btn" src={Reload} alt="img" onClick={props.clearCode} />
                </a>
            </div>
        </div>
    );
};
export const LoadCanvasTemplateNoReload = '<canvas className="captcha" id="canv"></canvas><div><a id="reload_href" ></a></div>';
export const validateCaptcha = (userValue, reload = true) => {
    if (userValue !== captcha_value) {
        if (reload === true) {
            loadcaptcha(captcha_number);
        }
        return false;
    }
    else {
        return true;
    }
};