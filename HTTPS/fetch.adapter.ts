import { HttpAdapter } from '@core/http/http.adapter';

export class FetchAdapter implements HttpAdapter {

  async get<T>(url: string): Promise<T> {


    const response = await fetch(url);


    if (!response.ok) {

      throw await response.json();

    }

    return (await response.json()) as T;

  }


  async post<T>(url: string, data: FormData): Promise<T> {

    const response = await fetch(url, {

      method: 'POST',

      body: data

    });


    if (!response.ok) {

      throw await response.json();

    }

    return (await response.json()) as T;

  }


  async put<T>(url: string, data: FormData): Promise<T> {

    const response = await fetch(url, {

      method: 'PUT',

      body: data

    });


    if (!response.ok) {

      throw await response.json();

    }

    return (await response.json()) as T;

  }


  async patch<T>(url: string, data: FormData): Promise<T> {

    const response = await fetch(url, {

      method: 'PATCH',

      body: data

    });


    if (!response.ok) {

      throw await response.json();

    }

    return (await response.json()) as T;

  }


  async delete<T>(url: string): Promise<T> {

    const response = await fetch(url, {

      method: 'DELETE',

    });

    

    if (!response.ok) {

      throw await response.json();

    }

    return (await response.json()) as T;

  }

}
