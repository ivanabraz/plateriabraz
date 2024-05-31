import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { v4 as uuidv4 } from "uuid";

export default function ItemFilterMobile({ filters, mobileFiltersOpen, setMobileFiltersOpen, selectedFilters, setSelectedFilters }) {
    const handleCheckboxChange = (sectionId, optionValue) => {
        // Obtenemos los filtros actuales de la URL
        const urlSearchParams = new URLSearchParams(window.location.search);
        const currentFilters = Object.fromEntries(urlSearchParams.entries());

        // Convertimos los valores de los filtros en arrays si no lo son
        for (const key in currentFilters) {
            if (typeof currentFilters[key] === 'string') {
                currentFilters[key] = currentFilters[key].split(',');
            }
        }

        // Inicializamos como array vacío si currentFilters[sectionId] es undefined
        if (!currentFilters[sectionId]) {
            currentFilters[sectionId] = [];
        }

        // Actualizamos los filtros con el nuevo valor seleccionado
        if (currentFilters[sectionId].includes(optionValue)) {
            currentFilters[sectionId] = currentFilters[sectionId].filter(value => value !== optionValue);
        } else {
            currentFilters[sectionId].push(optionValue);
        }

        // Construimos la nueva URL con los filtros actualizados
        const newSearchParams = new URLSearchParams(currentFilters);
        const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;

        // Actualizamos la URL
        window.history.replaceState({}, '', newUrl);

        // Actualizamos los filtros en el estado local
        setSelectedFilters(currentFilters);
    };

    return (
        <Transition show={mobileFiltersOpen}>
            <Dialog className="relative z-40 lg:hidden" onClose={setMobileFiltersOpen}>
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
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="transition ease-in-out duration-300 transform"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <DialogPanel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                            <div className="flex items-center justify-between px-4">
                                <h2 className="text-lg font-medium text-gray-900">Filtrar</h2>
                                <button
                                    type="button"
                                    className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                                    onClick={() => setMobileFiltersOpen(false)}
                                >
                                    <span className="sr-only">Cerrar menú</span>
                                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                                </button>
                            </div>

                            {/* Filters */}
                            <form className="mt-4 border-t border-gray-200">
                                {filters.map((section) => (
                                    <Disclosure as="div" key={uuidv4()} className="border-t border-gray-200 px-4 py-6">
                                        {({ open }) => (
                                            <>
                                                <h3 className="-mx-2 -my-3 flow-root">
                                                    <DisclosureButton className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                                        <span className="font-medium text-gray-900">{section.name}</span>
                                                        <span className="ml-6 flex items-center">
                                                            {open ? (
                                                                <MinusIcon className="h-5 w-5" aria-hidden="true" />
                                                            ) : (
                                                                <PlusIcon className="h-5 w-5" aria-hidden="true" />
                                                            )}
                                                        </span>
                                                    </DisclosureButton>
                                                </h3>
                                                <DisclosurePanel className="pt-6">
                                                    <div className="space-y-6">
                                                        {section.options.map((option, optionIdx) => (
                                                            <div key={uuidv4()} className="flex items-center">
                                                                <input
                                                                    id={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    name={`${section.id}[]`}
                                                                    value={option.value}
                                                                    type="checkbox"
                                                                    checked={selectedFilters[section.id] && selectedFilters[section.id].includes(option.value)}
                                                                    onChange={() => handleCheckboxChange(section.id, option.value)}
                                                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                                                />
                                                                <label
                                                                    htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                                                    className="ml-3 min-w-0 flex-1 text-gray-500"
                                                                >
                                                                    {option.label}
                                                                </label>
                                                            </div>
                                                        ))}
                                                    </div>
                                                </DisclosurePanel>
                                            </>
                                        )}
                                    </Disclosure>
                                ))}
                            </form>
                        </DialogPanel>
                    </TransitionChild>
                </div>
            </Dialog>
        </Transition>
    );
}
