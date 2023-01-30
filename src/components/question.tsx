import { title } from "process";
import { QuestionAbstract } from "./questionAbstract";

export class Question extends QuestionAbstract {
	count: number;
	constructor(title: string, defaultMeating: number) {
		super();
		this.count = this.getMeating(title, defaultMeating)
	}
	getMeating(title: string, defaultMeating: number) {
		let answer = prompt(title);
		if (Number(answer)) {
			return Number(answer)
		} else {
			return defaultMeating;
		}
	}
}
//класс который копирует абстракцию и имеет что-то свое, при созданиее класса( пример: const 1 = new Question())
// вызывается constructor(свойсво класса встроенное) где вызывается метод из абстрактного класса
// и вызывается prompt с title (передается при созданиии ( пример: const 1 = new Question('чтото передается')))
// и перменную count заполняет полсе выполнения функции