function calculate() {
    var inputValue = parseFloat(document.getElementById('inputValue').value);
    var unitFrom = document.getElementById('unitFrom').value;
    var unitTo = document.getElementById('unitTo').value;

    // Conversion factors
    var metersToKilometers = 0.001;
    var centimetersToMeters = 0.01;
    var millimetersToMeters = 0.001;
    var decimetersToMeters = 0.1;
    var hectometersToMeters = 100;
    var inchesToMeters = 0.0254;
    var feetToMeters = 0.3048;
    var yardsToMeters = 0.9144;
    var milesToMeters = 1609.344;

    // Convert to meters
    var inputValueInMeters;
    switch (unitFrom) {
        case 'kilometers':
            inputValueInMeters = inputValue * 1000;
            break;
        case 'centimeters':
            inputValueInMeters = inputValue * centimetersToMeters;
            break;
        case 'millimeters':
            inputValueInMeters = inputValue * millimetersToMeters;
            break;
        case 'decimeters':
            inputValueInMeters = inputValue * decimetersToMeters;
            break;
        case 'hectometers':
            inputValueInMeters = inputValue * 100;
            break;
        case 'inches':
            inputValueInMeters = inputValue * inchesToMeters;
            break;
        case 'feet':
            inputValueInMeters = inputValue * feetToMeters;
            break;
        case 'yards':
            inputValueInMeters = inputValue * yardsToMeters;
            break;
        case 'miles':
            inputValueInMeters = inputValue * milesToMeters;
            break;
        default:
            inputValueInMeters = inputValue;
            break;
    }

    // Convert to the desired unit
    var result;
    switch (unitTo) {
        case 'kilometers':
            result = inputValueInMeters / 1000;
            break;
        case 'centimeters':
            result = inputValueInMeters / centimetersToMeters;
            break;
        case 'millimeters':
            result = inputValueInMeters / millimetersToMeters;
            break;
        case 'decimeters':
            result = inputValueInMeters / decimetersToMeters;
            break;
        case 'hectometers':
            result = inputValueInMeters / 100;
            break;
        case 'inches':
            result = inputValueInMeters / inchesToMeters;
            break;
        case 'feet':
            result = inputValueInMeters / feetToMeters;
            break;
        case 'yards':
            result = inputValueInMeters / yardsToMeters;
            break;
        case 'miles':
            result = inputValueInMeters / milesToMeters;
            break;
        default:
            result = inputValueInMeters;
            break;
    }

    document.getElementById('result').innerText = 'Result: ' + result.toFixed(2) + ' ' + unitTo;
}