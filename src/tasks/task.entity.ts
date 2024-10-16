// Aqui definimos las entidades, es decir, el modelo de base datos

export enum TaskStatus {
    PENDING = 'PENDING',
    IN_PROGRESS = 'IN_PROGRESS',
    DONE = 'DONE'
}

export class Task {
    id: string
    title: string
    description: string
    status: TaskStatus
}
