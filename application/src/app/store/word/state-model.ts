import { WordModel } from '@model/word';

export type WordStateModel = {
    words: WordModel[];
    word: WordModel | null;
};
