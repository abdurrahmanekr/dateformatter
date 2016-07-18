/*
    author Avare Kodcu (Abdurrahman Eker)
 */
String.prototype.strToDate = function() {
    var yil = this.slice(0, 4);
    var ay = this.slice(4, 6);
    var gun = this.slice(6, 8);
    var saat = this.slice(8, 10);
    var dakika = this.slice(10, 12);
    return new Date(yil + "-" + ay + "-" + gun + " " + saat + ":" + dakika);
};
Date.prototype.dateToStr = function() {
    var yil = this.getUTCFullYear();
    var ay = parseInt((this.getMonth() + 1) / 10) == 0 ? ("0" + (this.getMonth() + 1)) : (this.getMonth() + 1);
    var gun = parseInt(this.getDate() / 10) == 0 ? ("0" + this.getDate()) : this.getDate();
    var saat = parseInt(this.getHours() / 10) == 0 ? ("0" + this.getHours()) : this.getHours();
    var dakika = parseInt(this.getMinutes() / 10) == 0 ? ("0" + this.getMinutes()) : this.getMinutes();
    // return yil + "-" + ay + "-" + gun + " " + saat + ":" + dakika;
    return String(yil + ay + gun + saat + dakika);
}
Date.prototype.dateToFormat = function(format) {
    var date = this.dateToStr();
    var yil = date.slice(0, 4);
    var ay = date.slice(4, 6);
    var gun = date.slice(6, 8);
    var saat = date.slice(8, 10);
    var dakika = date.slice(10, 12);
    var result = "";
    
    for (var i = 0; i < format.length; i++) {
        switch (format[i]) {
            case "y":
            	result += yil;
                break;
            case "M":
            	result += ay;
                break;
            case "d":
            	result += gun;
                break;
            case "H":
            	result += saat;
                break;
            case "m":
            	result += dakika;
                break;
        	default : 
        		result += format[i];
        }
    }
    return result;
};
String.prototype.dateToFormat = function(format) {
	return this.strToDate().dateToFormat(format);
};