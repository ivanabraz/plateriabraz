import React, { Fragment, useContext } from "react";
import { Dialog, DialogPanel, Tab, TabGroup, TabList, TabPanel, TabPanels, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons";
import { v4 as uuidv4 } from "uuid";

// CONTEXT
import { NavBarContext } from '../../context/NavBarContext';
import { useNavigate } from "react-router-dom";

const navigation = {
    featured: [
        {
            name: 'Estribos',
            href: '/productos?category=estribos',
            imageSrc: `${process.env.PUBLIC_URL}/images/featured/01.jpg`,
            imageAlt: 'Estribo',
        },
        {
            name: 'Espuelas',
            href: '/productos?category=espuelas',
            imageSrc: `${process.env.PUBLIC_URL}/images/featured/02.jpg`,
            imageAlt: 'Espuelas',
        },
    ],
    categories: [
        {
            id: 'barbadas',
            name: 'Barbadas',
        },
        {
            id: 'espuelas',
            name: 'Espuelas',
        },
        {
            id: 'estribos',
            name: 'Estribos',
        },
        {
            id: 'frenos',
            name: 'Frenos',
        },
        {
            id: 'yuntas',
            name: 'Yuntas',
        },
        {
            id: 'otros',
            name: 'Otros',
        }
    ],
    pages: [
        { name: 'Contacto', href: 'https://api.whatsapp.com/send?phone=5491124093882' },
    ],
    social: [
        {
            name: 'Instagram', 
            href: 'https://www.instagram.com/plateriabraz',
            icon: faInstagram,
        },
        {
            name: 'Facebook', 
            href: 'https://www.facebook.com/plateriabraz',
            icon: faFacebookSquare,
        },
    ],
}

const NavBarOpen = () => {
    const { open, setOpen } = useContext(NavBarContext);
    const navigate = useNavigate();

    const handleLinkClick = (href) => {
        setOpen(false);
        navigate(href);
    };

    return (
        <div className="bg-white">
            <Transition show={open}>
                <Dialog className="relative z-40" onClose={setOpen}>
                    <TransitionChild
                        enter="transition-opacity ease-linear duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="transition-opacity ease-linear duration-300"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </TransitionChild>
                    <div className="fixed inset-0 z-40 flex">
                        <TransitionChild
                            enter="transition ease-in-out duration-300 transform"
                            enterFrom="-translate-x-full"
                            enterTo="translate-x-0"
                            leave="transition ease-in-out duration-300 transform"
                            leaveFrom="translate-x-0"
                            leaveTo="-translate-x-full"
                        >
                            <DialogPanel className="relative flex w-full max-w-xs flex-col overflow-y-auto bg-white pb-12 shadow-xl">
                                <div className="flex px-4 pb-2 pt-5">
                                    <button
                                        type="button"
                                        className="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400"
                                        onClick={() => setOpen(false)}
                                    >
                                        <span className="sr-only">Cerrar menú</span>
                                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                    </button>
                                </div>

                                <TabGroup as="div" className="mt-2">
                                    {/* Productos destacados */}
                                    <TabList className="-mb-px flex space-x-8 px-4">
                                        <Tab className="border-indigo-600 text-indigo-600 flex-1 whitespace-nowrap border-b-2 px-1 py-3 text-base font-medium">
                                            Productos destacados
                                        </Tab>
                                    </TabList>
                                    <TabPanels as={Fragment}>
                                        <TabPanel className="grid grid-cols-2 gap-x-4 px-4 pb-8 pt-5">
                                            {navigation.featured.map((featured) => (
                                                <div key={uuidv4()} className="text-sm">
                                                    <div 
                                                        className="aspect-h-1 aspect-w-1 overflow-hidden rounded-lg bg-gray-100 group-hover:opacity-75 cursor-pointer"
                                                        onClick={() => handleLinkClick(featured.href)}
                                                    >
                                                        <img src={featured.imageSrc} alt={featured.imageAlt} className="object-cover object-center" />
                                                    </div>
                                                    <p className="mt-6 block font-medium text-gray-900 cursor-pointer" onClick={() => handleLinkClick(featured.href)}>
                                                        {featured.name}
                                                    </p>
                                                    <p className="mt-1 text-gray-500 cursor-pointer" onClick={() => handleLinkClick(featured.href)}>Ver todo</p>
                                                </div>
                                            ))}
                                        </TabPanel>
                                    </TabPanels>
                                </TabGroup>

                                {/* Categorías */}
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    <p className="font-medium text-gray-900">Categorías</p>
                                    <ul className="mt-6 space-y-6">
                                        {navigation.categories.map((subCategory) => (
                                            <li key={uuidv4()} className="-m-2 block p-2 text-gray-500 cursor-pointer" onClick={() => handleLinkClick(`/productos?category=${subCategory.id}`)}>
                                                {subCategory.name}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                {/* Otras páginas */}
                                <div className="space-y-6 border-t border-gray-200 px-4 py-6">
                                    {navigation.pages.map((page) => (
                                        <a key={uuidv4()} className="-m-2 p-2 font-medium text-gray-900 cursor-pointer" href={page.href} target="_blank" rel="noreferrer">
                                            {page.name}
                                        </a>
                                    ))}
                                </div>

                                {/* Redes sociales */}
                                <div className="grid grid-cols-6 gap-x-2 border-t border-gray-200 px-4 py-6 text-gray-900">
                                    {navigation.social.map((page) => (
                                        <a key={uuidv4()} href={page.href} target="_blank" rel="noreferrer" className="-m-2 p-2" onClick={() => setOpen(false)}>
                                            <FontAwesomeIcon className="fa-lg" icon={page.icon} />
                                        </a>
                                    ))}
                                </div>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </Dialog>
            </Transition>
        </div>
    )
}

export default NavBarOpen;
