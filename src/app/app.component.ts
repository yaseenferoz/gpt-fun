// @ts-ignore
import { Component } from '@angular/core';
import { GptService } from './gpt.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Vision Bot';
  searchTerm!: String;
  gptAns= "";
  myInputText!: string;
  typedResponse="";
  isLoading = false;
  inputText: string = '';

  mySearch ={
    text: this.searchTerm,
};
  constructor(private gptsrc: GptService) {

  }
ngOnInit():void {
  
}

  generateResult(title:string) {
    this.isLoading = true;
    if(this.gptAns){
      this.typedResponse="";
    }
    this.mySearch.text=title;
    const myPayload = {
      "messages": [
          {
              role: "assistent",
              content: this.mySearch
          }
      ],
      model: "gpt-3.5-turbo"
  }
    this.gptsrc.post(myPayload).subscribe((data: any) => {
     
      this.gptAns=data;
      this.mySearch.text='';
      console.log(data);
      let i = 0;
      let intervalId = setInterval(() => {
        this.typedResponse += this.gptAns.charAt(i);
        i++;
        if (i === this.gptAns.length) {
          clearInterval(intervalId);
        }
      }, 50);
      this.isLoading = false;
     });


  }

  onEnterKeyPressed(title:string) {
    this.generateResult(title)
  }



}
