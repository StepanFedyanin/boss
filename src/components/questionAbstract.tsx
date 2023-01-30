export abstract class QuestionAbstract {
	count: number = 0;
	abstract getMeating(title: string, defaultMeating: number): void;
}
//создание абстракции(структуре как будет выглядеть клоны этого класса) в нем метод(тоже абстрактный)
// который принимает 2 параметры и что-то с ними делает