import { Component } from '@angular/core';
import { GptService } from './gpt.service'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'baiganKaGPT';
  searchTerm!: String;
  gptAns= "";
  myInputText!: string;
  mySearch ={
    "question": this.searchTerm,
    "max_response_time": 10
};
  constructor(private gptsrc: GptService) {

  }
  generateResult(title:string) {
    this.mySearch.question=title;
    this.gptsrc.post(this.mySearch).subscribe((data: any) => {
      this.gptAns=data.answer;
      console.log(data.answer);
     });


  }

}
