function buttonSize(options) {
    let buttonSizeLarge = document.querySelectorAll('.buttonSizeLarge');
    let buttonSizeMed = document.querySelectorAll('.buttonSizeMed');
    let buttonSizeSmaller = document.querySelectorAll('.buttonSizeSmaller');

    if (options.buttonSizeLarge_type === 'large')
        options.buttonSizeLarge_type = '200px';
    if (options.buttonSizeMed_type === 'medium')
        options.buttonSizeMed_type = '150px';
    if (options.buttonSizeSmaller_type === 'smaller')
        options.buttonSizeSmaller_type = '100px';
        
    buttonSizeLarge.forEach(buttonSizeLarge => {
        buttonSizeLarge.style.width = `${options.buttonSizeLarge_type}`;
    })
    buttonSizeMed.forEach(buttonSizeMed => {
        buttonSizeMed.style.width = `${options.buttonSizeMed_type}`;
    })
    buttonSizeSmaller.forEach(buttonSizeSmaller => {
        buttonSizeSmaller.style.width = `${options.buttonSizeSmaller_type}`;
    })
}

module.exports.buttonSize = buttonSize;
