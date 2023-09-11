export class InputHandler {

  handle(source:string): string {

    return source
      .replace(/,/g, '')
      .replaceAll('jpy', '*0.22')
      .replaceAll('usd', '*32')
      .replaceAll('rmb', '*4.37')
      .replaceAll('vnd', '*0.0013')
      .replaceAll('thb', '*0.9')
      .replaceAll('%', '/100');
  }
}
