import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
})
export class PostCreateComponent {
  enteredValue = '';
  newPost = '';
  onAddPost(){
    // alert('Post Added');
    // console.dir(postInput);
    // this.newPost = postInput.value;
    this.newPost = this.enteredValue;
  }
}
