import { Injectable } from "@angular/core";
import { Project, Id } from "./project.model";
import { ApiService } from "../shared/api.service";
import { StoreService } from "../shared/store.service";
import { Observable } from "rxjs";
// import { FeathersService } from "./feathers";

const PROJECTS_KEY = 'projects';
const SELECTED_PROJECT_ID_KEY = 'selectedProjectId';

@Injectable()
export class ProjectsDataService {
  // private ws: FeathersService;
  constructor(private apiService: ApiService, private storeService: StoreService) {
    // this.ws = this.apiService.wsConnect('projects');
    // this.ws.on('created', this.addProjectToStore);
    // this.ws.on('updated', this.updateProjectInStore);
    // this.ws.on('patched', this.updateProjectInStore);
    // this.ws.on('deleted', this.removeProjectFromStore);

    this.apiService.get('projects')
      .subscribe(projects => this.storeService.update(PROJECTS_KEY, projects));
  }

  private addProjectToStore(project: Project) {
    this.storeService.addItem(PROJECTS_KEY, project);
  }

  private updateProjectInStore(project: Project) {
    this.storeService.updateItem(PROJECTS_KEY, project);
  }

  private removeProjectFromStore(project: Project) {
    this.storeService.removeItem(PROJECTS_KEY, project.id);
  }

  getProject$(id: Id) {
    return this.projects$
      .filter(projects => !!projects)
      .map(projects => {
        let filtered = projects.filter(p => p.id == id);
        return filtered[0];
      });
  }

  get projects$(): Observable<Project[]> {
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
      .subscribe(project =>
        this.addProjectToStore(project)
      );
  }

  updateProject(project: Project) {
    this.apiService.put(`projects/${project.id}`, project)
      .subscribe(project =>
        this.updateProjectInStore(project)
      );
  }

  removeProject(id: Id) {
    this.apiService.del(`projects/${id}`)
      .subscribe(project =>
        this.removeProjectFromStore(project)
      );
  }
}
