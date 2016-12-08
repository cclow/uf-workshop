import * as events from "events";
export const io = require("socket.io-client/dist/socket.io");
export const feathers = require("feathers/client");
export const socketio = require("feathers-socketio/client");

//noinspection JSUnusedGlobalSymbols
export interface FeathersApp {
  // Authentication.
  authenticate(options: any) :Promise<any>;
  logout(): void;
  get(type: string): any;

  // Services.
  service(name: string): FeathersService;
}

export interface FeathersService extends events.EventEmitter {
  find(params?: any): Promise<any>;
  create(data: any, params?: any): Promise<any>;
  update(id: string, data: any, params?:any): Promise<any>;
  patch(id: string, data: any, params?:any) : Promise<any>;
  remove(id: string, params?: any): Promise<any>;
}
