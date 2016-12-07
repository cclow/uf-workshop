import { Injectable } from "@angular/core";
import { Project, Id } from "./project.model";
import { ApiService } from "./api.service";
import { StoreService } from "./store.service";
import { Observable } from "rxjs";
import { FeathersService } from "./feathers";

const PROJECTS_KEY = 'projects';
const SELECTED_PROJECT_ID_KEY = 'selectedProjectId';

@Injectable()
export class ProjectsDataService {
  // private ws: FeathersService;

  private addProjectToStore(project: Project) {
    this.storeService.addItem(PROJECTS_KEY, project);
  }

  private updateProjectInStore(project: Project) {
    this.storeService.updateItem(PROJECTS_KEY, project);
  }

  private removeProjectFromStore(project: Project) {
    this.storeService.removeItem(PROJECTS_KEY, project.id);
  }


  constructor(private apiService: ApiService, private storeService: StoreService) {
    // this.ws = this.apiService.wsConnect('projects');
    // this.ws.on('created', this.addProjectToStore);
    // this.ws.on('updated', this.updateProjectInStore);
    // this.ws.on('patched', this.updateProjectInStore);
    // this.ws.on('deleted', this.removeProjectFromStore);

    this.apiService.get('projects')
      .subscribe(projects => this.storeService.update(PROJECTS_KEY, projects));
  }

  get project$(): Observable<Project[]> {
    return this.storeService.getStore$(PROJECTS_KEY)
      .share();
  }

  get selectedId$(): Observable<Id> {
    return this.storeService.getStore$(SELECTED_PROJECT_ID_KEY)
      .share();
  }

  setSelectedId(id: Id) {
    this.storeService.update(SELECTED_PROJECT_ID_KEY, id);
  }

  createProject(title, notes) {
    this.apiService.post('projects', {title: title, notes: notes})
      .subscribe(
        this.addProjectToStore
      );
  }

  updateProject(project: Project) {
    this.apiService.put(`projects/${project.id}`, project)
      .subscribe(
        this.updateProjectInStore
      );
  }

  removeProject(id: Id) {
    this.apiService.del(`projects/${id}`)
      .subscribe(
        this.removeProjectFromStore
      );
  }
}
