import { throwError, of } from 'rxjs';
import { retryWhen, delay, take, concatMap } from 'rxjs/operators';
import { environment } from '../../environments/environment';

export class HttpHelpers {
  public static apiBaseUrl = environment.apiUrl;

  private static retryCount = 5;
  private static retryableStatuses = [0, 500];

  public static retry() {
    return retryWhen(errors => errors.pipe(
      delay(700),
      take(HttpHelpers.retryCount),
      concatMap((e, r) => {
        if (HttpHelpers.retryableStatuses.indexOf(e.status) !== -1 && (r < HttpHelpers.retryCount - 1)) {
          return of(e);
        }

        return throwError(e);
      })
    ));
  }
}
