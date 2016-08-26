var Transform = (function () {
    function Transform() {
        var _this = this;
        this._listen = function () {
            document.getElementById('transformButton').addEventListener('click', _this._transformer);
            document.getElementById('clearButton').addEventListener('click', _this._clearInputs);
        };
        this._transformer = function () {
            _this.inputTxt.value.split('\n').forEach(function (guid) {
                if (guid.length > 0) {
                    if (/^{/.test(guid)) {
                        _this._output(['img', 'link', 'txt'], _this._removeBrackets(guid));
                    }
                    else {
                        _this._output(['txt'], _this._addBrackets(guid));
                    }
                }
            });
            _this.inputTxt.value = '';
        };
        this._output = function (outputType, guid) {
            outputType.forEach(function (type) {
                switch (type) {
                    case "img":
                        _this.outputImg.value += (/>/.test(_this.outputImg.value) === true ? '\n' : '');
                        _this.outputImg.value += "<img src=\"~/media/" + guid + ".ashx\">";
                        break;
                    case "link":
                        _this.outputLink.value += (/>/.test(_this.outputLink.value) === true ? '\n' : '');
                        _this.outputLink.value += "<a href=\"~/link.aspx?_id=" + guid + "&amp;_z=z class=\"arrows\">";
                        break;
                    case "txt":
                        _this.outputTxt.value += (/>/.test(_this.outputTxt.value) === true ? '\n' : '');
                        _this.outputTxt.value += guid;
                        break;
                }
            });
        };
        this._removeBrackets = function (guid) {
            return guid.replace(/[^\w]/g, "");
        };
        this._addBrackets = function (guid) {
            return '{' + guid.substring(0, 8) + '-' + guid.substring(8, 12) + '-' + guid.substring(12, 16) + '-' + guid.substring(16, 20) + '-' + guid.substring(20, 32) + '}';
        };
        this._clearInputs = function () {
            _this.inputTxt.value = '';
            _this.outputTxt.value = '';
            _this.outputImg.value = '';
            _this.outputLink.value = '';
        };
        this.inputTxt = document.getElementById('guid');
        this.outputTxt = document.getElementById('output-txt');
        this.outputImg = document.getElementById('output-img');
        this.outputLink = document.getElementById('output-link');
        this._listen();
    }
    return Transform;
}());
var guidHelper = new Transform();
