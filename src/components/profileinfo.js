import React from 'react';

export class Profileinfo extends React.Component {
  // Default profile photo
   state = {
     photo: "https://vignette.wikia.nocookie.net/fundamentalists/images/5/55/Anon.jpg/revision/latest?cb=20170930200757"
   };
  // Optional profile photos
  customPhotos = ["https://i.pinimg.com/originals/34/2d/fa/342dfa992ca2ff5b19ddf6c227251e05.png",
   "https://66.media.tumblr.com/0c8edccc07bcd2242cd96fb5697c0799/tumblr_oh2006edZ81vknod5o1_500.png",
    "https://66.media.tumblr.com/14f1e306fe1148bec45158319fed563b/tumblr_p2vrdoR6A21s1s0koo2_500.png",
    "https://kathleenhalme.com/images/anime-clipart-anime-guy-4.jpg"]
  //Selectors of profile photos
   selectors = {
     left: "<",
     right: ">"
   }
   //Changes profile photo looping left and right on the Photos array
   moveRight(statePhotoInArrayIndex) {
     if (statePhotoInArrayIndex === this.customPhotos.length - 1) {
       this.setState({ photo: this.customPhotos[0] })
     } else {
       this.setState({ photo: this.customPhotos[statePhotoInArrayIndex + 1]})
     }
   }
   moveLeft(statePhotoInArrayIndex) {
     if (statePhotoInArrayIndex === 0) {
       this.setState({ photo: this.customPhotos[this.customPhotos.length - 1]})
     } else {
       this.setState({ photo: this.customPhotos[statePhotoInArrayIndex - 1]})
     }
   }
   changePhoto = (isLeft) => {
     const statePhotoInArrayIndex = this.customPhotos.findIndex((photo) => photo === this.state.photo)
     if (statePhotoInArrayIndex === -1) {
       this.setState({ photo: this.customPhotos[0] })
     } else {
      if (isLeft === true) {
        this.moveLeft(statePhotoInArrayIndex)
      } else {
        this.moveRight(statePhotoInArrayIndex)
      }
    }
   }

   //Shows an alert box after 1 second of pressing the Submit button
   Submitted(){
    setTimeout(
      function()
      { alert("Your Profile was created!"); }, 1000
    );
   }

  render() {
    return(
      <div className="_profile">
      <div className="profilephoto">
          <img src={this.state.photo} alt="anime character"/>
          <p id="left" onClick={() =>  this.changePhoto(true)}>{this.selectors.left}</p>
          <p id="right" onClick={() =>  this.changePhoto(false)}>{this.selectors.right}</p>
      </div>
      <div className="profileinfo">
          <p>* name: <input type="text" maxlength="30"/></p>
          <p>* age: <input type="text" maxlength="2"/></p>
          <p>* location: <input type="text" maxlength="30"/></p>
          <p>* ocuppation:  <input type="text" maxlength="30"/></p>
          <p>* interests:  <input type="text" maxlength="30"/></p>
      </div>
        <button onClick={this.Submitted}>Submit</button>
      </div>
    )
  }
}
