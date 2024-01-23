import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TaskListComponent } from './task-list/task-list.component';
import { CadastroComponent } from './cadastro/cadastro.component';
import { LobbyTarefasComponent } from './lobby-tarefas/lobby-tarefas.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent
    },
    {
        path: 'tasks',
        component: TaskListComponent
    },
    {
        path: 'cadastro',
        component: CadastroComponent
    },
    {
        path: 'lobby',
        component: LobbyTarefasComponent
    }
];
