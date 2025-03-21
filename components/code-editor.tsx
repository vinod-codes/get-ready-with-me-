"use client"

import { useState } from "react"

interface CodeEditorProps {
  value: string
  onChange: (value: string | undefined) => void
  language?: string
}

export function CodeEditor({ value, onChange, language = "javascript" }: CodeEditorProps) {
  return (
    <div className="h-[300px] border rounded-lg overflow-hidden bg-[#1e1e1e]">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-full p-4 font-mono text-sm text-white bg-transparent resize-none focus:outline-none"
        style={{
          fontFamily: 'Consolas, Monaco, "Courier New", monospace',
          lineHeight: '1.5',
          tabSize: 2,
        }}
        spellCheck={false}
      />
    </div>
  )
} 