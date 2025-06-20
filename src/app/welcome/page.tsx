import React from "react";

export default function WelcomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-blue-200 p-8">
      <div className="max-w-2xl w-full bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-4xl font-bold text-blue-700 mb-4 text-center">Welcome to MCP Sandbox</h1>
        <p className="text-lg text-gray-700 mb-6 text-center">
          Model Context Protocol (MCP) is an open protocol for connecting tools, code, and AI assistants. It enables seamless context sharing and collaboration between your development environment and intelligent agents.
        </p>
        <section className="mb-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">How MCP Works</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>MCP servers expose context from your editor, codebase, or tools.</li>
            <li>MCP clients (like AI assistants) connect to servers to access and use this context.</li>
            <li>Context can include code, issues, documentation, and more.</li>
            <li>Secure, permissioned, and extensible for many workflows.</li>
          </ul>
        </section>
        <section>
          <h2 className="text-2xl font-semibold text-blue-600 mb-2">Example Use Cases</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            <li>AI code review and suggestions based on your current project.</li>
            <li>Automated documentation generation from code and issues.</li>
            <li>Seamless handoff between human and AI collaborators.</li>
            <li>Integrating custom tools and workflows with AI assistants.</li>
          </ul>
        </section>
      </div>
    </main>
  );
}
