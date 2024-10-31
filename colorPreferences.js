let favoriteColors = [];
for (let i = 0; i < 3; i++) {
    let color = prompt("Enter a color you like:");
    favoriteColors.push(color);
    console.log("updated color list:", favoriteColors);
}
let addMore = true;
while (addMore) {
    let newColor = prompt("Enter another color you like ( or 'stop' to finish:");
    if (newColor.toLowerCase() === 'stop') {
        addMore = false;
    } else {
        favoriteColors.push(newColor);
        console.log("Updated color list:", favoriteColors);
    }
}