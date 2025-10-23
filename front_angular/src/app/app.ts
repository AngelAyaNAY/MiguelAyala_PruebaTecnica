import { Component } from '@angular/core';
import { UserListComponent } from './components/user-list/user-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UserListComponent],
  template: `
    <div class="flex flex-col w-fit md:w-full px-[1rem] md:px-[20.5rem] py-[2rem] bg-[#0f0e11] h-full">
      <div
        class="w-full md:w-[60rem] mb-4 flex md:flex-row justify-between overflow-hidden h-[14rem] rounded-2xl bg-[#232124]"
      >
        <div class="flex flex-col justify-between px-6 py-4">
          <div class="flex w-fit h-fit gap-2 items-center justify-center">
            <div class="w-2 h-2 bg-[#ff2e58] rounded-[50%] animate-pulse"></div>
            <h4 class="text-[#ff5577] text-[1rem]">Prueba Técnica</h4>
          </div>
          <div>
            <h1 class="m-0 p-0 text-[#817b7b] text-[1.3rem] md:text-[3rem]">Gestión de Usuarios</h1>
            <h5 class="m-0 p-0 text-[#c0b8b8] text-[1rem] md:text-[1.2rem] italic opacity-50">
              Miguel Angel Ayala Pinilla
            </h5>
          </div>
        </div>
        <div
          class="flex w-[14rem] h-[14rem] overflow-hidden  md:border-l-[0.5rem] border-[#0f0e11]"
        >
          <img class="flex object-cover" src="/Angel_PP_linkedin.jpg" alt="Foto de perfil" />
        </div>
      </div>
      <app-user-list></app-user-list>
      <div class="w-full flex flex-col gap-4 mt-4">
        <hr class="w-full opacity-5" />
        <div class="w-full flex flex-col md:flex-row gap-4 text-white">
          <a
            href="https://angelnay.vercel.app" target="_blank" rel="noopener noreferrer"
            class="flex-1 text-center border-2 border-[#232124] rounded-2xl px-4 py-4 opacity-100 hover:opacity-75"
            >Portafolio web</a
          >
          <a
            href="https://github.com/AngelAyaNAY" target="_blank" rel="noopener noreferrer"
            class="flex-1 text-center border-2 border-[#232124] rounded-2xl px-4 py-4 opacity-100 hover:opacity-75"
            >GitHub/AngelAyaNAY</a
          >
          <a
            href="www.linkedin.com/in/angelayala-nay" target="_blank" rel="noopener noreferrer"
            class="flex-1 text-center border-2 border-[#232124] rounded-2xl px-4 py-4 opacity-100 hover:opacity-75"
            >Linkedin/in/angelayala-nay/</a
          >
        </div>
      </div>
    </div>
  `,
})
export class App {}
