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

const newElement = function (formValueCallback) {
    const element = document.createElement('div');
    element.textContent = `${formValueCallback}`;
    return element;
};

const handleFormSubmit = function (event) {
    event.preventDefault();

    newElement(name(event)).classList.add('name-item');
    newElement(siteLocation(event)).classList.add('location-item');
    newElement(owner(event)).classList.add('owner-item');

    const listElement = document.createElement('li');
    listElement.appendChild( newElement( name(event) ) );
    listElement.appendChild( newElement( siteLocation(event) ) );
    listElement.appendChild( newElement( owner(event) ) );

    const heritageList = document.querySelector('#sites-list');
    heritageList.appendChild(listElement);

    event.target.reset();
};

const handleFormDelete = function (event) {
    const heritageList = document.querySelector('#sites-list');
    heritageList.removeChild('li')
};