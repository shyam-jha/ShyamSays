"use client";
import React, { useRef, useState } from 'react';
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/utils/cn";
import { IconCloudDemo } from "./cloud";
import { FlipWordsDemo } from "./tsthead";
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandLinkedin,
} from "@tabler/icons-react";

export function TestimonialForm() {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);
  const [showModal, setShowModal] = useState(false); // State for controlling modal visibility

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!nameRef.current || !emailRef.current || !messageRef.current) {
      return; // Defensive check
    }

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "43afe908-4538-4421-8e7e-32be8f5bc9e2",
        name: nameRef.current.value,
        email: emailRef.current.value,
        message: messageRef.current.value,
      }),
    });

    const result = await response.json();
    if (result.success) {
      console.log(result);
      setShowModal(true); // Show modal on successful submission
      // Optionally reset form fields after successful submission
      if (nameRef.current && emailRef.current && messageRef.current) {
        nameRef.current.value = "";
        emailRef.current.value = "";
        messageRef.current.value = "";
      }
    }
  }

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div id='contact'>
      <div className="mt-10 max:sm-hidden">
        <FlipWordsDemo />
      </div>

      <div className="mx-5 my-1 flex flex-row gap-1 justify-center items-center rounded-[0.5rem] border-[#bbbbda] md:rounded-2xl p-4 md:p-8 shadow-input bg-[black]">
        <div className="w-max-sm w-full">
          <form className="my-2" onSubmit={handleSubmit}>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                ref={nameRef}
                placeholder="Your Name"
                type="text"
                required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                ref={emailRef}
                placeholder="yourname@example.com"
                type="email"
                required />
            </LabelInputContainer>
            <LabelInputContainer className="mb-4">
              <Label htmlFor="testimonial">Your Thoughts</Label>
              <Input
                id="testimonial"
                ref={messageRef}
                placeholder="Thoughts"
                type="text"
                required />
            </LabelInputContainer>

            <button
              className="bg-gradient-to-br relative group/btn from-zinc-900 to-zinc-900 block bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
              type="submit"
            >
              Submit
              <BottomGradient />
            </button>
          </form>

          <div className="mt-6">
            <h3>Here are Social Links! Feel free to connect..</h3>
            <div className="flex flex-row justify-center items-center gap-5 mt-4">
              <a
                href="https://www.linkedin.com/in/shyam-jha-0642ab258"
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium  bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandLinkedin className="h-4 w-4 text-neutral-300" />
                <span className="text-neutral-300 text-sm">LinkedIn</span>
                <BottomGradient />
              </a>
              <a
                href="https://github.com/shyam-jha"
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandGithub className="h-4 w-4 text-neutral-300" />
                <span className="text-neutral-300 text-sm">GitHub</span>
                <BottomGradient />
              </a>
              <a
                href="https://www.instagram.com/_shyam_jha__?igsh=MWNneGZ1cjh0ajlqeg=="
                className="relative group/btn flex space-x-2 items-center justify-start px-4 w-full text-black rounded-md h-10 font-medium bg-zinc-900 shadow-[0px_0px_1px_1px_var(--neutral-800)]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconBrandInstagram className="h-4 w-4 text-neutral-300" />
                <span className="text-neutral-300 text-sm">Instagram</span>
                <BottomGradient />
              </a>
            </div>
          </div>
        </div>

        <div className="max-sm:hidden">
          <IconCloudDemo />
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex max-sm:mx-4 items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                <h3 className="text-3xl text-black font-semibold">
                  Submission Successful!
                </h3>
                <button
                  className=" z-[52] p-1 cursor-pointer border-0 text-white text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={(event) => {
                    setShowModal(false);
                  }}
                >
                  <span className="text-black cursor-pointer h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>

              </div>
              {/* Body */}
              <div className="relative p-6 flex-auto">
                <p className="my-4 text-gray-600 text-lg leading-relaxed">
                  Thank you for your submission! We'll get back to you soon.
                </p>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </div>
      )}
      {/* End Modal */}
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
