import { Input,Pipe, PipeTransform } from '@angular/core';
import { Content } from './helper-files/content-interface';

@Pipe({
  name: 'contentFilter'
})
export class ContentFilterPipe implements PipeTransform {

  transform(contentList: Content[], type: string) {
    
    return  contentList.filter(c => c.type ===type);
}

}