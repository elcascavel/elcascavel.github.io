import React, { useState } from "react";

import { Transition } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navigation() {
  return (
      <nav className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <div className="flex items-baseline space-x-4">
                  <p className="text-gray-700 text-2xl font-semibold">Simão</p>
                </div>
            </div>
            <div className="flex items-baseline space-x-4">
                  <a href="https://www.linkedin.com/in/amaraljsr/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="text-cyan-700" icon={['fab', 'linkedin']} size="lg" /></a>
              </div>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;
