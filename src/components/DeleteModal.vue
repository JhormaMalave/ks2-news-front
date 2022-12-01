<template>
  <div id="staticModal"  tabindex="-1" class="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal h-full justify-center items-center flex bg-gray-500/[.6]">
    <div class="relative w-full h-full max-w-[500px] md:h-auto">
        <!-- Modal content -->
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <!-- Modal header -->
            <div class="flex items-start justify-between p-4 rounded-t">
                <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="staticModal">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                </button>
            </div>
            <!-- Modal body -->
            <div class="p-6 space-y-6 flex justify-center">
                <p class="font-bold leading-relaxed text-gray-500 dark:text-gray-400 text-lg text-center max-w-[500px]">
                    ¿Estas seguro de querer eliminar <router-link class="text-red-500" :to="`articles/28/`">Puebla voces y mucho mas</router-link>? Esta accion es <span class="text-gray-700">irreversible</span>
                </p>
            </div>
            <!-- Modal footer -->
            <div class="flex justify-center p-6 space-x-2 mt-6 rounded-b dark:border-gray-600">
                <button data-modal-toggle="staticModal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium py-3 px-8 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">Cancelar</button>
                <button data-modal-toggle="staticModal" type="button" class="hover:shadow-form rounded-md bg-red-500 py-3 px-8 text-base font-semibold text-white outline-none">Aceptar</button>
            </div>
        </div>
    </div>
  </div>
</template>
