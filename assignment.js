
      //<--kilometerTometer-->
       function kilometerToMeter(kilometer){
            //--one kilometer = 1000 meter
             var meter = kilometer * 1000;
             return meter;
    }

        var meter = kilometerToMeter(25);
        console.log(meter);   

      //<--budgetCalculator-->

       function budgetCalculator(watch, mobile, laptop){
          var watch = 10;
          var mobile = 15;
          var laptop = 20;
                
          var perWatchPrize = 50;
          var perMobilePrize = 100;
          var perLaptopPrize = 500;
          
          var totalPrize = (watch* perWatchPrize) + (mobile * perMobilePrize) + (laptop * perLaptopPrize);
           return totalPrize;
    }
        var totalPrize = budgetCalculator();
        console.log(totalPrize);

      //<--hotelCost-->

      function hotelCost(stayHotel){
          var hotelRent = 0;

          if(stayHotel <= 10){
              hotelRent = stayHotel * 100;
            
            }

           else if(stayHotel <= 20){
                var fristPartDays = 10 * 100;
                var remaining = stayHotel - 10;
                var secondPartDays = remaining * 80;
                hotelRent = fristPartDays + secondPartDays;
            
            }

            else{
                var fristPartDays = 10 * 100;
                var secondPartDays = 10 * 80;
                var remaining = stayHotel - 20;
                var thirdPartDays = remaining * 50;
                hotelRent = fristPartDays + secondPartDays + thirdPartDays;
            }
            return hotelRent;

        }

        var count = hotelCost(30);
        console.log(count);



      

