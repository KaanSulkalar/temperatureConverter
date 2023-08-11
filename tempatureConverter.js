


    const celsiusEl = document.getElementById("celsius");
    const fahreneitEl = document.getElementById("fahreneit");
    const kelvinEl = document.getElementById("kelvin");

    function computeTemp(event) {
        const currentValue = +event.target.value;

        switch (event.target.name) {
            case "celsius":
                kelvinEl.value = (currentValue + 273.15).toFixed(2);
                fahreneitEl.value = (currentValue * 1.8 + 32).toFixed(2);
                break;
            case "fahreneit":
                celsiusEl.value = ((currentValue - 32) / 1.8).toFixed(2);
                kelvinEl.value = ((currentValue - 32) / 1.8 + 273.15).toFixed(2);
                break;
            case "kelvin":
                celsiusEl.value = (currentValue - 273.15).toFixed(2);
                fahreneitEl.value = ((currentValue - 273.15) * 1.8 + 32).toFixed(2);
                break;
            default:
                break;
        }

    }