import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  readonly lorem = [
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper ex elit, sit amet efficitur sem ultricies vitae. Donec elit nisl, aliquam et sem non, accumsan congue leo. Nam malesuada dictum turpis nec sagittis. Duis malesuada at velit vitae egestas. Phasellus suscipit ornare felis, nec eleifend erat fringilla non. Proin bibendum orci eget turpis aliquet, sit amet tempor ex suscipit. Proin nulla odio, congue id ornare quis, ornare nec sapien. Nullam consectetur ipsum in consectetur pulvinar. Morbi placerat ut magna id commodo. Donec laoreet dui semper, egestas ipsum eu, vehicula sapien. Fusce vitae ipsum vehicula, ultrices velit imperdiet, bibendum erat. Nunc condimentum, urna vel molestie rhoncus, lectus mi gravida diam, ut condimentum sem felis a tellus.",
    "Mauris convallis auctor bibendum. Phasellus eget semper massa, eget viverra libero. Vivamus fringilla eget eros ac tristique. Pellentesque ipsum nisl, varius ac tortor vitae, efficitur luctus mauris. Maecenas ut consectetur sapien. Phasellus vel massa convallis, eleifend nisl in, rhoncus odio. Pellentesque ac pulvinar quam. Quisque dignissim tortor non purus molestie, in dapibus nunc congue. Suspendisse tempor, velit eu convallis scelerisque, nisi eros commodo sem, sit amet gravida enim odio et orci. In porttitor, ligula tincidunt gravida ultricies, velit quam dapibus justo, sed elementum lectus tortor in libero.",
    "Donec odio dui, imperdiet a tortor sed, commodo elementum risus. Proin finibus orci velit, in gravida eros ultrices quis. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla vel ligula sagittis, feugiat augue a, auctor felis. Fusce sit amet eros sapien. Donec a lorem lacus. Sed mollis nibh in lorem rutrum, a finibus magna pharetra. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam in euismod nulla. Sed eget feugiat eros. In nulla ante, ultrices non pharetra eu, placerat sit amet est. Etiam viverra vulputate elit eget ornare.",
    "Morbi faucibus pharetra orci eget volutpat. Proin tincidunt mollis turpis, quis mattis risus ultrices rhoncus. Phasellus elementum, lorem nec rutrum volutpat, ex velit lobortis quam, semper mattis massa nisi quis erat. Quisque sed mauris suscipit, ullamcorper quam et, condimentum dolor. Duis euismod feugiat rhoncus. Aliquam erat volutpat. Vivamus lacus massa, commodo sit amet mauris et, sollicitudin tristique nisl.",
    "Fusce ac est non tortor elementum fermentum. Nam a turpis a velit mattis sollicitudin accumsan non metus. Morbi rutrum, augue vel hendrerit volutpat, tellus magna pellentesque neque, et accumsan dolor tellus nec arcu. Vivamus cursus nunc id elementum commodo. Mauris ultricies posuere metus eget fermentum. Maecenas tortor sapien, fringilla id diam non, elementum pretium tortor. Cras id nibh tincidunt, dictum nulla vel, aliquam ex. Nulla ultricies imperdiet purus sed consectetur. Vivamus ut ex eros. Donec auctor eget est quis posuere. Vestibulum quis porttitor purus, maximus semper massa. Cras sit amet orci non tortor commodo malesuada. Sed ut tincidunt erat. Curabitur sapien dui, luctus a leo vel, ultricies lobortis lacus. Sed vitae neque nisl."
  ]

  constructor() {}

  async translate(text: string, language: string = 'fr'): Promise<string> {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(this.getRandomWords(text.split(' ').length));
      },
        Math.random() * 1000);
    });
  }

  private getRandomWords(length: number): string {
    const words = this.lorem.at(Math.random() * length)?.split(' ');
    if(!words) return '';

    const rand = Math.max(0, Math.floor(Math.random() * words.length - length));
    return words.slice(rand, rand+length).join(' ');
  }
}
