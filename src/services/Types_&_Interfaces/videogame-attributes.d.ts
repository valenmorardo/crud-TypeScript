enum genres_videogames {
	Accion = 'Accion',
	Aventura = 'Aventura',
	RPG = 'RPG',
	Estrategia = 'Estrategia',
	Shooter = 'Shooter',
	Deportes = 'Deportes',
	Simulacion = 'Simulacion',
	Horror = 'Horror',
	Puzzle = 'Puzzle',
}

export interface IVideogameAttributes {
	id: string;
	name: string;
	description: string;
	price: number;
	generos: Array<genres_videogames>;
}
