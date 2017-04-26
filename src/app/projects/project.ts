export class Project {

  id: number;
  authorId: number;
  status: string;
  type: string;

  constructor(id: number, authorId: number, status: string, type: string) {
    this.id = id;
    this.authorId = authorId;
    this.status = status;
    this.type = type;
  }
}
