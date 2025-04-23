import { Jsonable } from '@common/client';

export class BaseError extends Error {
  public readonly context?: Jsonable;
  public readonly cause?: Error;

  constructor(
    message: string,
    options: { error?: Error; context?: Jsonable; cause?: Error } = {},
  ) {
    const { cause, context } = options;

    super(message);
    this.name = this.constructor.name;

    this.context = context;
    this.cause = cause;
  }
}
