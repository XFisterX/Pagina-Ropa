import { FetchAdapter } from './http.fetch';
import { HttpService } from './http.service';
            
export const http = new HttpService(new FetchAdapter());
