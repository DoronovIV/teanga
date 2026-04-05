import { DestroyRef, inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NavigationEnd, Router } from '@angular/router';
import { AppStore } from '@store/app-store';
import { filter, tap } from 'rxjs';

@Injectable()
export class RouterSyncService {
    private readonly _router = inject(Router);
    private readonly _destroyRef = inject(DestroyRef);
    private readonly _appStore = inject(AppStore);

    constructor() {
        this._router.events
            .pipe(
                filter((event) => {
                    return event instanceof NavigationEnd;
                }),
                tap(() => {
                    this._syncRoute();
                }),
                takeUntilDestroyed(this._destroyRef),
            )
            .subscribe();
    }

    private _syncRoute(): void {
        const { url } = this._router;
        const objectId = this._extractObjectId();

        this._appStore.setRoutingData(url, objectId);
    }

    private _extractObjectId(): number | null {
        let route = this._router.routerState.snapshot.root;

        while (route.firstChild) {
            route = route.firstChild;
        }

        const params = route.params;
        const idValue = params['id'];

        if (idValue === undefined || idValue === null) {
            return null;
        }

        const id = Number(idValue);

        if (isNaN(id)) {
            return null;
        }

        return id;
    }
}
