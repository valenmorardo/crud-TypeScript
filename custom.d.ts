declare namespace Express {
	export interface Request {
		encryptedPassword?: string; // Aquí defines tu propiedad personalizada
		userId?: string;
	}
}
