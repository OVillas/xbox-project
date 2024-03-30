import { Component, HostListener, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { AccordionModule } from 'primeng/accordion';
import { QuestionComponent } from './components/question/question.component';
import { QuestionItem } from './components/models/questionItem';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [GalleriaModule, AccordionModule, QuestionComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  isMobileView: boolean = false;

  @HostListener('window:resize', ['$event'])
  onResize(event: unknown) {
    this.checkScreenWidth();
  }

  ngOnInit(): void {
    this.checkScreenWidth();
  }

  checkScreenWidth() {
    this.isMobileView = window.innerWidth <= 900;
  }

  protected questions: QuestionItem[] = [
    {
      question: 'Meus jogos anteriores do Xbox vão funcionar no Xbox Series X?',
      answer:
        'Sim, na maioria dos casos, seus jogos anteriores do Xbox devem funcionar no Xbox Series X. O Xbox Series X é retrocompatível com jogos de várias gerações anteriores do Xbox, incluindo jogos do Xbox One, Xbox 360 e até mesmo do Xbox original.',
      expanded: true,
    },
    {
      question: 'O que está incluído no Xbox Series X?',
      answer:
        'No Xbox Series X, você encontrará o console Xbox Series X, um controle sem fio Xbox, um cabo HDMI de alta velocidade, um cabo de alimentação e documentação básica.',
      expanded: false,
    },
    {
      question: 'Como sei se minha TV é compatível com 4K?',
      answer:
        'Para saber se sua TV é compatível com 4K, verifique o manual do usuário ou as especificações técnicas da TV. Procure por termos como "resolução 4K", "Ultra HD" ou "3840 x 2160 pixels". Se encontrar essas informações, sua TV é compatível com 4K.',
      expanded: false,
    },
  ];

  protected images = [
    { itemImageSrc: 'assets/svg/group/group-1.svg' },
    { itemImageSrc: 'assets/svg/group/group-2.svg' },
    { itemImageSrc: 'assets/svg/group/group-3.svg' },
    { itemImageSrc: 'assets/svg/group/group-4.svg' },
  ];
}
