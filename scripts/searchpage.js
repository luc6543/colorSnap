 // search page dropdown
 const menuEndpoint = new MDCMenu(document.querySelector('.dropdown-api-endpoint'));
 document.querySelector('#dropdownBtn').addEventListener('click', () => {
     menuEndpoint.open = true;
 });

 // remove placeholder upon typing in inp
 document.getElementById('photoSearchInp').addEventListener('input', () => {
     if (document.getElementById('photoSearchInp').value === '') {
         document.getElementById('placeholder-id').innerHTML = `Search <span
                         id="placeholder-api-call">${currentApiCall.charAt(0).toUpperCase() + currentApiCall.slice(1)}</span>`;
     } else {
         document.getElementById('placeholder-id').innerHTML = '';
     }
 })


 // CHANGE THE orientation WHEN SELECTED
 document.querySelectorAll('#orientation-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        orientation = btn.getAttribute('data-content');
        document.querySelector('#lbl-orientation').innerHTML = orientation;
    });
});

// CHANGE THE color WHEN SELECTED
document.querySelectorAll('#color-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
        color = 'color=' + btn.getAttribute('data-content');                   // De color word met color= opgeslagen omdat als je geen color hebt je niet een lege parameter wilt doorsturen naar de api.
        document.querySelector('#lbl-color').innerHTML = color.split('=')[1]; // aangezien color word opgeslagen als COLOR=green split die de string in tweeen zodat je alleen de kleur hebt
    });
});



const colorSetting = new MDCMenu(document.querySelector('.dropdown-color-settings'));
document.querySelector('#dropdown-btn-color').addEventListener('click', () => {
    colorSetting.open = true;
});
const orientationSetting = new MDCMenu(document.querySelector('.dropdown-orientation-settings'));
document.querySelector('#dropdown-btn-orientation').addEventListener('click', () => {
    orientationSetting.open = true;
});


const unsplashKey = `wj8aChJUAC2INucwlNEo1A6QQM8r_peWVL-okl_FeBg`;
        const pexelsKey = `lxCzmL0zI12Sw4UdSufPVtHQuskaJIsKvfN8oG2SmAtTQiBj6p6P2vIn`;
        const pixabayKey = `43930027-0dd439b78e38bfa692283b2c3`;

        // Maybe advance this with local storage?
        let currentApiCall = 'pexels';
        let orientation = '';
        let color = '';

        // CHANGE PLACEHOLDER WHEN NEW API IS SET
        document.querySelectorAll('.btn-api-point').forEach(btn => {
            currentApiCall = btn.getAttribute('data-content');
            specificApiSettings();
            btn.addEventListener('click', () => {
                try {
                    document.getElementById('placeholder-api-call').innerHTML = currentApiCall.charAt(0).toUpperCase() + currentApiCall.slice(1);
                } catch (error) {
                    
                }
            })
        });

        // SINCE EACH API HAS DIFFERENT PARAMS SOME SETTINGS CANT BE USED
        function specificApiSettings() {
            // reset each button from orientation setting.
            document.querySelectorAll('#orientation-btn').forEach(btn => {
                btn.classList.remove('hidden');
            })

            // hides buttons that cant be used with selected api   
            if (currentApiCall == 'pixabay') {
                // The pixabay api does NOT support square orientations.
                document.querySelector('.orientation-square').classList.add('hidden');
            }
        }
