const container = document.getElementsByClassName('container');
const btn = document.getElementById('btn');
const colorName = document.getElementById('colorName');
const navBar_dark = document.getElementsByClassName('navbar-dark');
const darkMode = document.getElementById('dark-mode-btn');
const footerAnchor = document.getElementsByClassName('footer-a');
const footer = document.getElementsByClassName('footer');

let colors = [
    'Aqua', 'Aquamarine', 'Blue', 'BlueViolet', 'CadetBlue', 'CornflowerBlue', 'Cyan', 'DarkBlue', 'DarkCyan', 'DarkSlateBlue', 'DarkTurquoise', 'DeepSkyBlue', 'DodgerBlue', 'LightBlue', 'LightCyan', 'LightSkyBlue', 'LightSteelBlue', 'MediumAquamarine', 'MediumBlue', 'MediumSlateBlue', 'MediumTurquoise', 'MidnightBlue', 'Navy', 'PaleTurquoise', 'PowderBlue', 'RoyalBlue', 'SkyBlue', 'SlateBlue', 'SteelBlue', 'Teal', 'Turquoise', 'AliceBlue', 'Azure', 'Beige', 'Bisque', 'BlanchedAlmond', 'Brown', 'BurlyWood', 'Chocolate', 'Coral', 'Cornsilk', 'Crimson', 'DarkGoldenRod', 'DarkKhaki', 'DarkOrange', 'DarkOrchid', 'DarkSalmon', 'DarkSeaGreen', 'DarkSlateGray', 'DarkSlateGrey', 'DarkTurquoise', 'DarkViolet', 'DeepPink', 'DeepSkyBlue', 'DimGray', 'DimGrey', 'FireBrick', 'FloralWhite', 'ForestGreen', 'Fuchsia', 'Gainsboro', 'GhostWhite', 'Gold', 'GoldenRod', 'Gray', 'Grey', 'Green', 'GreenYellow', 'HoneyDew', 'HotPink', 'IndianRed', 'Indigo', 'Ivory', 'Khaki', 'Lavender', 'LavenderBlush', 'LawnGreen', 'LemonChiffon', 'LightBlue', 'LightCoral', 'LightCyan', 'LightGoldenRodYellow', 'LightGray', 'LightGrey', 'LightGreen', 'LightPink', 'LightSalmon', 'LightSeaGreen', 'LightSkyBlue', 'LightSlateGray', 'LightSlateGrey', 'LightSteelBlue', 'LightYellow', 'Lime', 'LimeGreen', 'Linen', 'Magenta', 'MediumAquaMarine', 'MediumOrchid', 'MediumPurple', 'MediumSeaGreen', 'MediumSlateBlue', 'MediumSpringGreen', 'MediumTurquoise', 'MediumVioletRed', 'MintCream', 'MistyRose', 'Moccasin', 'NavajoWhite', 'OldLace', 'Olive', 'OliveDrab', 'Orange', 'OrangeRed', 'Orchid', 'PaleGoldenRod', 'PaleGreen', 'PaleTurquoise', 'PaleVioletRed', 'PapayaWhip', 'PeachPuff', 'Peru', 'Pink', 'Plum', 'PowderBlue', 'Purple', 'RebeccaPurple', 'Red', 'RosyBrown', 'RoyalBlue', 'SaddleBrown', 'Salmon', 'SandyBrown', 'SeaGreen', 'SeaShell', 'Sienna', 'Silver', 'SkyBlue', 'SlateBlue', 'SlateGray', 'SlateGrey', 'Snow', 'SpringGreen', 'SteelBlue', 'Tan', 'Teal', 'Thistle', 'Tomato', 'Turquoise', 'Violet', 'Wheat', 'White', 'WhiteSmoke', 'Yellow', 'YellowGreen', 'Black'
];

btn.addEventListener('click', () => {
    let randomColor = '';
    for (let i = 0; i < 6; i++) {
        const randomIndex = Math.floor(Math.random() * colors.length);
        randomColor = colors[randomIndex];
    }
    
    container[0].style.backgroundColor = randomColor;
    colorName.innerHTML = randomColor;
    colorName.style.color = randomColor;
    btn.style.backgroundColor = randomColor;
    footer[0].style.backgroundColor = randomColor;
});

darkMode.addEventListener('click', () => {
    if (darkMode.innerHTML === 'Dark Mode') {
        document.body.style.backgroundColor = '#202020';
        document.body.style.color = '#fff';
        navBar_dark[0].style.backgroundColor = '#202020';
        navBar_dark[0].style.color = '#fff';
        footerAnchor[0].style.color = '#fff';
        darkMode.innerHTML = 'Light Mode';
    } else {
        document.body.style.backgroundColor = '#fff';
        document.body.style.color = '#000';
        navBar_dark[0].style.backgroundColor = '#fff';
        navBar_dark[0].style.color = '#000';
        footerAnchor[0].style.color = '#000';
        darkMode.innerHTML = 'Dark Mode';
    }
});