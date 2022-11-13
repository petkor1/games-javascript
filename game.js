kaboom({
    global: true,
    fullscreen: true,
    scale: 1,
    debug: true,
    background: [0, 0, 0, 1]
})

loadRoot('https://imgur.com/')
loadSprite('coin', 'wbKxhcd')
loadSprite('evil-shroom', 'KPO3fR9')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('coin', 'wbKxhcd.png')
loadSprite('coin', 'wbKxhcd.png')


scene("game", () => {
 layers(['bg', 'obj', 'ui'], 'obj');
});

start("game");