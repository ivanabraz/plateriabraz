import React from 'react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { v4 as uuidv4 } from "uuid";

export default function ItemFilterDesktop({ filters, selectedFilters, setSelectedFilters }) {
    const handleCheckboxChange = (sectionId, optionValue) => {
        setSelectedFilters(prevFilters => {
            const newFilters = { ...prevFilters };
            if (newFilters[sectionId].includes(optionValue)) {
                newFilters[sectionId] = newFilters[sectionId].filter(value => value !== optionValue);
            } else {
                newFilters[sectionId].push(optionValue);
            }
            return newFilters;
        });
    };

    return (
        <form className="hidden lg:block">
            {filters.map((section) => (
                <Disclosure as="div" key={uuidv4()} className="border-b border-gray-200 py-6" defaultOpen={true}>
                    {({ open }) => (
                        <>
                            <h3 className="-my-3 flow-root">
                                <DisclosureButton className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
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
                                <div className="space-y-4">
                                    {section.options.map((option, optionIdx) => (
                                        <div key={uuidv4()} className="flex items-center">
                                            <input
                                                id={`filter-${section.id}-${optionIdx}`}
                                                name={`${section.id}[]`}
                                                value={option.value}
                                                type="checkbox"
                                                checked={selectedFilters[section.id].includes(option.value)}
                                                onChange={() => handleCheckboxChange(section.id, option.value)}
                                                className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                            />
                                            <label
                                                htmlFor={`filter-${section.id}-${optionIdx}`}
                                                className="ml-3 text-sm text-gray-600"
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
    );
}
