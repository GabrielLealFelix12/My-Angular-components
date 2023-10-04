import { Component } from '@angular/core';

@Component({
  selector: 'comment-ang',
  templateUrl: 'commentang.component.html',
  styleUrls: ['commentang.component.css']
})
export class CommentAngComponent {
    changeme : number = 0
    disabled : boolean = false

checkforcharlimit(e:any) {
  
  if (e.target.value.length >= 0 ){
     this.changeme = e.target.value.length
      if (this.changeme >= 150){ this.disabled = true} else{this.disabled = false}
  }
     
  }
submitform(e:any){
  e.preventDefault();
  const form : any = document.getElementById('commentform');
  const formData : any = new FormData(form);
  const formjson = Object.fromEntries(formData.entries());
  console.log(formjson);
}
}
