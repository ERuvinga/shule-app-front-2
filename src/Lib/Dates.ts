    // function Convert Number moth to String
const monthNumberToString = (month:number)=>{
        let monthString = "";
        switch(month){
            case 0:
                monthString = "Jan";
                break;
            case 1:
                monthString = "Fév"
                break;
            case 2:
                monthString = "Mars"
                break;
            case 3:
                monthString = "Avr"
                break;
            case 4:
                monthString = "Mai"
                break;
            case 5:
                monthString = "Juin"
                break;
            case 6:
                monthString = "Juil"
                break;
            case 7:
                monthString = "Aout"
                break;
            case 8:
                monthString = "Sépt"
                break;
            case 9:
                monthString = "Oct"
                break;
            case 10:
                monthString = "Nov"
                break;
            case 11:
                monthString = "Déc"
                break;
            }
            return monthString;
    }

    export {
        monthNumberToString
    }