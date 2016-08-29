// {54A8CD2D-3565-48C8-BDD1-D319FAF649BB}
// 54A8CD2D356548C8BDD1D319FAF649BB
//<img src="~/media/E4989B4404274176828B3F6C6040B712.ashx" class="align-left">
//<a href="~/link.aspx?_id=233475AEBFFF4FDEAFCCB6ED943B68BE&amp;_z=z" class="arrows">


class Transform {

    guids: [string];
    inputTxtValue: string;
    inputTxt: any;
    outputTxt: any;
    outputImg: any;
    outputLink: any;

    constructor() {

        // input field
        this.inputTxt = document.getElementById('guid');

        // output fields
        this.outputTxt = document.getElementById('output-txt');
        this.outputImg = document.getElementById('output-img');
        this.outputLink = document.getElementById('output-link');

        // proceed
        this._listen();

    }

    private _listen = ():void => {

        // process
        document.getElementById('transformButton').addEventListener('click', this._transformer);

        // clear
        document.getElementById('clearButton').addEventListener('click', this._clearInputs);

    }

    private _transformer = ():void => {

        this.inputTxt.value.split('\n').forEach((guid) => {

            if(guid.length > 0) {
                if (/^{/.test(guid)) {
                    this._output(['img', 'link', 'txt'], this._removeBrackets(guid));
                } else {
                    this._output(['txt'], this._addBrackets(guid));
                }
            }

        });

        // remove original input
        this.inputTxt.value = '';

    }

    private _output = (outputType: string[], guid: string):void => {

        outputType.forEach((type: string) => {

            switch(type){
                case "img":

                    this.outputImg.value += (/>/.test(this.outputImg.value) === true ? '\n' : '');
                    this.outputImg.value += `<img src="~/media/${guid}.ashx">`;


                break;

                case "link":

                    this.outputLink.value += (/>/.test(this.outputLink.value) === true ? '\n' : '');
                    this.outputLink.value += `<a href="~/link.aspx?_id=${guid}&amp;_z=z class="arrows">`;

                break;

                case "txt":

                    this.outputTxt.value += (this.outputTxt.value.length > 0 === true ? '\n' : '');
                    this.outputTxt.value += guid;

                break;
            }

        });

    }

    private _removeBrackets = (guid: string):string => {
        return guid.replace(/[^\w]/g, "");
    }

    private _addBrackets = (guid: string):string => {
        return '{' + guid.substring(0, 8) + '-' + guid.substring(8, 12) + '-' + guid.substring(12, 16) + '-' + guid.substring(16, 20) + '-' + guid.substring(20, 32) + '}';
    }

    private _clearInputs = ():void => {

        this.inputTxt.value = '';
        this.outputTxt.value = '';
        this.outputImg.value = '';
        this.outputLink.value = '';

    }

}

var guidHelper = new Transform();
