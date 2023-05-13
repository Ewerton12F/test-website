"use client";

import Service from "./service";
import { motion } from "framer-motion";

export default function ServiceTable() {
  return (
    <>
      <ul className="flex flex-wrap justify-center mx-4">
        {/* @ts-expect-error Async Server Component */}
        <Service />
      </ul>

      <div className="p-7">
        <p>Mais →</p>
      </div>
    </>
  );
}
