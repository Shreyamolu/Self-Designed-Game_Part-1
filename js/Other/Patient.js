class Patient{

    constructor(){
        
    }

    getTabletCount(){
        var tabletCountref = database.ref("tabletCount");
        tabletCountref.on("value",function (data){
            tabletCount = data.val();
        });
    }
    getDayCount(){
        var dayCountref = database.ref("dayCount");
        dayCountref.on("value",function (data){
            dayCount = data.val();
        });
    }
    getMonthCount(){
        var monthCountref = database.ref("monthCount");
        monthCountref.on("value",function (data){
            monthCount = data.val();
        });
    }

    updateTabletCount(count){
        database.ref("/").update ({
            tabletCount : count
        })
    }
    updateDayCount(count){
        database.ref("/").update ({
            dayCount : count
        })
    }
    updateMonthCount(count){
        database.ref("/").update ({
            monthCount : count
        })
    }
}