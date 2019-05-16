let Mobie = function () {
    this.pin = parseInt(100);
    this.Nhap = '';
    this.send = [];
    this.inbox = [];
    let i = Number(1);


    this.tinNhandangsoan = function () {
        if (i%2 !==0) {
            alert("hãy bật máy !");
            return 0
        }
        this.Nhap = (document.getElementById("input").value);
        console.log(this.Nhap);
        this.pin--;

    };
    this.luutinNhan = function () {
        if (i%2 !==0) {
            alert("hãy bật máy !");
            return 0
        }
        this.send.push(this.Nhap);
        console.log(this.send);
        this.pin--;
    };
    this.guiNhanden = function (phone) {
        if (i%2 !==0) {
            alert("hãy bật máy !");
            return 0
        }
        phone.inbox.push(this.send);
        console.log(phone.inbox);
        this.pin--;
    };
    this.xemTinnhan = function () {
        if (i%2 !==0) {
            alert("hãy bật máy !");
            return 0
        }
        document.getElementById("output").innerHTML = this.inbox[this.inbox.length - 1];
        console.log(this.inbox);
        this.pin--;
    };
    this.batTat = function () {
        i++;
        return (i % 2 === 0);
    };
    this.xacPin = function () {
        this.pin++;
    };
    this.checkStatus = function () {
        let x = this.batTat();
        console.log(x);
        if (x) {
            document.getElementById("pin").innerHTML = "on";
            return true
        } else
            document.getElementById("pin").innerHTML = "off";
        return false
    };
    this.hienThipin = function () {
        document.getElementById("%pin").innerHTML = this.pin;
    }

};
let Nokia = new Mobie();
setInterval(function () {

    Nokia.hienThipin();
}, 100);
let Iphone = new Mobie();

