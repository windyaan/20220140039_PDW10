function kirimData() { 
    var nama = document.getElementById("nama").value; 
    var nim = document.getElementById("nim").value; 
    var peminatan = document.querySelector('input[name="peminatan"]:checked') ? document.querySelector('input[name="peminatan"]:checked').value : ""; 
    var alamat = document.getElementById("alamat").value; 
    var angkatan = document.getElementById("angkatan").value; 
    var tanggal = document.getElementById("tanggal").value; 

    if (!peminatan) {
        alert("Silakan pilih peminatan.");
        return false;
    }

    var message = "Nama: " + nama + "\n" + 
                  "NIM: " + nim + "\n" + 
                  "Peminatan: " + peminatan + "\n" + 
                  "Alamat: " + alamat + "\n" + 
                  "Angkatan: " + angkatan + "\n" + 
                  "Tanggal Lahir: " + tanggal; 

    alert(message); 
     
    return false; 
}
