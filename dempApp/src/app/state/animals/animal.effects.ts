import { Injectable } from '@angular/core';
import { Actions } from '@ngrx/effects';
import { createEffect, ofType } from '@ngrx/effects';
import { catchError, concatMap, map, mergeMap, of } from 'rxjs';
import { AnimalService } from 'src/app/services/animal.service';
import * as AnimalActions from './animal.actions';

@Injectable()
export class AnimalEffects {
  constructor(private actions$: Actions, private aService: AnimalService) {}

  loadAnimals$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActions.loadAnimals),
      mergeMap(() =>
        this.aService.getAnimals().pipe(
          map((animals) => AnimalActions.loadAnimalsSuccess({ animals })),
          catchError((error) => of(AnimalActions.loadAnimalsFailure({ error })))
        )
      )
    );
  });

  updateAnimal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActions.updateAnimal),
      concatMap((action) => {
        return this.aService.updateAnimal(action.animal).pipe(
          map(() => action.animal),
          map((animal) => AnimalActions.updateAnimalSuccess({ animal })),
          catchError((error) =>
            of(AnimalActions.updateAnimalFailure({ error }))
          )
        );
      })
    );
  });

  createAnimal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActions.createAnimal),
      concatMap((action) =>
        this.aService.createAnimal(action.animal).pipe(
          map((animal) => AnimalActions.createAnimalSuccess({ animal })),
          catchError((error) =>
            of(AnimalActions.createAnimalFailure({ error }))
          )
        )
      )
    );
  });

  deleteAnimal$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AnimalActions.deleteAnimal),
      mergeMap((action) =>
        this.aService.deleteAnimal(action.animalId).pipe(
          map(() =>
            AnimalActions.deleteAnimalSuccess({ animalId: action.animalId })
          ),
          catchError((error) =>
            of(AnimalActions.deleteAnimalFailure({ error }))
          )
        )
      )
    );
  });
}
