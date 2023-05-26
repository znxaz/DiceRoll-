function FourSided()
{
    var getroll = document.getElementById('td01').innerHTML = calc(4) ;
}
function SixSided()
{
    var getroll = document.getElementById('td01').innerHTML = calc(6) ;
}
function EightSided()
{
    var getroll = document.getElementById('td01').innerHTML = calc(8) ;
}
function TenSided()
{
    var getroll = document.getElementById('td01').innerHTML = calc(10) ;
}
function TwelveSided()
{
    var getroll = document.getElementById('td01').innerHTML = calc(12) ;
}
function  TwentySided()
{
    var getroll = document.getElementById('td01').innerHTML = calc(20) ;
}

function calc(z) 
{
var x = Math.random(x) * z ;
var y = Math.floor( (1 + x % z) );
return y;
}

function TenSidedPercentile() {
    x = Math.random() * 10;
    y = Math.floor(x)
    document.getElementById('td01').innerHTML = (Math.ceil((x)) * 10 + "%")
}