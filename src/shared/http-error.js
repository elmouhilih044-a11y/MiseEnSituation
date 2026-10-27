export class HttpError extends Error {
  constructor(status, code, message) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
export function notImplemented(zone) {
  return new HttpError(501, 'MES_A_COMPLETER', `Zone a completer : ${zone}`);
}
