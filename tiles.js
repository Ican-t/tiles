let wall = document.getElementById("wallTile")

let select = document.getElementById("tileSelect")

let tiles = [

{name: "stone 1", url: "tiles/e588f1_3aca4b11f3a4413e9f349cc3fbf984fc~mv2.webp"}, 
{name: "stone 2", url: "tiles/e588f1_bd58da9e77db48b29177547983eb57be~mv2.webp"}, 
{name: "stone 3", url: "tiles/e588f1_153c8a52e5e046cf877a2151b2645ce8~mv2.webp"}

]

/*

I manually coded the tiles in one by one, but if you are to deploy this, 
you should make it so that the code looks at the folder where the tiles 
are located and lists them all out for the user to pick from.

The code should get a list of all the files (their names and their locations)
and put them in an object then in to the tiles array varaible.

I wasn't able to do this in this example because in order to do that, you would 
need to be running in a node environment.  This example was made using vanilla javascript.
*/
function changeTile(tileUrl){
    wall.style.backgroundImage = "url('" + tileUrl + "')"
}

tiles.forEach(tile => {
    let tileItem = document.createElement("div")
    let thumbnail = document.createElement("img")
    let txt = document.createElement("div")
    thumbnail.src = tile.url
    thumbnail.style.width = "50px"
    thumbnail.style.height = "50px"
    tileItem.append(thumbnail)
    txt.innerHTML = tile.name
    txt.style.paddingLeft = "10px"
    tileItem.append(txt)
    tileItem.classList.add("tileItem")
    tileItem.addEventListener("click", () => {
        changeTile(tile.url)
    })
    select.append(tileItem)
})


