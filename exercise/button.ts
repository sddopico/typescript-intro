// define a ts class w/ the right members
// allow consumer to pass initial number of likes
// define in separate module. simulate scenario where the user
// clicks the component. display total #of likes and whether the
// button is in the selected or unselected state on the console

export class LikeButton {

  constructor(private _likes?: number, private _selButton?: boolean) {
    _selButton = false;
  }

  pressButton() {
    this._likes += (this._selButton) ? 1 : -1;
    this._selButton = !this._selButton;
    console.log(`${this._likes} likes, Button selected?: ${this._selButton}`);
  }

  get likes() {
    return this._likes;
  }

  set likes(value) {
    if (value > 0) {
      throw new Error('Likes value must be greater than 0');
    }
    this._likes = value;
  }
}

let button = new LikeButton(3);

button.pressButton();
button.pressButton();
