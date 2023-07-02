import { Component } from '@angular/core';
import { englishContent, germanContent } from './language-content';

interface LanguageContent {
  [key: string]: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Jonas\' Portfolio';

  currentLanguageContent: any;
  englishContent: LanguageContent = englishContent;
  germanContent: LanguageContent = germanContent;

  constructor() {
    this.currentLanguageContent = this.englishContent;
  }

  switchLanguage(language: string) {
    console.log('switching language to', language);
    if (language === 'german') {
      this.currentLanguageContent = this.germanContent;
      this.replacePlaceholders();
    } else if (language === 'english'){
      this.currentLanguageContent = this.englishContent;
      this.replacePlaceholders();
    } else {
      console.log('Language not supported');
    }
  }

  replacePlaceholders() {
    const placeholders: NodeListOf<HTMLElement> = document.querySelectorAll("[data-placeholder]");
    placeholders.forEach((placeholder: HTMLElement) => {
      const key = placeholder.getAttribute("data-placeholder");
      if (key && this.currentLanguageContent[key]) {
        placeholder.innerHTML = this.currentLanguageContent[key];
      }
    });
  }
  

  // ngOnInit() {
  //   this.switchLanguage('german');
  //   this.replacePlaceholders();
  // }
  
}


