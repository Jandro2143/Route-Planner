<template>
    <div class="surface-overlay py-3 px-6 shadow-2 flex align-items-center justify-content-between relative lg:static">
    <img src="/images/blocks/logos/hyper-700.svg" alt="Image" height="50" class="block lg:hidden" />
    <a v-ripple class="cursor-pointer block lg:hidden text-700 mt-1 p-ripple"
        v-styleclass="{ selector: '@next', enterClass: 'hidden', leaveToClass: 'hidden', hideOnOutsideClick: true }">
        <i class="pi pi-bars text-4xl"></i>
    </a>
    <div class="align-items-center flex-grow-1 hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 px-6 lg:px-0 z-2 shadow-2 lg:shadow-none">
        <ul class="list-none p-0 m-0 flex lg:align-items-center text-900 select-none flex-column lg:flex-row cursor-pointer lg:w-4">
            <li class="relative">
                <a v-ripple class="flex px-0 lg:px-5 py-3 align-items-center hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple"
                    v-styleclass="{ selector: '@next', enterClass: 'hidden', enterActiveClass: 'scalein', leaveToClass: 'hidden', leaveActiveClass: 'fadeout', hideOnOutsideClick: true }">
                    <span>Features</span>
                    <i class="pi pi-chevron-down ml-auto lg:ml-3"></i>
                </a>
                <ul class="list-none p-0 m-0 border-round shadow-0 lg:shadow-2 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem">
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-list text-2xl mr-2 text-blue-600"></i>
                            <span>Plan Route</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-shield text-2xl mr-2 text-blue-600"></i>
                            <span>History</span>
                        </a>
                    </li>
                    <li>
                        <a v-ripple class="flex p-3 align-items-center hover:surface-50 transition-colors transition-duration-150 p-ripple">
                            <i class="pi pi-users text-2xl mr-2 text-blue-600"></i>
                            <span>Settings</span>
                        </a>
                    </li>
                </ul>
            </li>
            <li>
                <a v-ripple class="flex px-0 lg:px-5 py-3 hover:text-blue-600 font-medium transition-colors transition-duration-150 p-ripple">
                    <span>Corporate</span>
                </a>
            </li>
        </ul>
        <div class="w-4 text-center hidden lg:block">
            <img src="/images/blocks/logos/hyper-700.svg" alt="Image" height="50" />
        </div>
        <div class="flex justify-content-end lg:text-right lg:block border-top-1 lg:border-top-none surface-border py-3 lg:py-0 mt-3 lg:mt-0 lg:w-4">
            <Button label="Login" class="font-bold p-button-outlined p-button-rounded"></Button>
            <Button label="Register" class="ml-3 font-bold p-button-rounded"></Button>
        </div>
    </div>
</div>
</template>