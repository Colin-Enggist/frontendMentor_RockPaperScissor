
    

function circles(i){
    circles[0].color.addColorStop(0, 'hsl(349, 71%, 52%)')
    circles[0].color.addColorStop(1, 'hsl(349, 70%, 56%)')
    circles[1].color.addColorStop(0, 'hsl(230, 89%, 62%)');
    circles[1].color.addColorStop(1, 'hsl(230, 89%, 65%)');
    circles[2].color.addColorStop(0, 'hsl(39, 89%, 49%)');
    circles[2].color.addColorStop(1, 'hsl(40, 84%, 53%)');
    let circles = [
        {color: ctx.createLinearGradient(50, 0, 50, 100), x: 405, y: 380}, 
        {color: ctx.createLinearGradient(50, 0, 50, 100), x: 262, y: 130}, 
        {color: ctx.createLinearGradient(50, 0, 50, 100), x: 545, y: 130},
    ];

    return circles[i]
}    
    

function  img(i){
    img[0].path.src = '../images/icon-rock.svg';
    img[1].path.src = '../images/icon-paper.svg';
    img[2].path.src = '../images/icon-scissors.svg';
    let img = [{path:new Image(), x: 380, y: 360}, {path:new Image(), x: 235, y: 100}, {path:new Image(), x: 520, y: 100}];
    return img[i]
}
    

function backgrounds(i){
    backgrounds[0].path.src = '../images/bg-triangle.svg';
    let backgrounds = [{path:new Image(), x: 250, y: 130},]

    return backgrounds[i]
}

    
    export {circles, backgrounds, img}
