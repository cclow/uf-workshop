export type Id = number | string;

export interface Item {
  id: Id;
}

export interface Project extends Item {
  id: Id;
  title: string;
  notes: string;
}
//
// let nextId: number = 0;
// export function newProject(title: string, notes: string): Project {
//   return {id: nextId++, title: title, notes: notes}
// }
