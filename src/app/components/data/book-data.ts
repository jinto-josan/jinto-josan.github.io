import { Item, ItemStatus } from "../scroll-container-item/scroll-container-item.component";

export const BooksData: Item[] = [
    { title: 'The Power of your subconscious mind', subtitle: 'Joseph Murphy', chips: ['psychology'],
      status: ItemStatus.reading, order: 1, description: '' },
    { title: 'The Meditations of Marcus Aurelius', subtitle: 'Marcus Aurelius', chips: ['philosophy'],
      status: ItemStatus.reading, order: 2, description: '' },
    { title: 'The Psychology of Money', subtitle: 'Morgan Housel', chips: ['finance'],
      status: ItemStatus.reading, order: 3, description: '' }
  ]