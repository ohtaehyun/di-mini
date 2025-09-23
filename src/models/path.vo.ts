export class PathVO {
  private readonly value: string;

  constructor(path: string) {
    this.value = this.validate(path);
  }

  private validate(path: string): string {
    if (path === '') return path;

    const splited = path.split('/').filter((s) => s.length);
    if (splited.length < 1) throw new Error(`check path: ${path}`);

    return '/' + splited.join('/');
  }

  toString() {
    return this.value;
  }

  combine(path: PathVO) {
    return this.value + path.toString();
  }
}
