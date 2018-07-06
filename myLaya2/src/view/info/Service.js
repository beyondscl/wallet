var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({__proto__: []} instanceof Array && function (d, b) {
            d.__proto__ = b;
        }) ||
        function (d, b) {
            for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
    return function (d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }

        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**Created by the LayaAirIDE*/
var view;
(function (view) {
    var info;
    (function (info_1) {
        var Service = /** @class */ (function (_super) {
            __extends(Service, _super);

            function Service() {
                var _this = _super.call(this) || this;
                _this.init();
                _this.initEvent();
                return _this;
            }

            Service.prototype.init = function () {
                this.comp = new ui.info.ServiceUI();
                Laya.stage.addChild(this.comp);
                this.comp.text.text = this.getServiceInfo();
            };
            Service.prototype.initEvent = function () {
                this.comp.btn_accept.on(Laya.Event.CLICK, this, this.btnClick, [1]);
                this.comp.agree.on(Laya.Event.CLICK, this, this.btnClick, [2]);
            };
            Service.prototype.setData = function (key) {
            };
            Service.prototype.btnClick = function (index) {
                if (1 == index) {
                    this.comp.removeSelf();
                    util.setItemJson(config.prod.appAccept, []);
                    var walletNames = util.getItem(config.prod.appKey);
                    if (!walletNames) {
                        new guide();
                        return;
                    }
                    var wallet = util.getItem(walletNames[0]);
                    var walletMod = new mod.walletMod();
                    walletMod.setWallet(wallet);
                    mod.userMod.defWallet = walletMod;
                    new view.WalletMain().initQueryData(walletMod);
                    console.log("end loading!");
                }
                if (2 == index) {
                    this.comp.btn_accept.disabled = !this.comp.agree.selected;
                }
            };
            Service.prototype.setParetUI = function (parentUI) {
                this.parentUI = parentUI;
            };
            Service.prototype.getServiceInfo = function () {
                var info = "\r\n" +
                    "                                                  万微钱包服务协议\r\n" +
                    "最近更新于：2018年7月5日\r\n" +
                    "尊敬的用户：\r\n" +
                    "感谢您选择万微钱包服务。《万微钱包服务协议》（以下简称“本协议”）由成都传奇永恒科技有限公司（以下简称“传奇永恒”或“我们”）和用户（以下简称“您”或“用户”）签订，本协议在您与传奇永恒之间具有合同上的法律效力。 \r\n" +
                    "传奇永恒在此特别提醒您在使用万微钱包（以下简称“万微钱包” 或“本软件”）之前，请认真阅读《万微钱包服务协议》及后文提到的相关协议，尤其是本协议规定的“免责及责任限制”等条款将以加粗的形式体现，确保您充分理解本协议中各条款，并自主考虑风险。   \r\n" +
                    "一、 关于本协议的确认与接纳\r\n" +
                    "1. 您理解本协议及有关协议适用于万微钱包及万微钱包上传奇永恒所自主开发和拥有的去中心化应用（简称“DApp”）（排除第三方开发的DApp）。  \r\n" +
                    "2. 您下载万微钱包软件并创建或导入钱包，即视为您已经充分阅读并接受本协议全部条款，本协议立即生效，对双方具有约束力。\r\n" +
                    "3. 本协议可由传奇永恒随时更新，经修改的协议一经在万微钱包上公布，立即自动生效，恕不再另行通知。在传奇永恒公布修改协议条款后，如果您不接受修改后的条款，请立即停止使用万微钱包，您继续使用万微钱包将被视为接受修改后的协议。\r\n" +
                    "4. 如果您未满18周岁，或者是无民事行为能力人或限制民事行为能力人，请在父母或监护人指导下使用万微钱包。   \r\n" +
                    "二、 定义 \r\n" +
                    "1. 万微钱包：指由传奇永恒基于以太坊单链系统（及将来陆续支持的其他区块链系统）开发的区块链钱包，包括其他为方便用户使用区块链系统而开发的辅助工具。   \r\n" +
                    "2. 用户： \r\n" +
                    "（1）用户必须是具备完全民事行为能力的自然人；\r\n" +
                    "（2）若您为18周岁以下的未成年人使用万微钱包服务，需要在您父母或监护人的指导下使用万微钱包。无民事行为能力人使用万微钱包或限制民事行为能力人超过其民事权利或行为能力范围从事交易的，造成的一切后果，万微钱包有权要求您及您的父母或监护人负责。\r\n" +
                    "3. 能力测评问卷：指在您使用万微钱包之前（及在将来的使用过程中），需通过能力测评问卷以证明您了解区块链科技和知识，具备合理使用和管理去中心化钱包的基本能力。\r\n" +
                    "4. 创建或导入钱包：指您使用万微钱包，确认履行本协议并创建或导入钱包的过程。 \r\n" +
                    "5. 钱包密码：指您在万微钱包中创建钱包过程中，软件操作界面提示您填写的密码，该密码用于加密保护私钥。作为去中心化的应用，钱包密码不存储在您的这台移动设备或传奇永恒的服务器，一旦丢失你需要借助明文私钥或助记词重置新密码。  \r\n" +
                    "6. 信息提示：万微钱包软件操作界面涉及的信息提示内容，建议用户按照相关步骤进行操作。\r\n" +
                    "7. 特定用户：指按照中国法律法规及政策规定必须要配合传奇永恒履行个人信息披露义务的用户。\r\n" +
                    "8. 私钥：由256位随机字符构成，是用户拥有并使用数字代币的核心。   \r\n" +
                    "9. 公钥：由私钥借助密码学原理单向推导生成，并用以生成区块链数字钱包地址，数字钱包地址即为公开收款地址。 \r\n" +
                    "10. 助记词：符合区块链BIP39 行业标准，由随机算法生成的12（或15/18/21/24）个有序单词组成。是私钥的易记录表现形式，方便用户备份保管。\r\n" +
                    "11. Keystore: 是私钥或助记词经过用户设置的钱包密码加密保存的文件形式，它只存储在您的这台移动设备中，不会同步至传奇永恒服务器。\r\n" +
                    "12. 数字代币：指万微钱包目前支持的数字代币种类，包括但不限于ETH、DGD等。\r\n" +
                    "13. 资料：指万微钱包上“浏览”、“市场”等版块的文章等资料，这些资料均为传奇永恒所有，未经授权不得转载。\r\n" +
                    "14. 个人信息：指以电子或者其他方式记录的能够单独或者与其他信息结合识别用户个人身份的各种信息，包括但不限于自然人的姓名、出生日期、身份证件号码、个人生物识别信息、住址、电话号码、银行卡号、邮件地址、钱包地址、移动设备信息、操作记录、交易记录等，但不包括用户的钱包密码、私钥、助记词、Keystore。\r\n" +
                    "三、 服务内容   \r\n" +
                    "1. 创建或导入钱包：对万微钱包支持的数字代币，您可以使用万微钱包生成新钱包或导入相关区块链系统的其它钱包工具生成的兼容钱包。   \r\n" +
                    "2. 转账、收款：您可以使用万微钱包的转账、收款功能进行数字代币的管理，即运用私钥进行电子签名，对相关区块链的账本进行修改。转账是指付款方利用收款方的区块链地址进行转账操作，实际的转账、收款行为均在相关区块链系统（而非万微钱包）发生。 \r\n" +
                    "3. 行情查看：您可以使用万微钱包查看所提供的数字代币汇率价格。万微钱包通过抓取相应的数字代币汇率信息并展示在万微钱包中的“市场”版块。\r\n" +
                    "4. 管理数字资产：您可以使用万微钱包添加、保管并移除万微钱包所支持的数字代币（ETH除外）。 \r\n" +
                    "5. 浏览DApp：用户通过在万微钱包上的链接，可以跳转至DApp并使用该DApp（包括传奇永恒自己的DApp和第三方DApp）提供的服务。   \r\n" +
                    "6. 交易记录：我们将通过区块链系统拷贝您全部或部分的交易记录。但交易记录以区块链系统的记载为准。   \r\n" +
                    "7. 暂停服务：您知悉基于区块链系统交易“不可撤销”的属性，我们不能为您暂停或撤销转账交易等操作，但在一定情况下，我们可以暂停或者限制某位用户对万微钱包软件的操作。\r\n" +
                    "8. 其他传奇永恒认为有必要提供的服务。 \r\n" +
                    "用户接受传奇永恒提供的上述服务时应了解以下常见问题：  \r\n" +
                    "1. 秉承着区块链的去中心化特点，并为了保护用户的数字代币安全，传奇永恒提供的是去中心化服务，大大区别于银行业金融机构。用户了解，传奇永恒不提供以下服务：  \r\n" +
                    "（1）存储用户的钱包密码（即用户创建/导入钱包时设置的密码）、私钥、助记词、Keystore；   \r\n" +
                    "（2）找回用户的钱包密码、私钥、助记词、Keystore；\r\n" +
                    "（3）冻结钱包； \r\n" +
                    "（4）挂失钱包； \r\n" +
                    "（5）恢复钱包； \r\n" +
                    "（6）交易回滚。 \r\n" +
                    "2. 由于传奇永恒不提供上述服务，因此用户应当自行保管含有万微钱包的移动设备、备份万微钱包、备份钱包密码、助记词、私钥及Keystore。如用户遗失移动设备、删除且未备份万微钱包、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore，传奇永恒均无法还原钱包或找回钱包密码、私钥、助记词、Keystore；如用户进行交易时误操作（例如输错转账地址），传奇永恒亦无法取消交易。   \r\n" +
                    "3. 传奇永恒和万微钱包所能够提供的数字代币管理服务并未包括所有已存在的数字代币，请勿通过万微钱包操作任何万微钱包不支持的数字代币。  \r\n" +
                    "4. 万微钱包仅是用户的数字代币管理工具，并非交易所或交易平台。虽然本协议将多次提及“交易”，其行为泛指用户使用万微钱包进行的转账和收款操作，这与交易所或交易平台上进行的“交易”有本质区别。   \r\n" +
                    "5. 万微钱包上集成的DApp包括传奇永恒自主拥有的DApp和第三方平台提供的DApp。对于第三方平台提供的DApp，万微钱包仅为用户进入DApp提供区块链浏览器。用户在第三方DApp上接受服务或进行交易前应自行判断和评估该第三方DApp提供的服务或交易是否存在风险。\r\n" +
                    "四、 您的权利义务\r\n" +
                    "（一）创建或导入钱包 \r\n" +
                    "1. 创建或导入钱包：您有权在您的移动设备上通过万微钱包创建和/或导入钱包，有权设定钱包的钱包密码等信息，并有权通过万微钱包应用程序，使用自己的钱包在区块链上进行转账和收款等交易。 \r\n" +
                    "2. 身份验证：按照有关法律法规和政策要求，特定用户在使用万微钱包提供的有关服务时，应当按照万微钱包的提示及时完成相关身份验证，要求您提交包括但不限于您的姓名、身份证号码、手机号码、银行卡号信息等个人信息。否则该特定用户将无法使用有关服务，因特定用户拖延造成的损失由您自行承担。 \r\n" +
                    "3. 传奇永恒可能为不同的终端设备开发不同的软件版本，您应当根据实际需要选择下载合适的版本进行安装。如果您从未经合法授权的第三方获取本软件或与本软件名称相同的安装程序，传奇永恒将无法保证该软件能否正常使用，也无法保证其安全性，因此造成的损失由您自行承担。 \r\n" +
                    "4. 本软件新版本发布后，旧版软件可能无法使用。传奇永恒不保证旧版软件的安全性、继续可用性及提供相应的客户服务。请您随时核对并下载最新版本。\r\n" +
                    "（二）使用\r\n" +
                    "1. 用户应自行妥善保管移动设备、钱包密码、私钥、助记词、Keystore等信息。传奇永恒不负责为用户保管以上信息。因您遗失移动设备、主动或被动泄露、遗忘钱包密码、私钥、助记词、Keystore或遭受他人攻击、诈骗等所引起的一切风险、责任、损失、费用应由您自行承担。\r\n" +
                    "2. 遵循信息提示：您了解并同意遵循万微钱包对您做出的信息提示，按照信息提示的内容进行操作，否则，由此引起的一切风险、责任、损失、费用等应由您自行承担。\r\n" +
                    "3. 您知悉并理解万微钱包没有义务对链接的第三方DApp服务或交易履行尽职调查义务，您应当理性做出投资决策并自主承担相应的投资风险。 \r\n" +
                    "4. 积极完成身份验证：当万微钱包合理认为您的交易行为或交易情况出现异常的，或认为您的身份信息存在疑点的，或万微钱包认为应核对您身份证件或其他必要文件的情形时，请您积极配合万微钱包核对您的有效身份证件或其他必要文件，及时完成相关的身份验证。\r\n" +
                    "5. 转账。 \r\n" +
                    "（1）您知悉对于万微钱包服务中您可使用的日计转账限额和笔数，可能因为您使用该转账服务时所处的国家/地区、监管要求、转账目的、万微钱包风险控制、身份验证等事由而不同。  \r\n" +
                    "（2）您理解基于区块链操作的“不可撤销”属性，当您使用万微钱包转账功能时，您应当自行承担因您操作失误而导致的后果（包括但不限于因您输错转账地址、您自身选择转账节点服务器的问题）。\r\n" +
                    "（3）您知悉在使用万微钱包服务时，以下情况的出现可能导致转账“交易失败”或“打包超时”：\r\n" +
                    "a) 钱包余额不足；\r\n" +
                    "b) 交易矿工费不足；  \r\n" +
                    "c) 区块链执行合约代码失败；\r\n" +
                    "d) 超出监管部门、万微钱包或法律法规规定的付款额度；   \r\n" +
                    "e) 网络、设备等技术故障；  \r\n" +
                    "f) 区块链网络拥堵、故障等原因引起交易被抛弃；\r\n" +
                    "g) 您的地址或交易对方地址被识别为特殊地址, 如高风险地址、交易所地址、ICO 地址、Token地址等。 \r\n" +
                    "（4）您知悉万微钱包仅向您提供转账工具，在您使用万微钱包完成转账后，传奇永恒即完成了当次服务的所有义务，传奇永恒对其他纠纷争议，不负担任何义务。 \r\n" +
                    "6. 合法合规：您知悉在万微钱包进行操作时或利用万微钱包上的DApp进行交易时，您应当遵循有关法律法规、国家政策的要求。  \r\n" +
                    "7. 公告通知：万微钱包会以网站公告、电子邮件、发送短信、电话、消息中心信息、弹窗提示或客户端通知等方式向您发送通知，例如通知您交易进展情况，或者提示您进行相关操作，请您及时予以关注。\r\n" +
                    "8. 服务费用与纳税义务：\r\n" +
                    "（1）万微钱包暂时不向您收取任何形式的服务费或手续费，将来需对某些服务进行收费时将另行约定或公布规则；   \r\n" +
                    "（2）您使用万微钱包进行转账时应支付矿工费，金额由您自行决定。矿工费由相关区块链系统收取；\r\n" +
                    "（3）您知悉在特定情况下，因为您所处的环境及网络状态不稳定，导致您的转账操作未完成时，亦会被相关区块链系统收取矿工费；   \r\n" +
                    "（4）您因在万微钱包进行交易而发生的所有应纳税负及其它方面的费用均由您负责支付。   \r\n" +
                    "五、 风险提示   \r\n" +
                    "1. 您了解并知悉，由于数字代币领域的法律法规政策尚未健全，该领域的数字代币可能会产生无法兑现、技术不稳定等重大风险。且数字代币的价格波动幅度远高于其他金融资产。我们谨慎提醒您应当根据自身财务状况和风险偏好，理性选择持有或处置任何一种数字代币。万微钱包提供的行情查看功能仅系抓取部分交易所的数字代币汇率信息的搜索结果，并不表示为最新行情或最佳报价。 \r\n" +
                    "2. 在使用万微钱包服务时，若您或您的相对方未遵从本协议或相关网站说明、交易、支付页面中之操作提示、规则，万微钱包并不保证交易会顺利完成，且万微钱包不承担损害赔偿责任。若发生前述情形，而款项已先行入账您的或您的交易方的万微钱包或第三方钱包，您理解区块链操作具有的“不可逆”属性，以及相关交易具有“不可撤销”的特征，由您及您的相对方自行承担相应的风险后果。\r\n" +
                    "3. 在您使用万微钱包集成的第三方DApp服务或进行交易时，为了您的利益，传奇永恒建议您仔细阅读本协议及万微钱包提示，了解交易对象及产品信息，谨慎评估风险后再采取行动。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与万微钱包无关。万微钱包对因您的交易行为所引起的一切风险、责任、损失、费用不承担任何责任。   \r\n" +
                    "4. 您在交易过程中应当自行判断对方是否为完全民事行为能力人并自行决定是否与对方进行交易或转账给对方等，且您自行承担与此相关的所有风险。\r\n" +
                    "5. 在转账过程中，如果出现“交易失败”、“打包超时”等类似的异常信息提示时，您应通过相关区块链系统的官方途径或其他的区块链查询工具进行再次确认，以避免重复转账；否则，由此所引起的一切损失和费用应由您自行承担。\r\n" +
                    "6. 您理解当您在万微钱包上创建或导入钱包之后，您的Keystore、私钥、助记词等信息仅存储在当前的这台移动设备中，不存储在万微钱包或传奇永恒的服务器上。您可以按照万微钱包提供的操作指南采取同步钱包等方式更换移动设备。但若您未保存或备份钱包密码、私钥、助记词、Keystore等信息且在您移动设备丢失的情况下，您的数字代币将因此丢失，传奇永恒无法为您找回，您需自行承担相应损失。若您在导出、保存或备份钱包密码、私钥、助记词、Keystore等信息的时候泄密，或保存或备份上述信息的设备或服务器被黑客攻击或控制等情况下，您的数字代币将因此丢失，传奇永恒无法为您找回，您需自行承担相应损失。\r\n" +
                    "7. 我们建议您在创建或导入钱包时对您钱包的钱包密码、私钥、助记词及Keystore等信息做好安全备份。我们提请您注意，请不要采用以下备份方式：截图、邮件、记事本、短信、微信、QQ等电子备份方式。我们建议您在纸质记事本上抄写助记词和Keystore等信息，同时您亦可将电子数据保管至密码管理器。 \r\n" +
                    "8. 我们建议您在安全的网络环境中使用万微钱包，确保您的移动设备没有越狱或Root， 以避免可能存在的安全隐患  \r\n" +
                    "9. 请您在使用我们的服务过程中，警惕非万微钱包官方的诈骗行为。一旦发现此类行为，我们鼓励您第一时间告知我们。  \r\n" +
                    "六、 服务的变更、中断、终止\r\n" +
                    "1. 您同意传奇永恒为保证自主业务经营权可以暂时提供部分服务功能，或于将来暂停部分服务功能或开通新的服务功能。当任何功能减少或者增加或者变化时，只要您仍然使用传奇永恒提供的服务，表示您仍然同意本协议或者本协议修正后的条款。\r\n" +
                    "2. 为保护您的数字代币安全，尽量避免您在不具备区块链基础知识的前提下使用万微钱包而产生的误操作或由此带来的风险，您必须先通过能力测评问卷并达到传奇永恒所要求的合格分数才能使用万微钱包服务，否则，传奇永恒有权限制或拒绝提供部分或全部的服务功能。\r\n" +
                    "3. 您理解存在如下情形时，传奇永恒将暂停提供服务：\r\n" +
                    "（1）因设备、区块链系统维修、升级、故障和通信中断等技术原因而中断业务；\r\n" +
                    "（2）因台风、地震、海啸、洪水、停电、战争或恐怖袭击等不可抗力因素，病毒、木马、黑客攻击、系统不稳定或政府行为等原因，造成传奇永恒系统不能提供服务或传奇永恒合理认为继续提供服务会有较大风险的； \r\n" +
                    "（3）发生传奇永恒无法控制或合理预见的其他情形。  \r\n" +
                    "3. 当您出现如下情况时，传奇永恒可单方面中止或终止您使用万微钱包的部分或全部功能:  \r\n" +
                    "（1）用户死亡； \r\n" +
                    "（2）盗用他人的钱包信息或移动设备；   \r\n" +
                    "（3）填写个人信息时提供虚假信息、在回答能力测评问卷时非本人操作；\r\n" +
                    "（4）拒绝传奇永恒为提升万微钱包功能而发起的强制更新操作；   \r\n" +
                    "（5）将万微钱包用于违法或犯罪活动；   \r\n" +
                    "（6）妨碍其他用户正常使用；\r\n" +
                    "（7）伪称传奇永恒的工作人员或管理人员；\r\n" +
                    "（8）攻击、侵入、更改或以任何其他方式威胁传奇永恒计算机系统的正常运作；\r\n" +
                    "（9）利用万微钱包宣传垃圾广告； \r\n" +
                    "（10）散布谣言，损害传奇永恒和万微钱包商誉； \r\n" +
                    "（11）违法行为，其他违反本协议的行为，及传奇永恒合理认为应当暂停功能的情形。\r\n" +
                    "4. 当您与传奇永恒之间的服务关系变更、中断、终止时，您仍有权在合理时间内导出您钱包等信息。\r\n" +
                    "七、 您合法使用传奇永恒服务的承诺 \r\n" +
                    "1. 您应遵守中华人民共和国相关法律法规及您所居住的国家或地区的法律法规，不得将万微钱包用于任何非法目的，也不得以任何非法方式使用传奇永恒服务。 \r\n" +
                    "2. 您不得利用万微钱包从事违法或犯罪的行为，包括但不限于：   \r\n" +
                    "（1）反对宪法所确定的基本原则，危害国家安全、泄漏国家秘密、颠覆国家政权、破坏国家统一的；\r\n" +
                    "（2）从事任何违法犯罪行为，包括但不限于洗钱、非法集资等；   \r\n" +
                    "（3）通过使用任何自动化程序、软件、引擎、网络爬虫、网页分析工具、数据挖掘工具或类似工具，接入传奇永恒服务、收集或处理传奇永恒所提供的内容，干预或试图干预任何用户或任何其他方式接入传奇永恒服务的行为；\r\n" +
                    "（4）提供赌博资讯或以任何方式引诱他人参与赌博；  \r\n" +
                    "（5）侵入他人万微钱包中的钱包盗取数字代币；\r\n" +
                    "（6）进行与交易对方宣称的交易内容不符的交易，或不真实的交易；\r\n" +
                    "（7）从事任何侵害或可能侵害万微钱包服务系统、数据之行为；   \r\n" +
                    "（8）其他违法以及传奇永恒有正当理由认为不适当的行为。 \r\n" +
                    "3. 您理解并同意，如因您违反有关法律（包括但不限于海关及税务方面的监管规定）或者本协议之规定，使传奇永恒遭受任何损失、受到任何第三方的索赔或任何行政管理部门的处罚，您应对传奇永恒进行赔偿，包括合理的律师费用。 \r\n" +
                    "4. 您承诺按时缴纳传奇永恒的服务费用（如有），否则传奇永恒有权暂停或中止对您提供的服务。\r\n" +
                    "八、 隐私条款   \r\n" +
                    "1. 传奇永恒十分重视对用户隐私的保护，相关隐私保护政策请参考传奇永恒公布并不时更新的《万微钱包隐私政策》。\r\n" +
                    "九、 免责及责任限制  \r\n" +
                    "1. 传奇永恒仅对本协议中所列明的义务承担责任。\r\n" +
                    "2. 您理解和同意，在法律所允许的范围内，传奇永恒只能按照现有的技术水平和条件提供服务。因下列原因导致万微钱包无法正常提供服务，传奇永恒不承担责任：   \r\n" +
                    "（1）万微钱包系统停机维护或升级； \r\n" +
                    "（2）因台风、地震、洪水、雷电或恐怖袭击等不可抗力原因； \r\n" +
                    "（3）您的移动设备软硬件和通信线路、供电线路出现故障的； \r\n" +
                    "（4）您操作不当或未通过传奇永恒授权或认可的方式使用传奇永恒服务的；\r\n" +
                    "（5）因病毒、木马、恶意程序攻击、网络拥堵、系统不稳定、系统或设备故障、通讯故障、电力故障、银行等原因或政府行为等原因； \r\n" +
                    "（6）非因传奇永恒的原因而引起的任何其它原因。\r\n" +
                    "3. 传奇永恒对以下情形不承担责任： \r\n" +
                    "（1）因用户遗失移动设备、删除且未备份万微钱包、删除且未备份钱包、钱包被盗或遗忘钱包密码、私钥、助记词、Keystore而导致的数字代币丢失；\r\n" +
                    "（2）因用户自行泄露钱包密码、私钥、助记词、Keystore，或借用、转让或授权他人使用自己的移动设备或万微钱包钱包，或未通过传奇永恒官方渠道下载万微钱包应用程序或其他不安全的方式使用万微钱包应用程序导致的数字代币丢失；   \r\n" +
                    "（3）因用户误操作（包括但不限于您输错转账地址、您自身选择转账节点服务器的问题）导致的数字代币丢失； \r\n" +
                    "（4）因用户不理解区块链技术的性质而进行误操作导致的数字代币丢失；\r\n" +
                    "（5）因时间滞后、区块链系统不稳定等原因导致传奇永恒拷贝用户在区块链上的交易记录发生偏差；\r\n" +
                    "（6）用户在第三方DApp上操作产生的风险和后果。\r\n" +
                    "4. 您理解万微钱包仅作为您数字代币管理的工具。传奇永恒不能控制第三方DApp提供的产品及服务的质量、安全或合法性，信息的真实性或准确性，以及相对方履行其在与您签订的协议项下的各项义务的能力。所有您在第三方DApp进行的交易行为系您的个人行为，有约束力的合同关系在您和您的相对方之间建立，与万微钱包无关。传奇永恒提醒您应该通过自己的谨慎判断确定登录DApp及相关信息的真实性、合法性和有效性。您与任何第三方交易所产生的风险亦应由您自行承担。   \r\n" +
                    "5. 传奇永恒可能同时为您及您的交易对手方提供服务，您同意对传奇永恒可能存在的该等行为予以明确豁免任何实际或潜在的利益冲突，并不得以此来主张传奇永恒在提供服务时存在法律上的瑕疵，也不因此而加重传奇永恒的责任或注意义务。\r\n" +
                    "6. 传奇永恒不提供以下形式的保证： \r\n" +
                    "（1）传奇永恒服务将符合您的全部需求； \r\n" +
                    "（2）您经由传奇永恒服务取得的任何技术、产品、服务、资讯将符合您的期望；\r\n" +
                    "（3）传奇永恒从第三方交易所抓取的数字代币市场交易行情等信息的及时性、准确性、完整性、可靠性做出保证；   \r\n" +
                    "（4）您在万微钱包上的交易各方会及时履行其在与您达成的交易协议中各项义务。   \r\n" +
                    "7. 在任何情况下，传奇永恒对本协议所承担的违约赔偿责任总额不超过1）0.1个以太币；或2）人民币500元，以较高的为准。\r\n" +
                    "8. 您理解万微钱包仅作为用户管理数字代币、显示交易信息的工具，传奇永恒不提供法律、税务或投资建议等服务。您应当自行向法律、税务、投资方面的专业人士寻求建议，且您在使用我们服务过程中所遭受的投资损失、数据损失等，传奇永恒概不负责。   \r\n" +
                    "9. 您理解根据有关中国政策法规的要求，我们可能不时更改我们的用户准入标准，限定向某一特定群体提供服务的范围和方式等。\r\n" +
                    "十、 完整协议   \r\n" +
                    "1. 本协议由《万微钱包服务协议》、《万微钱包隐私政策》及传奇永恒不时公布的各项规则（包括“帮助中心”的内容）组成。\r\n" +
                    "2. 本协议部分内容被有管辖权的法院认定为违反或无效的，不因此影响其他内容的效力。   \r\n" +
                    "3. 本协议的任何译文版本仅为方便用户而提供，无意对本协议的条款进行修改。如果本协议的中文版本与非中文版本之间存在冲突，应以中文版本为准。  \r\n" +
                    "十一、 知识产权保护  \r\n" +
                    "1.万微钱包系传奇永恒开发并拥有知识产权的应用程序。 万微钱包中显示的任何内容（包括本协议、公告、文章、视频、音频、图片、档案、资讯、资料、商标或标识）的知识产权归传奇永恒或第三方权利人所有。用户仅可为持有和管理数字代币之目的使用万微钱包应用程序及其中的内容。未经传奇永恒或第三方权利人的事先书面同意，任何人不得擅自使用、修改、反向编译、复制、公开传播、改变、散布、发行或公开发表上述应用程序及内容。\r\n" +
                    "十二、 法律适用与争议解决  \r\n" +
                    "1. 本协议及其修订版之效力、解释、变更、执行与争议解决均适用中华人民共和国法律，如无相关法律规定，则应当适用国际商业惯例和（或）行业惯例。\r\n" +
                    "2. 若您和传奇永恒之间发生任何纠纷或争议，首先应友好协商解决，协商不成的，任何一方可提交传奇永恒所在地有管辖权的人民法院管辖。 \r\n" +
                    "十三、 其他 \r\n" +
                    "1. 如您是中华人民共和国以外用户，您需全面了解并遵守您所在司法辖区与使用传奇永恒服务所有相关法律、法规及规则。\r\n" +
                    "2. 您在使用传奇永恒服务过程中，如遇到任何问题，您可以通过在万微钱包提交反馈等方式联系我们。  \r\n" +
                    "3. 您可以在万微钱包中查看本协议。 传奇永恒鼓励您在每次访问万微钱包时都查阅传奇永恒的服务协议。\r\n" +
                    "4. 本协议自%年%月%日起适用。\r\n" +
                    "本协议未尽事宜，您需遵守传奇永恒不时更新的公告及相关规则。  \r\n" +
                    "成都传奇永恒科技有限公司   \r\n";
                return info;
            };
            return Service;
        }(ui.info.ServiceUI));
        info_1.Service = Service;
    })(info = view.info || (view.info = {}));
})(view || (view = {}));
//# sourceMappingURL=Service.js.map