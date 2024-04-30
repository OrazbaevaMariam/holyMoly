import {encoded, translations} from "./data.js";

for (let i = 0; i < encoded.length; i++) {
    for (let prop in encoded[i]) {
        const valsEncoded = encoded[i][prop];
        const transKeys = Object.keys(translations);
        if (!transKeys.includes(valsEncoded)){
            if (valsEncoded > 0){
                let decoded = valsEncoded;
                console.log(decoded)
            }
        }
    }

}

let regex = new RegExp("Id");

for (let i = 0; i < encoded.length; i++) {

    for (let prop in encoded[i]) {
        if (regex.test(prop)) {

            for (const [key, value] of Object.entries(translations)) {
                exceptIdElements(key, prop, value, encoded[i][prop]);

                if (encoded[i][prop] === key) {
                    encoded[i][prop] = value;
                }
            }

        }

        function exceptIdElements(key, keyEncoded, value, valueEncoded) {
            if (keyEncoded !== 'groupId' && keyEncoded !== 'service' && keyEncoded !== 'formatSize' && keyEncoded !== 'ca') {
                Compare(key, keyEncoded, value, valueEncoded);
            }
        }

        function Compare(keyTranslation, keyEncoded, valueTranslation, valueEncoded) {
            if (String(keyTranslation) === String(valueEncoded)) {
                return valueEncoded;
            }
        }
    }
}

console.log("Let's rock")
console.log(encoded, translations)


