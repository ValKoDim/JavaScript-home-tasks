class MonthException extends Error{
    constructor(message) {
        super(message),
        this.name = 'MONTH_EXCEPTION',
        this.message = message
    }
}


showMonthName(5);
showMonthName(13);
showMonthName(0);





function showMonthName(month){

    try{
        if(month <= 0 || month > 12){
            throw new MonthException('Incorrect month number')
        }
        switch(month){
            case 1: console.log('January');
            break;
            case 2: console.log('February');
            break;
            case 3: console.log('March');
            break;
            case 4: console.log('April');
            break;
            case 5: console.log('May');
            break;
            case 6: console.log('June');
            break;
            case 7: console.log('July');
            break;
            case 8: console.log('August');
            break;
            case 9: console.log('September');
            break;
            case 10: console.log('Ocotober');
            break;
            case 11: console.log('November');
            break;
            case 12: console.log('December');
            break;
        }
    }catch(exception){
        console.log(`${exception.name} ${exception.message}`);
    }
}