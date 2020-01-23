import { throwError, from } from 'rxjs';
import { retryWhen, delay, take, concatMap } from 'rxjs/operators';

export class HttpHelpers {
  public static apiBaseUrl = 'http://localhost:8000/api';

  private static retryCount = 5;

  public static retry() {
    return retryWhen(errors => errors.pipe(
      delay(700),
      take(HttpHelpers.retryCount),
      concatMap((e, r) => (e.status !== 401) && (r < HttpHelpers.retryCount - 1) ? from(e) : throwError(e))
    ));
  }
}
