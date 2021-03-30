class Tuesday{
    constructor(){
        this.tuesday = createButton("Tuesday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.tuesdaySde = createButton("My Schedule-Tue")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }

    display(){
        this.tuesday.position(500, 300);

        this.tuesday.mousePressed(()=>{
            this.tuesday.hide();
            this.input1.position(600,400);
            this.input2.position(600,500);
            this.input3.position(600,600);
            this.tuesdaySde.position(700,800);
        })
        this.tuesdaySde.mousePressed(()=>{
            var schedule = new TuesdayS(); 
            schedule.display();
        })
    }
}