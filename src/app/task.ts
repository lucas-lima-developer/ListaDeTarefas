export interface Task {
    id: number;
    title: string;
    description: string;
    isCompleted: boolean;
    completionDate: Date | null;
    dateCreated: Date
    dateUpdated: Date
}
