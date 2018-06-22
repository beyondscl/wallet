class main extends base{
    //property
    private comp:ui.MainUI;
    //cons
    constructor(){
        super();
        this.onload();
    }
    //functions
    private onload():void{
        this.comp = new ui.MainUI();
        Laya.stage.addChild(this.comp);
        this.comp.bar_btns.selectHandler = new Laya.Handler(this,this.onselect);
    }
    private onselect(index:number):void{
        if(index==3){
            Laya.stage.removeChild(this.comp);
            new login();
            return;
        }
        this.comp.main_contents.selectedIndex = index;
    }
}