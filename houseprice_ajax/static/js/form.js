$("form#addHouse").bind("submit", function () {
    var suburb = $("#suburb").val()
    var address = $("#address").val()
    var rooms = $("#rooms").val()
    var house_type = $("#house_type").val()
    var price = $("#price").val()
    var method = $("#method").val()
    var date = $("#date").val()


    if (suburb && address && rooms) {
        $.ajax({
            url: 'house/add/',
            data: {
                'suburb': suburb,
                'address': address,
                'rooms': rooms,
                'house_type': house_type,
                'price':price,
                'method': method,
                'date': date

            },
            dataType: 'json',
            success: function (data) {
                if (data.house) {
                    appendTohseTable(data.house);
                    
                }
                
            }

        });
    
        
    } else {
        alert("All fields must be completed");
    }
    $('form#addHouse').trigger("reset");
    return false;
    
});

function appendTohseTable(house) {

    $("#houseTable > tbody:last-child").append(`
    <tr id="houseTr${ house.id }">
        <td class="houseSuburb" name="suburb">${ house.suburb }</td>
        <td class="houseAddress" name="address">${ house.address }</td>
        <td class="houseRooms" name="rooms">${ house.rooms }</td>
        <td class="houseHouse_type" name="house_type">${ house.house_type }</td>
        <td class="housePrice" name="price">${ house.price }</td>
        <td class="houseMethod" name="method">${ house.method }</td>
        <td class="houseDate" name="date">${ house.date }</td>
        <td align="center">
            <button class="btn btn-success form-control" onclick="editHouse(${house.id})" data-toggle="modal" data-target="#myModal">EDIT</button>

    </td>
    <td align="center">
        <button class="btn btn-danger form-control" onclick="deleteHouse(${house.id})" >DELETE</button>
    </td>
</tr>
    `);

    alert("Completed");
    
}


$("form#updateHouse").bind("submit", function () {
   
    var idInput = $('input[name="formId"]').val();
    var suburbInput = $('input[name="formSuburb"]').val();
    var addressInput = $('input[name="formAddress"]').val();
    var roomsInput = $('input[name="formRooms"]').val();
    var house_typeInput = $('input[name="formHouse_type"]').val();
    var priceInput = $('input[name="formPrice"]').val();
    var methodInput = $('input[name="formMethod"]').val();
    var dateInput = $('input[name="formDate"]').val();

    if (suburbInput && addressInput && dateInput) {

        $.ajax({
            url: 'house/update/',
            data: {
                'id': idInput,
                'suburb': suburbInput,
                'address': addressInput,
                'rooms': roomsInput,
                'house_type': house_typeInput,
                'price': priceInput,
                'method': methodInput,
                'date': dateInput
            },
            dataType: 'json',
            success: function (data) {
                if (data.house) {

                    updateToHouseTable(data.house);
                    
                   
                    alert('Updated!');


                    
                    
                    
                }
                setInterval('location.reload()', 4000);
                
            }
        });
        
    } else {
        alert('All fields must be valid');
    }
    
    $('form#updateHouse')[0].reset();
   
    $('#myModal').modal('hide');
  
    return false;
    
    
});


function updateToHouseTable(house) {
    $('#houseTable #houseTr' + house.id).children('.houseData').each(function () {

        var attr = $(this).attr('suburb');

        if (attr=='suburb') {

            $(this).text(house.suburb);
            
        } else if (attr=='address') {
            $(this).text(house.address);
            
        } else if (attr=='rooms') {
            $(this).text(house.rooms);
            
        } else if (attr=='house_type') {
            $(this).text(house.house_type);
            
        } else if (attr=='price') {
            $(this).text(house.price);
        } else if (attr=='method') {
            $(this).text(house.method);
        } else if (attr=='date') {
            $(this).text(house.date);
        }

        
                
                  
        
           
                
    

       
        
    });
    
}


function editHouse(id) {

    if (id) {

        tr_id = '#houseTr' + id;
        suburb = $(tr_id).find('.houseSuburb').text();
        address = $(tr_id).find('.houseAddress').text();
        rooms = $(tr_id).find('.houseRooms').text();
        house_type = $(tr_id).find('.houseHouse_type').text();
        method = $(tr_id).find(".houseMethod").text();
        price = $(tr_id).find(".housePrice").text();
        date = $(tr_id).find(".houseDate").text();
        $('#form-id').val(id);
        $('#form-suburb').val(suburb);
        $('#form-address').val(address);
        $('#form-rooms').val(rooms);
        $('#form-house_type').val(house_type);
        $('#form-price').val(price);
        $('#form-method').val(method);
        $('#form-date').val(date);
        
    }
    
}


function deleteHouse(id) {

    var action = confirm('Warning! Deleting Item.');

    if (action != false) {

        $.ajax({
            url: '/house/delete',
            data: {
                'id': id,
            },
            dataType: 'json',
            success: function (data) {

                if (data.deleted) {

                    $('#houseTable #houseTr' + id).remove();
                    
                }
                
            }
        });
        
    }
    
}