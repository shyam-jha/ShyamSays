import React from 'react'
import { footerLinks } from '../src/constant/constants/index'

const Footer = () => {
    return (
        <footer className="sm:px-10 px-5">
            <div className="screen-max-width">
                <div className="bg-neutral-700 my-5 h-[1px] w-full" />
                <div className="flex md:flex-row flex-col md:items-center justify-between ">
                    <p className="font-semibold text-gray text-xs mb-5">Copright @ 2024 Shyam-Says Contact me for Source Code.</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer