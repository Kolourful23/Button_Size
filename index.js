function buttonSize(options) {
    let buttonSize = document.querySelectorAll('.buttonSize');

    if (options.buttonSize_type === 'large')
        options.buttonSize_type = '30px';
    else if(options.buttonSize_type === 'medium')
        options.buttonSize_type = '20px';
    else options.buttonSize_type = '10px';
    buttonSize.forEach(buttonSize => {
        buttonSize.style.width = `${options.buttonSize_type}`;
    })
}

module.exports.buttonSize = buttonSize;