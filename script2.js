$(document).ready(function () {
    const sips = [];
  
    $('#add-sip').click(function () {
        const sipName = $('#sip-name').val();
        const sipAmount = parseFloat($('#sip-amount').val());
  
        if (sipName && !isNaN(sipAmount)) {
            const sip = {
                name: sipName,
                amount: sipAmount,
            };
            sips.push(sip);
  
            updateSIPList();
            clearForm();
        }
    });
  
    function updateSIPList() {
        const $sips = $('#sips');
        $sips.empty();
  
        sips.forEach((sip, index) => {
            $sips.append(`
                <li class="list-group-item">
                    ${sip.name}: $${sip.amount} per month
                    <button class="btn btn-danger btn-sm float-right" data-index="${index}">Remove</button>
                </li>
            `);
        });
  
        // Add event listeners to remove SIPs
        $sips.find('button').click(function () {
            const index = $(this).data('index');
            sips.splice(index, 1);
            updateSIPList();
        });
    }
  
    function clearForm() {
        $('#sip-name').val('');
        $('#sip-amount').val('');
    }
  });
  