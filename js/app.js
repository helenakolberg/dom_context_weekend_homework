document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript has loaded');

    const submit = document.querySelector('#heritage-form');
    submit.addEventListener('submit', handleFormSubmit);

    const deleteList = document.querySelector('#delete-form');
    deleteList.addEventListener('submit', handleFormDelete);
});

    const name = function (event) {
        return event.target.name.value;
    }

    const siteLocation = function (event) {
        return event.target.location.value;
    }

    const owner = function (event) {
        return event.target.owner.value;
    }

const handleFormSubmit = function (event) {
    event.preventDefault();

    const nameDiv = document.createElement('div');
    nameDiv.textContent = `${name(event)}`;
    nameDiv.classList.add('name-item');

    const locationDiv = document.createElement('div');
    locationDiv.textContent = `${siteLocation(event)}`;
    locationDiv.classList.add('location-item');

    const ownerDiv = document.createElement('div');
    ownerDiv.textContent = `${owner(event)}`;
    ownerDiv.classList.add('owner-item');

    const listElement = document.createElement('li');
    listElement.appendChild(nameDiv);
    listElement.appendChild(locationDiv);
    listElement.appendChild(ownerDiv);

    const heritageList = document.querySelector('#sites-list');
    heritageList.appendChild(listElement);

    event.target.reset();
};

const handleFormDelete = function (event) {
    const heritageList = document.querySelector('#sites-list');
    heritageList.removeChild('li')
};