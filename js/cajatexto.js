var tl=new Array(
"\n                CONTACT ME",
"\nh4ckzu5@mail2tor.com",
"\nhttps://twitter.com/h4ckzu5",
"\n                TEAMS",
"\n[TeamWhoami]~[MexicanHackers]~[BlackOpHn] ");
var speed=0;
var index=0; text_pos=0;
var str_length=tl[0].length;
var contents, row;

function cajadetexto()
{
  contents='';
  row=Math.max(0,index-9);
  while(row<index)
    contents += tl[row++] + '\r\n';
  document.forms[0].elements[0].value = contents + tl[index].substring(0,text_pos) + "_";
  if(text_pos++==str_length)
  {
    text_pos=0;
    index++;
    if(index!=tl.length)
    {
      str_length=tl[index].length;
      setTimeout("cajadetexto()",1000);
    }
  } else
    setTimeout("cajadetexto()",speed);
}