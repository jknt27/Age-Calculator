!function(){var e=document.getElementById("birth_date");e.valueAsDate=new Date,e.onchange=function(){var e=function(e){var n=new Date(e),t=new Date("2024/08/31"),I=Math.abs(t-n);return Math.floor(I/31536e6)}(this.value),n=function(e){var n=new Date(e),t=new Date,I=Math.abs(t-n);return Math.floor(I/31536e6)}(this.value);document.getElementById("currentage").innerHTML="Student is currently: "+n+" yr",document.getElementById("age").innerHTML="Age by August 2024: "+e+" yr",e<=35&&e>0&&(document.getElementById("tooyoung").innerHTML=e<6?"EM UNDERAGE":" ",document.getElementById("AN").innerHTML=6===e?"AU NHI CAP 0":7===e?"AU NHI CAP 1":8===e?"AU NHI CAP 2":9===e?"AU NHI CAP 3":" ",document.getElementById("TN").innerHTML=10===e?"THIEU NHI CAP 1":11===e?"THIEU NHI CAP 2":12===e?"THIEU NHI CAP 3":" ",document.getElementById("NS").innerHTML=13===e?"NGHIA SI CAP 1":14===e?"NGHIA SI CAP 2":15===e?"NGHIA SI CAP 3":" ",document.getElementById("HS").innerHTML=16===e?"HIEP SI CAP 1":17===e?"HIEP SI CAP 2":" ",document.getElementById("HSTT").innerHTML=e>17?"HSTT":" ")}}();
//# sourceMappingURL=main.b2efed0a.js.map