import {Category} from './category.enum';

export interface Operator {
  id: number;
  name: string;
  category?: Category;
  description?: string;
  codeExample?: string;
}
