const confirm = document.querySelector('#confirm');
const dead = document.querySelector('#dead');
const recover = document.querySelector('#recover');
const active = document.querySelector('#active');

(async function(){
    const data = await getData();
const {positif,sembuh,meninggal} = data;

const totalAktif = (positif.replace(',','') - meninggal.replace(',','')) - sembuh.replace(',','');


confirm.innerHTML = positif.replace(',','.');
dead.innerHTML = meninggal.replace(',','.');
recover.innerHTML = sembuh.replace(',','.');
active.innerHTML = totalAktif.toLocaleString('id-ID');

function getData(){
    return fetch('https://api.kawalcorona.com/indonesia/')
            .then(res => res.json())
            .then(res => res[0])
}

}())