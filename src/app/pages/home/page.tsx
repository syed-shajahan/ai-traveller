"use client";

import { useState } from "react";
import { Button } from "@/app/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/app/components/ui/drawer";
import { Form } from "lucide-react";
import FormComponent from "@/app/components/form/FormComponent";

export default function Home() {
  const [openModel, setOpenModel] = useState(false);
  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 min-w-full min-h-full object-cover"
      >
        <source
          src="https://www.pexels.com/download/video/3571264/"
          type="video/mp4"
        />
      </video>

      <div className="absolute inset-0 z-10 bg-black/50" />

      <section className="relative z-20 py-20 text-center text-white">
        <h1 className="text-6xl font-bold">Plan your trip with AI</h1>
        <p className="mt-4 text-zinc-200">Smart itineraries. Zero effort. ✈️</p>

        <Drawer open={openModel} onOpenChange={setOpenModel}>
          <DrawerTrigger asChild>
            <Button className="mt-8" variant="outline">
              Get Started
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <div className="p-6 space-y-6 overflow-y-auto">
              <div>
                <h2 className="text-2xl font-bold">
                  Tell us your travel preferences
                </h2>
                <p className="text-gray-600 mt-2">
                  Just provide some basic information, and our trip planner will
                  generate a customized itinerary based on your preferences.
                </p>
              </div>
              <FormComponent />
            </div>
            <DrawerFooter>
              {/* <Button className="w-full">Create Itinerary</Button> */}
              <DrawerClose asChild>
                <Button variant="outline">Cancel</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </section>
    </div>
  );
}
