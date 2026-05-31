"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("@monaco-editor/react"),
  { ssr: false }
);

export default function CodeEditorPage() {
  const [code, setCode] = useState(`#include <stdio.h>

int main() {
    
    return 0;
}
`);

  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const runCode = async () => {
    try {
      setLoading(true);
      setOutput("Running...");

      const res = await fetch("/api/run", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ code }),
      });

      const data = await res.json();

      if (data.output) {
        setOutput(data.output);
      } else {
        setOutput("No output");
      }
    } catch (error) {
      setOutput("Error running code");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f5f8ff] p-8">
      <h1 className="text-4xl font-bold mb-8">
        💻 C Code Editor
      </h1>

      <div className="grid md:grid-cols-2 gap-6">

        {/* Editor */}
        {/* Editor */}
<div className="rounded-3xl overflow-hidden shadow-xl h-[650px] bg-[#1e1e1e]">

  {/* Top Bar */}
  <div className="flex items-center justify-between px-4 py-3 bg-[#252526] border-b border-gray-700">
    <span className="text-gray-300 font-medium">
      Code Here
    </span>

    <button
      onClick={runCode}
      disabled={loading}
      className="
        flex
        items-center
        gap-2
        px-4
        py-2
        rounded-xl
        bg-gradient-to-r
        from-cyan-500
        to-blue-600
        text-white
        font-semibold
        hover:scale-105
        transition
      "
    >
      ▶ Run Code
    </button>
  </div>

  <Editor
    height="calc(100% - 60px)"
    language="c"
    theme="vs-dark"
    value={code}
    onChange={(value) => setCode(value || "")}
    options={{
      fontSize: 16,
      minimap: { enabled: false },
      automaticLayout: true,
    }}
  />
</div>

        {/* Output */}
        <div className="bg-black text-green-400 rounded-3xl shadow-xl p-5 h-[650px] overflow-auto">
          <h2 className="text-2xl font-bold mb-4 text-cyan-400">
            Output
          </h2>

          <pre className="whitespace-pre-wrap">
            {output}
          </pre>
        </div>
      </div>

      
    </div>
  );
}