function colToHex(color) {
    switch (color.toLowerCase()) {
        case 'yellow':
            return "color=#FFFF00";
        case 'blue':
            return "color=#0000FF";
        case 'green':
            return "color=#008000";
        case 'white':
            return "color=#FFFFFF";
        case 'black':
            return "color=#000000";
        default:
            return "";
    }
}
function fixOrientation(orientation) {
    if (currentApiCall == 'pixabay') {
        switch (orientation) {
            case 'landscape':
                return '&orientation=horizontal'
                break;
            case 'portrait':
                return '&orientation=vertical'
                break;

            default:
                return '';
                break;
        }
    }
    if (orientation == 'square' && currentApiCall == 'unsplash') {
        return 'squarish';
    } else {
        return orientation;
    }
}