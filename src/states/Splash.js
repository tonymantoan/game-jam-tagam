import Phaser from 'phaser'
import { centerGameObjects } from '../utils'

export default class extends Phaser.State {
  init () {}

  preload () {
    this.loaderBg = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBg')
    this.loaderBar = this.add.sprite(this.game.world.centerX, this.game.world.centerY, 'loaderBar')
    centerGameObjects([this.loaderBg, this.loaderBar])

    this.load.setPreloadSprite(this.loaderBar)
    //
    // load your assets
    //
    this.loadSprite('stick')
  }

  create () {
    this.state.start('Game')
  }

  loadSprite(name) {
    this.load.atlasJSONHash(name, 'assets/animation/'+name+'.png', 'assets/animation/'+name+'.json')
  }
}
