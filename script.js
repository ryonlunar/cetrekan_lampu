function saklar(ruangan,id){
    let idLampu = document.getElementById(`toggle-${ruangan}-${id}`).checked;
    let imgLampu = document.getElementById(`img-${ruangan}-${id}`);
    
    imgLampu.src = idLampu ? "graphics/on.gif" : "graphics/off.gif";
}