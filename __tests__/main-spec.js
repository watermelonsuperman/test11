

    const printReceipt = require('../main');
    it ('should return receipt', () => {
        expect(printReceipt(['0001', '0003', '0005', '0003']))
        .toBe("Receipts\r\n----------------------------------\r\nCoca Cola                    3          1\r\nPepsi-Cola                    5          2\r\nDr Pepper                    7          1\r\n----------------------------------\r\nprice:20");
        });
    
    