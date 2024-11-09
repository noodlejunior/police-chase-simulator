scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    scene.cameraShake(2, 500)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . f f . . . . . 
        . . . . . . . . f . . . . . . . 
        . . . . 2 2 . 2 2 . 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . d d d d d d d d . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 f 2 2 f 2 2 . . . . 
        . . . . 2 2 . 2 2 . 2 2 . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 0)
    if (Nitro > 0) {
        pause(1500)
    } else {
        pause(2000)
    }
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Projectile, function (sprite, otherSprite) {
    sprites.destroy(sprite)
    characterAnimations.runFrames(
    otherSprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 4 4 . . . . . . . 
        . . . . . . 4 5 5 4 . . . . . . 
        . . . . . . 2 5 5 2 . . . . . . 
        . . . . . . . 2 2 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 4 . . . . . 
        . . . . 2 . . . . 4 4 . . . . . 
        . . . . 2 4 . . 4 5 4 . . . . . 
        . . . . . 2 4 d 5 5 4 . . . . . 
        . . . . . 2 5 5 5 5 4 . . . . . 
        . . . . . . 2 5 5 5 5 4 . . . . 
        . . . . . . 2 5 4 2 4 4 . . . . 
        . . . . . . 4 4 . . 2 4 4 . . . 
        . . . . . 4 4 . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . 3 . . . . . . . . . . . 4 . . 
        . 3 3 . . . . . . . . . 4 4 . . 
        . 3 d 3 . . 4 4 . . 4 4 d 4 . . 
        . . 3 5 3 4 5 5 4 4 d d 4 4 . . 
        . . 3 d 5 d 1 1 d 5 5 d 4 4 . . 
        . . 4 5 5 1 1 1 1 5 1 1 5 4 . . 
        . 4 5 5 5 5 1 1 5 1 1 1 d 4 4 . 
        . 4 d 5 1 1 5 5 5 1 1 1 5 5 4 . 
        . 4 4 5 1 1 5 5 5 5 5 d 5 5 4 . 
        . . 4 3 d 5 5 5 d 5 5 d d d 4 . 
        . 4 5 5 d 5 5 5 d d d 5 5 4 . . 
        . 4 5 5 d 3 5 d d 3 d 5 5 4 . . 
        . 4 4 d d 4 d d d 4 3 d d 4 . . 
        . . 4 5 4 4 4 4 4 4 4 4 4 . . . 
        . 4 5 4 . . 4 4 4 . . . 4 4 . . 
        . 4 4 . . . . . . . . . . 4 4 . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . b b . b b b . . . . . 
        . . . . b 1 1 b 1 1 1 b . . . . 
        . . b b 3 1 1 d d 1 d d b b . . 
        . b 1 1 d d b b b b b 1 1 b . . 
        . b 1 1 1 b . . . . . b d d b . 
        . . 3 d d b . . . . . b d 1 1 b 
        . b 1 d 3 . . . . . . . b 1 1 b 
        . b 1 1 b . . . . . . b b 1 d b 
        . b 1 d b . . . . . . b d 3 d b 
        . b b d d b . . . . b d d d b . 
        . b d d d d b . b b 3 d d 3 b . 
        . . b d d 3 3 b d 3 3 b b b . . 
        . . . b b b d d d d d b . . . . 
        . . . . . . b b b b b . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.NotMoving)
    )
    music.play(music.melodyPlayable(music.bigCrash), music.PlaybackMode.UntilDone)
    scene.cameraShake(2, 100)
    pause(500)
    sprites.destroy(otherSprite)
    info.changeScoreBy(100)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile28`, function (sprite, location) {
    info.changeScoreBy(500)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
    music.stopAllSounds()
    tiles.setTileAt(tiles.getTileLocation(14, 14), assets.tile`myTile26`)
    mySprite.setPosition(32, 32)
    music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    music.stopAllSounds()
    game.setGameOverEffect(true, color.Darken)
    game.setGameOverMessage(true, "GAME OVER!")
    game.setGameOverPlayable(true, music.melodyPlayable(music.wawawawaa), false)
    game.gameOver(true)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
let myEnemy: Sprite = null
let Nitro = 0
let projectile: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 2 2 . . 
    . . . . . 2 c 2 2 2 2 2 2 4 2 . 
    . . . . 2 c c 2 2 2 2 2 2 4 c 2 
    . . d 2 4 c c 2 4 4 4 4 4 4 c c 
    . d 2 2 4 c b e e e e e e e 2 c 
    . 2 2 2 4 b e e b b b e b b e 2 
    . 2 2 2 2 2 e b b b b e b b b e 
    . 2 2 2 2 e 2 2 2 2 2 e 2 2 2 e 
    . 2 d d 2 e f e e e f e e e e e 
    . d d 2 e e e f e e f e e e e e 
    . e e e e e e e f f f e e e e e 
    . e e e e f f f e e e e f f f f 
    . . . e f b d d f e e f b d d f 
    . . . . f f f f . . . . f f f . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
mySprite.setPosition(32, 32)
controller.moveSprite(mySprite, 200, 200)
scene.cameraFollowSprite(mySprite)
tiles.setCurrentTilemap(tilemap`City`)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 2 2 2 2 2 4 b e . 
    . . e e 9 9 4 4 2 2 2 2 4 9 b e 
    . e 2 2 9 9 4 4 4 2 2 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f b c c f e e f b c c f . 
    . . . . b b f . . . . b b f . . 
    `,img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 4 4 2 2 2 4 b e . 
    . . e e 9 9 4 4 4 4 2 2 4 9 b e 
    . e 2 2 9 9 4 4 4 4 4 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f f f b f e e f f f b f . 
    . . . . c b b . . . . c b b . . 
    `,img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 2 2 2 4 4 4 b e . 
    . . e e 9 9 4 2 2 2 4 4 4 9 b e 
    . e 2 2 9 9 4 4 2 2 2 4 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f c b b f e e f c b b f . 
    . . . . f f f . . . . f f f . . 
    `,img`
    . . . . . . . e e e e e . . . . 
    . . . . . e e 2 2 2 2 2 e . . . 
    . . . . e e 2 2 2 2 2 2 2 e . . 
    . . . . e 9 4 2 2 2 2 2 4 b e . 
    . . e e 9 9 4 2 2 2 2 2 4 9 b e 
    . e 2 2 9 9 4 4 2 2 2 2 4 9 9 e 
    e 2 2 2 9 9 2 4 4 4 4 4 2 9 9 e 
    e 2 2 2 9 9 e e e e e e e 9 9 e 
    e 2 2 2 9 b e b b b e b e b 9 e 
    e 2 e e e e b b b b e b b e b e 
    e e 3 3 e e 2 2 2 2 e 2 2 e e e 
    e 3 3 e e e e e e e e e e e e e 
    e e e e e e e e e e e e e e e e 
    e e e e f f f e e e e f f f e e 
    . e e f b b c f e e f b b c f . 
    . . . . c f f . . . . c f f . . 
    `],
100,
characterAnimations.rule(Predicate.MovingLeft)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . e e e e e . . . . . . . 
    . . . e 2 2 2 2 2 e e . . . . . 
    . . e 2 2 2 2 2 2 2 e e . . . . 
    . e b 4 2 2 2 2 2 4 9 e . . . . 
    e b 9 4 2 2 2 2 4 4 9 9 e e . . 
    e 9 9 4 2 2 2 4 4 4 9 9 2 2 e . 
    e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
    e 9 9 e e e e e e e 9 9 2 2 2 e 
    e 9 b e b e b b b e b 9 2 2 2 e 
    e b e b b e b b b b e e e e 2 e 
    e e e 2 2 e 2 2 2 2 e e 3 3 e e 
    e e e e e e e e e e e e e 3 3 e 
    e e e e e e e e e e e e e e e e 
    e e f f f e e e e f f f e e e e 
    . f c c b f e e f c c b f e e . 
    . . f b b . . . . f b b . . . . 
    `,img`
    . . . . e e e e e . . . . . . . 
    . . . e 2 2 2 2 2 e e . . . . . 
    . . e 2 2 2 2 2 2 2 e e . . . . 
    . e b 4 2 2 2 4 4 4 9 e . . . . 
    e b 9 4 2 2 4 4 4 4 9 9 e e . . 
    e 9 9 4 2 4 4 4 4 4 9 9 2 2 e . 
    e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
    e 9 9 e e e e e e e 9 9 2 2 2 e 
    e 9 b e b e b b b e b 9 2 2 2 e 
    e b e b b e b b b b e e e e 2 e 
    e e e 2 2 e 2 2 2 2 e e 3 3 e e 
    e e e e e e e e e e e e e 3 3 e 
    e e e e e e e e e e e e e e e e 
    e e f f f e e e e f f f e e e e 
    . f b f f f e e f b f f f e e . 
    . . b b c . . . . b b c . . . . 
    `,img`
    . . . . e e e e e . . . . . . . 
    . . . e 2 2 2 2 2 e e . . . . . 
    . . e 2 2 2 2 2 2 2 e e . . . . 
    . e b 4 4 4 2 2 2 4 9 e . . . . 
    e b 9 4 4 4 2 2 2 4 9 9 e e . . 
    e 9 9 4 4 2 2 2 4 4 9 9 2 2 e . 
    e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
    e 9 9 e e e e e e e 9 9 2 2 2 e 
    e 9 b e b e b b b e b 9 2 2 2 e 
    e b e b b e b b b b e e e e 2 e 
    e e e 2 2 e 2 2 2 2 e e 3 3 e e 
    e e e e e e e e e e e e e 3 3 e 
    e e e e e e e e e e e e e e e e 
    e e f f f e e e e f f f e e e e 
    . f b b c f e e f b b c f e e . 
    . . f f f . . . . f f f . . . . 
    `,img`
    . . . . e e e e e . . . . . . . 
    . . . e 2 2 2 2 2 e e . . . . . 
    . . e 2 2 2 2 2 2 2 e e . . . . 
    . e b 4 2 2 2 2 2 4 9 e . . . . 
    e b 9 4 2 2 2 2 2 4 9 9 e e . . 
    e 9 9 4 2 2 2 2 4 4 9 9 2 2 e . 
    e 9 9 2 4 4 4 4 4 2 9 9 2 2 2 e 
    e 9 9 e e e e e e e 9 9 2 2 2 e 
    e 9 b e b e b b b e b 9 2 2 2 e 
    e b e b b e b b b b e e e e 2 e 
    e e e 2 2 e 2 2 2 2 e e 3 3 e e 
    e e e e e e e e e e e e e 3 3 e 
    e e e e e e e e e e e e e e e e 
    e e f f f e e e e f f f e e e e 
    . f c b b f e e f c b b f e e . 
    . . f f c . . . . f f c . . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingRight)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . e e c c e e . . . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    . . . . 2 c 2 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 2 4 2 2 2 2 2 c 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 2 4 2 2 2 2 2 2 2 f . 
    . . . f 2 c 2 4 4 2 2 2 c 2 f . 
    . . . e 2 c e c c c c e c 2 e . 
    . . . e 2 e c b b b b c e 2 e . 
    . . . e 2 e b b b b b b e 2 e . 
    . . . e e e e e e e e e e e e . 
    . . . f e d e e e e e e d e f . 
    . . . f e 2 d e e e e d 2 e f . 
    . . . f f e e e e e e e e f f . 
    . . . . f f . . . . . . f f . . 
    `],
100,
characterAnimations.rule(Predicate.MovingUp)
)
characterAnimations.loopFrames(
mySprite,
[img`
    . . . . . . . . . . . . . . . . 
    . . . . . . 2 2 2 2 2 2 . . . . 
    . . . . . 2 2 4 4 2 2 2 2 . . . 
    . . . . . c 4 2 2 2 2 2 c . . . 
    . . . . 2 c 4 2 2 2 2 2 c 2 . . 
    . . . e 2 c 4 2 2 2 2 2 c 2 e . 
    . . . f 2 c 4 2 2 2 2 2 c 2 f . 
    . . . f e c 2 2 2 2 2 2 c e f . 
    . . . f 2 c 2 b b b b 2 c 2 f . 
    . . . e 2 2 b c c c c b 2 2 e . 
    . . . e e b c c c c c c b e e . 
    . . . f e 4 4 4 4 4 4 4 4 e f . 
    . . . f e d 2 2 2 2 2 2 d e f . 
    . . . . 2 d d 2 2 2 2 d d 2 f . 
    . . . . f 2 d 2 2 2 2 d 2 f . . 
    . . . . . e 2 2 2 2 2 2 e . . . 
    `],
100,
characterAnimations.rule(Predicate.MovingDown)
)
game.onUpdateInterval(1000, function () {
    music.play(music.createSoundEffect(
    WaveShape.Triangle,
    585,
    585,
    193,
    201,
    9999,
    SoundExpressionEffect.Vibrato,
    InterpolationCurve.Curve
    ), music.PlaybackMode.LoopingInBackground)
    myEnemy = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 2 . . . . . . . . . . 2 . . 
        . 2 2 8 . . . . . . . . 2 2 8 . 
        . 2 8 8 . . 5 . . 5 . . 2 8 8 . 
        f f f f f f f f f f f f f f f f 
        f 2 2 f 8 8 f 2 2 f 8 8 f 2 2 f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Enemy)
    characterAnimations.loopFrames(
    myEnemy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 2 . . . . . . . . . . 2 . . . 
        . . . 8 . . . . . . 2 . . . . 8 
        2 . . . . . 8 . . . . 2 . . . . 
        . . 2 . . 8 . . . . . . . 2 . . 
        . 2 2 8 . . 5 . . 5 . . 2 2 8 . 
        . 2 8 8 . 5 5 . . 5 5 . 2 8 8 . 
        f f f f f f f f f f f f f f f f 
        f 2 2 f 8 8 f 2 2 f 8 8 f 2 2 f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `,img`
        . . . . . . . . . . 8 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 8 . . . . . . . . . . 8 . . 
        . . . . 2 . . . . . 8 . . . . . 
        8 . . . . . 2 . . . . 8 . . . . 
        . . 8 . . 2 . . . . . . . 8 . . 
        . 8 8 2 . . 5 . . 5 . . 8 8 2 . 
        . 8 2 2 . 5 5 . . 5 5 . 8 2 2 . 
        f f f f f f f f f f f f f f f f 
        f 8 8 f 2 2 f 8 8 f 2 2 f 8 8 f 
        f f f f f f f f f f f f f f f f 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    100,
    characterAnimations.rule(Predicate.Moving)
    )
    myEnemy.follow(mySprite, 150)
    myEnemy.setPosition(145, 115)
})
game.onUpdateInterval(1, function () {
    info.changeScoreBy(1)
})
forever(function () {
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile27`)) {
        controller.moveSprite(mySprite, 190, 190)
    } else {
        controller.moveSprite(mySprite, 200, 200)
    }
})
forever(function () {
    if (Nitro > 0) {
        controller.moveSprite(mySprite, 210, 210)
    }
    if (mySprite.tileKindAt(TileDirection.Center, assets.tile`myTile31`)) {
        music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.UntilDone)
        Nitro += 1
        tiles.setTileAt(tiles.getTileLocation(40, 22), assets.tile`myTile16`)
    }
})
