    window.onload = setInterval(clock,0);

    function clock()
    {
	  var d = new Date();
	  
	  var date = d.getDate();
	  
	  var month = d.getMonth();
	  var montharr =["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
	  month=montharr[month];
	  
	  var year = d.getFullYear();
	  
	  var day = d.getDay();
	  var dayarr =["Ahad","Senin","Selasa","Rabu","Kamis","Jum'at","Sabtu"];
	  day=dayarr[day];
	  
	  var hour =d.getHours();
      var min = d.getMinutes();
	  var sec = d.getSeconds();
	  if(hour<=9) hour="0"+hour;
	  if(min<=9) min="0"+min;
	  if(sec<=9) sec="0"+sec;
	
	  document.getElementById("date_amber").innerHTML=day+", "+date+" "+month+" "+year;
	  document.getElementById("time_amber").innerHTML=hour+":"+min+":"+sec;

    }
	