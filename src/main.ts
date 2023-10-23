/// <reference types="@angular/localize" />

import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "./app/app.component";
import { provideRouter } from "@angular/router";
import { appRoutes } from "./app/app.routes";
import { StoreModule, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { StandardEffects } from "./app/state/standard/standard.effects";
import { importProvidersFrom } from "@angular/core";
import { DataService } from "./app/core/services/data.service";
import { provideHttpClient } from "@angular/common/http";
import { reducer } from "./app/state/standard/standard.reducer";
import { cfReducer } from "./app/state/createFeature/create-feature.reducer";
import { StoreDevtoolsModule } from "@ngrx/store-devtools";

bootstrapApplication(AppComponent, { 
    providers: [
        importProvidersFrom(StoreModule.forRoot({})),
        provideRouter(appRoutes), 
        provideStore([reducer, cfReducer]), 
        provideEffects([StandardEffects]),
        provideHttpClient(),
        DataService,
        StoreDevtoolsModule 
    ]
});