document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript has loaded');

    const submit = document.querySelector('#heritage-form');
    submit.addEventListener('submit', handleFormSubmit);

    const deleteList = document.querySelector('#delete-form');
    deleteList.addEventListener('submit', handleFormDelete);
});

const name = function (event) {
    return event.target.name.value;
};

const siteLocation = function (event) {
    return event.target.location.value;
};

const owner = function (event) {
    return event.target.owner.value;
};

const fee = function (event) {
    return event.target.fee.value;
}

const newElement = function (formValueCallback) {
    const myElement = document.createElement('div');
    myElement.textContent = `${formValueCallback}`;
    return myElement;
};

const handleFormSubmit = function (event) {
    event.preventDefault();

    const nameItem = newElement(name(event));
    const locationItem = newElement(siteLocation(event));
    const ownerItem = newElement(owner(event));
    const feeItem = newElement(fee(event));

    nameItem.classList.add('name-item');
    locationItem.classList.add('location-item');
    ownerItem.classList.add('owner-item');
    feeItem.classList.add('fee-item');

    const listElement = document.createElement('li');
    listElement.appendChild(nameItem);
    listElement.appendChild(locationItem);
    listElement.appendChild(ownerItem);
    listElement.appendChild(feeItem);

    const heritageList = document.querySelector('#sites-list');
    heritageList.appendChild(listElement);

    event.target.reset();
};

const handleFormDelete = function (event) {
    const heritageList = document.querySelector('#sites-list');
    heritageList.removeChild('li')
};