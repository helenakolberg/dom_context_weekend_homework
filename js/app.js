document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript has loaded');

    const submit = document.querySelector('#heritage-form');
    submit.addEventListener('submit', handleFormSubmit);
});

const handleFormSubmit = function (event) {
    event.preventDefault();

    const name = event.target.name.value;
    const location = event.target.location.value;
    const owner = event.target.owner.value;

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `${name}`;
    nameDiv.classList.add('name-item');

    const locationDiv = document.createElement('div');
    locationDiv.textContent = `${location}`;
    locationDiv.classList.add('location-item');

    const ownerDiv = document.createElement('div');
    ownerDiv.textContent = `${owner}`;
    ownerDiv.classList.add('owner-item');

    const listElement = document.createElement('li');
    listElement.appendChild(nameDiv);
    listElement.appendChild(locationDiv);
    listElement.appendChild(ownerDiv);

    const heritageList = document.querySelector('#heritage-form');
    heritageList.appendChild(listElement);
};