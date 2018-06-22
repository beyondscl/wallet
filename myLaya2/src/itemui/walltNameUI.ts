//主界面弹出框,快速引导层
 class walltNameUI extends Box{
        public WID: number = 100;
        public HEI: number = 30;

        private wImg = new Laya.Image();
        private wName = new Laya.Label();
        private wSpe = new Laya.Image();

        constructor(){
                super();
                this.size(this.WID, this.HEI);
		this.addChild(this.wImg);
		this.addChild(this.wName);
                this.addChild(this.wSpe);
        }
        public init(walletName:string){
                this.wImg.skin = 'img/wallet_manage.png';
                this.wImg.left = 10;
                this.wImg.width = 15;
                this.wImg.height = 15;

                this.wName.text = walletName.replace(/([^]{5})([^]+)/,"$1...");
                this.wName.left = 40;

                this.wSpe.skin = config.resource.sperated;
                this.wSpe.top = 25;
                this.wSpe.left = 0;
                this.wSpe.right = 0;
        }
}