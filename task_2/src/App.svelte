<script lang="en">

    let selected_one;
    let selected_two;
    let amountElement_one;
    let amountElement_two;
   let key = '54e82eac41acc747c55689ec';

    function calculateFrom() {
        fetch(`https://v6.exchangerate-api.com/v6/` + key + `/latest/` +  selected_one)
            .then(res => res.json())
            .then(data => {
                const rate = data.conversion_rates[selected_two];
                amountElement_two = (amountElement_one * rate).toFixed(2);
            });
    }
    function calculateTo() {
        fetch(`https://v6.exchangerate-api.com/v6/` + key + `/latest/` +  selected_two)
            .then(res => res.json())
            .then(data => {
                const rate = data.conversion_rates[selected_one];
                amountElement_one = (amountElement_two * rate).toFixed(2);
            });
    }
</script>
<style>
    script.js
    * {
        box-sizing: border-box;
    }

    body {

        font-family: Arial, Helvetica, sans-serif;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        margin: 0;
        padding: 20px;
    }

    h1 {
        font-size: 35px;
        color: #2a1e1e;
    }


    .container {
        background-color: #fffcf9;
        padding: 8px 40px;
        border-radius: 10px;
        box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.35);
    }

    .currency {
        padding: 40px 0;
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .currency select {
        padding: 10px 20px 10px 10px;
        appearance: none;
        border: 1px solid #dedede;
        font-size: 16px;
        background: transparent;
    }

    .currency input {
        border: 0;
        background: transparent;
        font-size: 30px;
        text-align: left;
    }

    select:focus,
    input:focus,
    button:focus {
        outline: 0;
    }

    .input {
        border: 1px solid #00000014;
        padding: 2px;
    }

</style>
<main>
    <div class="container">
        <h1>Currency converter</h1>
        <div class="currency">
            <input class="input" type="number" id="amount-one" bind:value={amountElement_one} on:input={calculateFrom} placeholder="0">
            <!--            <Select bind:items={items} placeholder="Select an option" bind:selectedValue={selected} bind:value={currencyValueOne} />-->
            <select id="currency-one" bind:value={selected_one} on:change={calculateFrom} >
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB">RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD" selected>USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
            </select>
        </div>
        <div class="currency">
            <input class="input" type="number" id="amount-two" bind:value={amountElement_two} on:input={calculateTo}  placeholder="0">
            <select id="currency-two" bind:value={selected_two} on:change={calculateTo} >
                <option value="AED">AED</option>
                <option value="ARS">ARS</option>
                <option value="AUD">AUD</option>
                <option value="BGN">BGN</option>
                <option value="BRL">BRL</option>
                <option value="BSD">BSD</option>
                <option value="CAD">CAD</option>
                <option value="CHF">CHF</option>
                <option value="CLP">CLP</option>
                <option value="CNY">CNY</option>
                <option value="COP">COP</option>
                <option value="CZK">CZK</option>
                <option value="DKK">DKK</option>
                <option value="DOP">DOP</option>
                <option value="EGP">EGP</option>
                <option value="EUR">EUR</option>
                <option value="FJD">FJD</option>
                <option value="GBP">GBP</option>
                <option value="GTQ">GTQ</option>
                <option value="HKD">HKD</option>
                <option value="HRK">HRK</option>
                <option value="HUF">HUF</option>
                <option value="IDR">IDR</option>
                <option value="ILS">ILS</option>
                <option value="INR">INR</option>
                <option value="ISK">ISK</option>
                <option value="JPY">JPY</option>
                <option value="KRW">KRW</option>
                <option value="KZT">KZT</option>
                <option value="MXN">MXN</option>
                <option value="MYR">MYR</option>
                <option value="NOK">NOK</option>
                <option value="NZD">NZD</option>
                <option value="PAB">PAB</option>
                <option value="PEN">PEN</option>
                <option value="PHP">PHP</option>
                <option value="PKR">PKR</option>
                <option value="PLN">PLN</option>
                <option value="PYG">PYG</option>
                <option value="RON">RON</option>
                <option value="RUB" selected>RUB</option>
                <option value="SAR">SAR</option>
                <option value="SEK">SEK</option>
                <option value="SGD">SGD</option>
                <option value="THB">THB</option>
                <option value="TRY">TRY</option>
                <option value="TWD">TWD</option>
                <option value="UAH">UAH</option>
                <option value="USD">USD</option>
                <option value="UYU">UYU</option>
                <option value="VND">VND</option>
                <option value="ZAR">ZAR</option>
            </select>
        </div>
    </div>
</main>
