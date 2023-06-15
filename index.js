function buttonSize(options) {
    let buttonSizeLarge = document.querySelectorAll('.buttonSizeLarge');
    let buttonSizeMed = document.querySelectorAll('.buttonSizeMed');
    let buttonSizeSmall = document.querySelectorAll('.buttonSizeSmall');

    if (options.buttonSizeLarge_type === 'large')
        options.buttonSizeLarge_type = '200px';
    if (options.buttonSizeMed_type === 'medium')
        options.buttonSizeMed_type = '150px';
    if (options.buttonSizeSmall_type === 'small')
        options.buttonSizeSmall_type = '50px';
        
    buttonSizeLarge.forEach(buttonSizeLarge => {
        buttonSizeLarge.style.width = `${options.buttonSizeLarge_type}`;
    })
    buttonSizeMed.forEach(buttonSizeMed => {
        buttonSizeMed.style.width = `${options.buttonSizeMed_type}`;
    })
    buttonSizeSmall.forEach(buttonSizeSmall => {
        buttonSizeSmall.style.width = `${options.buttonSizeSmall_type}`;
    })
}

module.exports.buttonSize = buttonSize;
