$(document).ready(async function () {
    $('.modal').modal();
    $('.datepicker').datepicker();
    $('select').formSelect();

    await loadCars();

    loadCarNameValidator();
    loadConfirmDeleteBtn();
    loadNewBtn();
    loadSaveBtn();
});

function loadCars() {
    return new Promise(async (resolve, reject) => {
        cars = await getCars();

        if (!cars) {
            reject()
        } else {
            resolve();
        }

        let template = $('#car-template').html();
        let templateScript = Handlebars.compile(template);

        let html = templateScript(cars);
        $('tbody').html(html);

        reload();
    });
}

function getCars() {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: 'http://localhost/api/api.php',
            success: function (response) {
                resolve(response.data);
            },
            error: function (response) {
                reject(response)
            }
        });
    })
}

function getCar(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'GET',
            url: `http://localhost/api/api.php?id=${id}`,
            success: function (response) {
                resolve(response.data[0]);
            },
            error: function (response) {
                reject(response);
            }
        });
    })
}

function loadDeleteBtn() {
    $('.delete').on('click', async function (e) {
        e.preventDefault();

        const id = $(this).parent().parent().attr('data-id');
        const car = await getCar(id);

        showDeleteModal(car);
    });
}

function showDeleteModal(car) {
    const modal = $('#confirm-delete');

    modal.find('span.confirm-delete-car-name').html(car.name);
    modal.children('span.id').html(car.id);
    modal.find('input').val("");
}

function deleteCar(id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'DELETE',
            url: `http://localhost/api/api.php?id=${id}`,
            success: function () {
                resolve(true);
            },
            error: function () {
                reject(false);
            }
        });
    });
}

function loadCarNameValidator() {
    $('#confirm-delete-name-input').on('keyup', async function (e) {
        const modal = $(this).parent().parent();
        const confirmDeleteButton = $('#confirm-delete-btn');
        const id = modal.children('span.id').html();

        const car = await getCar(id)
        if ($(this).val() === car.name) {
            confirmDeleteButton.removeAttr('disabled');
        } else {
            confirmDeleteButton.attr('disabled', true);
        }
    });
}

function loadConfirmDeleteBtn() {
    $('#confirm-delete-btn').on('click', async function (e) {
        e.preventDefault();

        const modal = $(this).parent().parent();
        const id = modal.children('span.id').html();
        const car = await getCar(id);

        const result = await deleteCar(id);

        modal.modal('close');

        if (result) {
            M.toast({ html: `${car.name} erfolgreich gelöscht!`, classes: 'green darken-2' });
        } else {
            M.toast({ html: `${car.name} konnte nicht gelöscht werden.`, classes: 'red darken-2' });
        }
        loadCars();

    });
}

function loadEditBtn() {
    $('.edit').on('click', async function (e) {
        e.preventDefault();

        const id = $(this).parent().parent().attr('data-id');
        const car = await getCar(id);

        showEditModal(car);
    });
}

function showEditModal(car) {
    const modal = $('#car-modal');
    modal.children('span.id').html(car.id);

    modal.find('#car-name').val(car.name);
    modal.find('#car-modal-heading').html(`Bearbeiten von ${car.name}`);
    modal.find('option:selected').prop('selected', false);
    modal.find(`option[value="${car.kraftstoff}"]`).prop('selected', true);
    modal.find('#car-color').val(car.farbe);
    modal.find('#car-type').val(car.bauart);
    modal.find('#car-refuels').val(car.tanken);
    modal.find('#car-last-refuel').val(car.date);

    M.updateTextFields();
    $('select').formSelect();
}

function loadNewBtn() {
    $('#new').on('click', function (e) {
        e.preventDefault();
        showNewModal();
    });
}

function showNewModal() {
    const modal = $('#car-modal');
    modal.children('span.id').html("0");
    modal.find('#car-modal-heading').html('Neues Auto');
    modal.find('#car-name').val('');
    modal.find('option[value="Benzin"]').prop('selected', true);
    modal.find('#car-color').val('000000');
    modal.find('#car-type').val('');
    modal.find('#car-refuels').val('');
    modal.find('#car-last-refuel').val('');

    M.updateTextFields();
    $('select').formSelect();
}

function loadSaveBtn() {
    $('#save-btn').on('click', async function (e) {
        e.preventDefault();

        const modal = $(this).parent().parent();
        const id = modal.children('span.id').html();

        const car = {
            name: modal.find('#car-name').val(),
            kraftstoff: modal.find('#car-fuel').val(),
            farbe: modal.find('#car-color').val(),
            bauart: modal.find('#car-type').val(),
            tanken: modal.find('#car-refuels').val(),
            date: modal.find('#car-last-refuel').val()
        }

        const result = await saveCar(car, id);
        modal.modal('close');

        if (result) {
            M.toast({ html: `${car.name} erfolgreich gespeichert!`, classes: 'green darken-2' });
        } else {
            M.toast({ html: `${car.name} konnte nicht gespeichert werden.`, classes: 'red darken-2' });
        }
        loadCars();
    });
}

function saveCar(car, id) {
    return new Promise((resolve, reject) => {
        $.ajax({
            method: 'POST',
            url: `http://localhost/api/api.php?id=${id}`,
            data: car,
            success: function () {
                resolve(true);
            },
            error: function () {
                reject(false);
            }
        });
    });
}

function loadRefuelbtn() {
    $('.refuel').on('click', async function (e) {
        e.preventDefault();

        const id = $(this).parent().parent().attr('data-id');
        const car = await getCar(id);

        car.tanken = Number(car.tanken) + 1;

        car.date = $.format.date(new Date().getTime(), 'MMM dd, yyyy');

        const result = await saveCar(car, id);
        if (result) {
            M.toast({ html: `${car.name} erfolgreich betankt!`, classes: 'green darken-2' });
        } else {
            M.toast({ html: `${car.name} konnte nicht betankt werden.`, classes: 'red darken-2' });
        }
        loadCars();

    });
}

function reload() {
    loadDeleteBtn();
    loadEditBtn();
    loadRefuelbtn();
}