var ipsumArray = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "Ut", "pulsi", "recurrant", "Nemo", "nostrum", "istius", "generis", "asotos", "iucunde,", "putat", "vivere", "Quos", "nisi", "redarguimus", "omnis", "virtus", "omne", "decus", "omnis", "vera", "laus", "deserenda", "est", "Apparet", "statim", "quae", "sint", "officia", "quae", "actiones", "Itaque", "rebus", "minime", "obscuris", "non", "multus", "est", "apud", "eos", "disserendi", "labor", "Duo", "Reges", "constructio", "interrete", "Progredientibus", "autem", "aetatibus", "sensim", "tardeve", "potius", "quasi", "nosmet", "ipsos", "cognoscimus", "Bona", "autem", "corporis", "huic", "sunt", "quod", "posterius", "posui", "similiora", "Tollitur", "beneficium", "tollitur", "gratia", "quae", "sunt", "vincla", "concordiae"];

var rand = Math.floor(Math.random() * ipsumArray.length);


function setup() {
    createCanvas(720, 400);
    // Starts in the middle
    x = width / 2;
    y = height;

}

function draw() {
    text(rand, 10, 10, 20, 20);
    // Jiggling randomly on the horizontal axis
    x = x + random(-1, 1);
    // Moving up at a constant speed
    y = y - 1;

    // Reset to the bottom
    if (y < 0) {
        y = height;
    }
}