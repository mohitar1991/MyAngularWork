import { ServerResolver } from './servers/server-resolve.service';
import { ErrorHandlerComponent } from './error-handler/error-handler.component';
import { CanDeactivateGuard } from './servers/can-deactivate-guard.service';
import { AuthGuard } from './auth-guard.service';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';
import { ServersComponent } from './servers/servers.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { Routes, RouterModule } from '@angular/router';
// import { NotFoundComponent } from './not-found/not-found.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/:name', component: UserComponent },
        ]
    },
    {
        path: 'servers',
        // canActivate: [AuthGuard],
        canActivateChild: [AuthGuard],
        component: ServersComponent,
        children: [
            { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
            { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard] }
        ]
    },
    // { path: 'not-found', component: NotFoundComponent },
    { path: 'not-found', component: ErrorHandlerComponent, data: { message: 'Page not found' } },
    { path: '**', redirectTo: 'not-found' },
];

@NgModule({
    imports: [
        /* useHash for location strategies for server deployment. Because there might be situation
        ** where we dont have path defined on local to be availab on server. In that case we should
        ** always return index.html for 404 error on server.
        ** if that strategy cannot be implement on server useHash strategy should work for you.
        */

        // RouterModule.forRoot(appRoutes, { useHash: true}),
        RouterModule.forRoot(appRoutes),
    ],
    exports: [
        RouterModule
    ],
})
export class AppRoutingModule {

}
