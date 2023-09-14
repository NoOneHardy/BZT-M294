/* $('.delete').click(function (e) { 
    e.preventDefault();
    $(this).parent().parent().remove();
}); */

$(document).ready(function () {
    $('.modal').modal();
    $('.datepicker').datepicker();
    $('select').formSelect();
});

let template = $('#car-template').html();
let templateScript = Handlebars.compile(template);

$.ajax({
    type: "get",
    url: "cars.json",
    dataType: "JSON",
    success: function (response) {
        console.log(response);
        let html = templateScript(response);
        $('tbody').html(html);
        reload();
    }
});

function reload() {
    $('.delete').on('click', function (e) {
        e.preventDefault();
        let carName = $(this).parent().parent().find('td:nth-child(2)').html();
        $('#confirm-delete').find('span.confirm-delete-car-name').html(carName);
        $('#confirm-delete').attr('data-id', $(this).parent().parent().attr('data-id'));
        $('#confirm-delete').find('input').val("");
    });

    $('#confirm-delete-name-input').on('keyup', function (e) {
        let modal = $(this).parent().parent()
        if ($(this).val() === modal.find('span.confirm-delete-car-name').html()) {
            modal.find('a').removeAttr('disabled');
        } else {
            modal.find('a').attr('disabled', 'disabled');
        }
    });

    $('#confirm-delete-btn').on('click', function (e) {
        e.preventDefault();
        $('table').find(`*[data-id=${$(this).parent().parent().attr('data-id')}]`).remove();
        $(this).parent().parent().modal('close');
    });

    $('.edit').on('click', function (e) {
        e.preventDefault();
        const tr = $(this).parent().parent()
        let carName = tr.children('td:nth-child(2)').html();
        let fuel = tr.children('td:nth-child(3)').html();
        let color = tr.find('input[type="color"').val();
        let type = tr.find('td:nth-child(5)').html();
        let refuels = tr.find('td:nth-child(6)').html();
        let lastRefuel = tr.find('td:nth-child(7)').html();
        let editModal = $('#edit-modal');

        /* Namen einfügen */
        editModal.find('span.confirm-delete-car-name').html(carName);
        editModal.find('#new-name').val(carName);

        /* Kraftstoff selektieren */
        editModal.find('option[selected="selected"]').removeAttr('selected');
        editModal.find(`option[value="${fuel}"]`).attr('selected', 'selected');

        /* Farbe setzen */
        editModal.find('#new-color').val(color);

        /* Bauart setzen */
        editModal.find('#new-type').val(type);

        /* Betankungen setzen */
        editModal.find('#new-refuels').val(refuels);

        /* Datum der letzten Betankung setzen */
        editModal.find('#new-last-refuel').val(lastRefuel);

        editModal.attr('data-id', tr.attr('data-id'));
        M.updateTextFields();
    });

    $('#save-edits-btn').on('click', function (e) {
        e.preventDefault();
        const tr = $('table').find(`*[data-id=${$(this).parent().parent().attr('data-id')}]`);
        const editModal = $('#edit-modal');

        tr.children('td:nth-child(2)').html(editModal.find('#new-name').val());
        tr.children('td:nth-child(3)').html(editModal.find('#new-fuel').val());
        tr.children('td:nth-child(4)').children().children('input').val(editModal.find('#new-color').val());
        tr.children('td:nth-child(4)').children().children('.color-code').html(editModal.find('#new-color').val());
        tr.children('td:nth-child(5)').html(editModal.find('#new-type').val());
        tr.children('td:nth-child(6)').html(editModal.find('#new-refuels').val());
        tr.children('td:nth-child(7)').html(editModal.find('#new-last-refuel').val());
        $(this).parent().parent().modal('close');
    });

    $('.refuel').on('click', function (e) {
        e.preventDefault();
        const tr = $(this).parent().parent();
        const refuelTd = tr.find('td:nth-child(6)');
        const lastRefuelTd = tr.find('td:nth-child(7)');

        refuelTd.html(Number(refuelTd.html()) + 1);
        lastRefuelTd.html($.format.date(new Date().getTime(), 'MMM dd, yyyy'));
    });
}

$('#save-new-btn').on('click', function (e) {
    e.preventDefault();
    const form = $(this).parent().parent().find('form');

    let id = $('tbody').children().length + 1;
    let carName = form.find('#new-name').val();
    let fuel = form.find('#new-fuel').val();
    let color = form.find('#new-color').val();
    let type = form.find('#new-type').val();
    let refuels = form.find('#new-refuels').val();
    let lastRefuel = form.find('#new-last-refuel').val();
    let createModal = $('#create-modal');

    let carContent = `
    <td>${id}</td>
    <td>${carName}</td>
    <td>${fuel}</td>
    <td>
        <div class="valign-wrapper">
            <input disabled type="color" value="${color}">
            <span class="color-code">${color}</span>
        </div>
    </td>
    <td>${type}</td>
    <td>${refuels}</td>
    <td>${lastRefuel}</td>
    <td>
        <a class="refuel btn waves-effect waves-light green lighten-3"><i
                class="material-icons green-text text-darken-4">local_gas_station</i></a>
        <a href="#edit-modal" class="edit modal-trigger btn waves-effect waves-light blue lighten-3"><i
                class="material-icons blue-text text-darken-4">mode_edit</i></a>
        <a href="#confirm-delete"
            class="delete modal-trigger btn waves-effect waves-light red lighten-3"><i
                class="material-icons red-text text-darken-4">delete</i></a>
    </td>`

    $('tbody').append(`<tr data-id=${id}>${carContent}</tr>`);
    createModal.modal('close');
    reload();
});

reload();