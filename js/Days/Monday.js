class Monday{
    constructor(){
        this.monday = createButton("Monday ->");
        this.input1 = createInput("No.of Tablets in the Morning");
        this.input2 = createInput("No.of Tablets in the Afternoon");
        this.input3 = createInput("No.of Tablets in the Night");
        this.mondaySde = createButton("My Schedule-Mon")
    }

    hide(){
        this.input1.hide();
        this.input2.hide();
        this.input3.hide();
    }

    display(){
        this.monday.position(300, 300);

        this.monday.mousePressed(()=>{
            this.monday.hide();
            this.input1.position(400,400);
            this.input2.position(400,500);
            this.input3.position(400,600);
            this.mondaySde.position(500,800);
        })
        this.mondaySde.mousePressed(()=>{
            var schedule = new MondayS(); 
            schedule.display();
        })
    }
}