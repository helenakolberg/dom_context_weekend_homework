document.addEventListener('DOMContentLoaded', () => {
    console.log('Javascript has loaded');

    const submit = document.querySelector('#heritage-form');
    submit.addEventListener('submit', handleFormSubmit);

    const deleteList = document.querySelector('#delete-form');
    deleteList.addEventListener('submit', handleFormDelete);
});

const checkOwner = function (value) {
    const element = document.getElementById('owner_other');
    if (value === 'Other') {
        element.style.display = 'block';
    } else {
        element.style.display = 'none';
    }
};

const name = function (event) {
    return event.target.name.value;
};

const siteLocation = function (event) {
    return event.target.location.value;
};

const owner = function (event) {
    return event.target.owner.value;
};

const ownerOther = function (event) {
    return event.target.owner_other.value;
};

const fee = function (event) {
    return event.target.fee.value;
};

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
    const ownerOtherItem = newElement(ownerOther(event));

    nameItem.classList.add('name-item');
    locationItem.classList.add('location-item');
    ownerItem.classList.add('owner-item');
    feeItem.classList.add('fee-item');
    ownerOtherItem.classList.add('owner-other-item');

    const listElement = document.createElement('li');
    listElement.appendChild(nameItem);
    listElement.appendChild(locationItem);
    listElement.appendChild(ownerItem);
    listElement.appendChild(feeItem);
    listElement.appendChild(ownerOtherItem);

    const heritageList = document.querySelector('#sites-list');
    heritageList.appendChild(listElement);

    event.target.reset();
};

const handleFormDelete = function (event) {
    const heritageList = document.querySelector('#sites-list');
    heritageList.removeChild('li')
};