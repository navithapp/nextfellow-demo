export class Answer {
    constructor(
        public id: number,
        public answer: string
        ) { }
}

export class Question {
    constructor(
        public id: number,
        public question: string,
        public options: Answer[],
        public selectedAnswer: number,
        public marked: boolean,
        public correctAnswer:number
        ) {}
}