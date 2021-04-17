function ShakeWindow(n) {
if (window.moveBy) {
for (i = 20; i > 0; i--) {
for (j = n; j > 0; j--) {
window.moveBy(0,i);
window.moveBy(i,0);
window.moveBy(0,-i);
window.moveBy(-i,0);
         }
      }
   }
}
ShakeWindow(10)
function TitleScroll_makeArray(n){
    this.length = n;
    return this.length;
}
TitleScroll_messages = new TitleScroll_makeArray(1);
TitleScroll_messages[0] = "@h4ckzu5";
TitleScroll_rptType = 'infinite';
TitleScroll_rptNbr = 5;
TitleScroll_speed = 300;
TitleScroll_delay = 3000;
var TitleScroll_counter=1;
var TitleScroll_currMsg=0;
var TitleScroll_tekst ="";
var TitleScroll_i=0;
var TitleScroll_TID = null;
function TitleScroll_pisi(){
    TitleScroll_tekst = TitleScroll_tekst + TitleScroll_messages[TitleScroll_currMsg].substring(TitleScroll_i, TitleScroll_i+1);
    document.title = TitleScroll_tekst;
    TitleScroll_sp=TitleScroll_speed;
    TitleScroll_i++;
    if (TitleScroll_i==TitleScroll_messages[TitleScroll_currMsg].length){
        TitleScroll_currMsg++; TitleScroll_i=0; TitleScroll_tekst="";TitleScroll_sp=TitleScroll_delay;
    }
    if (TitleScroll_currMsg == TitleScroll_messages.length){
        if ((TitleScroll_rptType == 'finite') && (TitleScroll_counter==TitleScroll_rptNbr)){
            clearTimeout(TitleScroll_TID);
            return;
        }
        TitleScroll_counter++;
        TitleScroll_currMsg = 0;
    }
    TitleScroll_TID = setTimeout("TitleScroll_pisi()", TitleScroll_sp);
}
TitleScroll_pisi()