function buttonSize(options) {
    let buttonSize = document.querySelectorAll('.buttonSize');

    if (options.buttonSize_type === 'large')
        options.buttonSize_type = '200px';
    else if(options.buttonSize_type === 'medium')
        options.buttonSize_type = '150px';
    else options.buttonSize_type = '50px';
    buttonSize.forEach(buttonSize => {
        buttonSize.style.width = `${options.buttonSize_type}`;
    })
}

module.exports.buttonSize = buttonSize;
