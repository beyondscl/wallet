class login extends base {

    private comp: ui.LoginUI;

    constructor() {
        super();
        this.onLoad();
    }

    private onLoad(): void {
        this.comp = new ui.LoginUI();
        Laya.stage.addChild(this.comp);
        Laya.stage.bgColor = 'white';
        // Laya.loader.load("fzss.ttf",Handler.create(this,this.initFont),null,Loader.BUFFER);
        this.initFont();
        this.initEvent();
        util.setLayoutEnable(this.comp);
    }

    private initFont(): void {
        this.comp.text_phoneNum.font = '宋体';
        this.comp.text_phoneNum.focus = true;
        this.comp.text_phoneNum.maxChars = 11;
    }

    private initEvent() {
        this.comp.text_phoneNum.on(Laya.Event.KEY_UP, this, this.checkInput)
    }

    private checkInput() {
        let phoneLength = this.comp.text_phoneNum.text.length;
        if (phoneLength > 11) {
            //format string
            this.comp.text_phoneNum.text = this.comp.text_phoneNum.text.substr(0, 11);
        }
    }
}