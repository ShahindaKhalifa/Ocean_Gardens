function checkAge() {
    var ageInput = document.getElementById("ageInput").value;
    while ageInput>0{
     if (ageInput <= 12) {
      window.location.href = "#videos";
      window.location.href = "#gallery";
      window.location.href = "#games";
     } else {
      window.location.href = "#articles";}
    }
  }