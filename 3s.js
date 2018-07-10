function diffImage() 
{
	var img = document.getElementById("image1");
   if(img.src.match("1")) document.getElementById("image1").src = "./pics/3.jpg";
   else document.getElementById("image1").src = "./pics/1.jpg";
}