import React from "react";
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MinusIcon, PlusIcon } from '@heroicons/react/20/solid';
import { v4 as uuidv4 } from "uuid";

export default function ItemFilterDesktop({ filters, selectedFilters, setSelectedFilters }) {
    const handleCheckboxChange = (sectionId, optionValue) => {
        const lowerCaseOptionValue = optionValue.toLowerCase();
        const urlSearchParams = new URLSearchParams(window.location.search);
        const currentFilters = Object.fromEntries(urlSearchParams.entries());

        for (const key in currentFilters) {
            if (typeof currentFilters[key] === 'string') {
                currentFilters[key] = currentFilters[key].split(',');
            }
        }

        if (!currentFilters[sectionId.toLowerCase()]) {
            currentFilters[sectionId.toLowerCase()] = [];
        }

        if (currentFilters[sectionId.toLowerCase()].includes(lowerCaseOptionValue)) {
            currentFilters[sectionId.toLowerCase()] = currentFilters[sectionId.toLowerCase()].filter(value => value !== lowerCaseOptionValue);
            if (currentFilters[sectionId.toLowerCase()].length === 0) {
                delete currentFilters[sectionId.toLowerCase()];
            }
        } else {
            currentFilters[sectionId.toLowerCase()].push(lowerCaseOptionValue);
        }

        const newSearchParams = new URLSearchParams(currentFilters);
        const newUrl = `${window.location.pathname}?${newSearchParams.toString()}`;

        window.history.replaceState({}, '', newUrl);
        setSelectedFilters(currentFilters);
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
                                                checked={selectedFilters[section.id.toLowerCase()] && selectedFilters[section.id.toLowerCase()].includes(option.value.toLowerCase())}
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
