apagar()
{
    this.videoNode.pause();

    if(this.stream)
    {
        this.stream.getTracks()[0].stop();
    }
}

tomarFoto()
{
    let canvas = document.createElement('canvas');


    canvas.setAttribute('width', 200);
    canvas.setAttribute('height', 200);

    let context = canvas.getContext('2d');

    canvas.drawImage(this.videoNode, 0, 0, canvas.width, canvas.height);

    this.foto = context.canvas.toDataURL();
}