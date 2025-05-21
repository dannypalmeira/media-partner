async function montaPagina() {
  try {
    const requestURL = 'data.json';
    const request = new Request(requestURL);

    const response = await fetch(request);
    if (!response.ok) throw new Error('Network response was not ok');
    const partnerText = await response.text();

    const datiPartner = JSON.parse(partnerText);

    const locale = shuffleArray(datiPartner.partners);

    montaTabela(locale);
  } catch (error) {
    console.error('Error loading partner data:', error);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function montaTabela(array) {
  const section = document.querySelector('#lista');
  section.innerHTML = "";
  for (const data of array) {
    const montaDiv = document.createElement('div');
    montaDiv.classList.add('partner');
    const montaLink = document.createElement('a');
    montaLink.classList.add('partnerLink');
    montaLink.setAttribute('target', '_blank');
    montaLink.setAttribute('rel', 'noopener noreferrer');
    montaLink.setAttribute('href', `${data.link}`);
    const montaImg = document.createElement('img');
    montaImg.setAttribute('alt', `${data.name}`);
    montaImg.setAttribute('src', `${data.image}`);

    montaLink.appendChild(montaImg);
    montaDiv.appendChild(montaLink);
    section.appendChild(montaDiv);
  }


}

montaPagina();