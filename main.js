
function printReceipt(barcodes) {
    const order = queryOrder(barcodes);
    return print(order);   
}

function queryOrder(barcodes){
    var order = [];
    var list = [
        {"id": "0001", "name" : "Coca Cola", "price": 3},
        {"id": "0002", "name" : "Diet Coke", "price": 4},
        {"id": "0003", "name" : "Pepsi-Cola", "price": 5},
        {"id": "0004", "name" : "Mountain Dew", "price": 6},
        {"id": "0005", "name" : "Dr Pepper", "price": 7},
        {"id": "0006", "name" : "Sprite", "price": 8},
        {"id": "0007", "name" : "Diet Pepsi", "price": 9},
        {"id": "0008", "name" : "Diet Mountain Dew", "price": 10},
        {"id": "0009", "name" : "Diet Dr Pepper", "price": 11},
        {"id": "0010", "name" : "Fanta", "price": 12}
    ]
    for(let i =  0;i < barcodes.length;i++){
        for(let j = 0;j < list.length;j++){
            if(barcodes[i] == list[j].id){
                order.push(list[j]);
            }
        }
    }
    return order;
}


//把id和个数存入map中
function idAndNum(order){
    const priceAndNumMap = new Map();
    
    for(let i = 0;i < order.length;i++){
        if(priceAndNumMap.get(order[i].id) == null){
            priceAndNumMap.set(order[i].id,1);
        }else{
            priceAndNumMap.set(order[i].id,priceAndNumMap.get(order[i].id)+1)
        }
    }
    return priceAndNumMap;
}

//总价
function sumPrice(result){
    var sum = 0;
    for(let k = 0;k< result.length;k++){
        sum += result[k].price*result[k].num;
    }
    return sum;
}
//组合信息
function message(priceAndNumMap,order){
    const result = [];
    for(let i = order.length-1;i > 0;i++){
        if(priceAndNumMap.get(order[i].id) > 1){
            order.splice(i,1);
            break;
        }
    }
    

    for(let t = 0;t< order.length;t++){
        result.push({name:order[t].name,price:order[t].price,num:priceAndNumMap.get(order[t].id)});
    }
    return result;

}
//输出
function print(order){
    const priceAndNumMap = idAndNum(order);
    const result = message(priceAndNumMap,order);
    var sum = sumPrice(result);
   var outPut = "Receipts\r\n----------------------------------\r\n";
   for(let i = 0;i< result.length;i++){
       outPut += result[i].name+"                    "+result[i].price+"          "+result[i].num+"\r\n";

   }
   outPut += "----------------------------------\r\nprice:"+sum;
   return outPut;
}

module.exports = printReceipt;

